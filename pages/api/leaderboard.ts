import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { batchId, difficulty, region, N } = req.query;
  if (!batchId || !difficulty || !region) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  const n = N ? parseInt(N as string, 10) : 100;
  
  try {
    const entries = await prisma.leaderboardEntry.findMany({
      where: {
        batchId: batchId as string,
        region: region as string
      },
      orderBy: {
        score: 'desc'
      },
      take: n
    });

    res.status(200).json(entries.map(entry => ({
      userId: entry.userId,
      score: entry.score
    })));
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
} 