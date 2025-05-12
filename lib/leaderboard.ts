import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getTopN(batchId: string, difficulty: string, region: string, N = 100) {
  const entries = await prisma.leaderboardEntry.findMany({
    where: {
      batchId,
      region
    },
    orderBy: {
      score: 'desc'
    },
    take: N
  });

  return entries.map(entry => ({
    userId: entry.userId,
    score: entry.score
  }));
} 