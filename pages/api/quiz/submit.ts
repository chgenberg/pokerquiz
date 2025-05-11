import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { Redis } from 'ioredis';

const prisma = new PrismaClient();
const redis = process.env.REDIS_URL ? new Redis(process.env.REDIS_URL) : new Redis();

// Kör 'npm install' för att installera beroenden. Om du får process-typfel: 'npm i --save-dev @types/node'.

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { batchId, userId, answers, totalMs, region } = req.body;
  if (!batchId || !userId || !answers || typeof totalMs !== 'number' || !region) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const batch = await prisma.quizBatch.findUnique({ where: { id: batchId } });
  if (!batch) return res.status(404).json({ error: 'Batch not found' });
  if (new Date() > batch.validTo) return res.status(400).json({ error: 'Quiz expired' });
  const questions = batch.questions as any[];
  if (answers.length !== questions.length) return res.status(400).json({ error: 'Wrong number of answers' });
  // Räkna poäng
  let score = 0;
  answers.forEach((a: number, i: number) => {
    if (a === questions[i].correctIndex) score++;
  });
  // Skapa QuizRun
  await prisma.quizRun.create({
    data: { userId, batchId, score, timeStampMs: totalMs },
  });
  // Uppdatera Redis leaderboard
  const lbKey = `lb:${batchId}:${batch.difficulty}:${region}`;
  const lbScore = score * 1000000 - totalMs;
  await redis.zadd(lbKey, lbScore, userId);
  // Global leaderboard
  const globalKey = `lb:${batchId}:${batch.difficulty}:ALL`;
  await redis.zadd(globalKey, lbScore, userId);
  // Hämta och uppdatera streak
  const streakKey = `streak:${userId}`;
  let streak = 1;
  const lastDateStr = await redis.get(streakKey);
  const today = new Date().toISOString().slice(0, 10);
  if (lastDateStr) {
    const lastDate = new Date(lastDateStr);
    const diff = (new Date(today).getTime() - new Date(lastDateStr).getTime()) / (1000 * 60 * 60 * 24);
    if (diff === 1) {
      const currentStreak = await redis.get(`${streakKey}:count`);
      streak = (Number(currentStreak) || 1) + 1;
    } else if (diff === 0) {
      const currentStreak = await redis.get(`${streakKey}:count`);
      streak = Number(currentStreak) || 1;
    } else {
      streak = 1;
    }
  }
  await redis.set(streakKey, today);
  await redis.set(`${streakKey}:count`, streak);
  // Flawless badge
  const flawless = score === questions.length;
  res.json({ score, streak, flawless });
} 