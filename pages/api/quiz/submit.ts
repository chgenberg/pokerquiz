import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

  // Spara leaderboard entry
  const lbScore = score * 1000000 - totalMs;
  await prisma.leaderboardEntry.create({
    data: {
      batchId,
      userId,
      region,
      score: lbScore,
      timeStampMs: totalMs
    }
  });

  // Flawless badge
  const flawless = score === questions.length;
  res.json({ score, flawless });
} 