import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Difficulty } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { difficulty } = req.query;
  if (!difficulty || typeof difficulty !== 'string') {
    return res.status(400).json({ error: 'Missing difficulty' });
  }
  const batch = await prisma.quizBatch.findFirst({
    where: {
      difficulty: difficulty.toUpperCase() as Difficulty,
      validFrom: { lte: new Date() },
      validTo: { gte: new Date() },
    },
    orderBy: { validFrom: 'desc' },
  });
  if (!batch) return res.status(404).json({ error: 'No active quiz batch' });
  // Ta bort correctIndex ur frågorna
  const questions = (batch.questions as any[]).map(q => {
    const { correctIndex, ...rest } = q;
    return rest;
  });
  res.json({
    id: batch.id,
    difficulty: batch.difficulty,
    questions,
    validFrom: batch.validFrom,
    validTo: batch.validTo,
  });
} 