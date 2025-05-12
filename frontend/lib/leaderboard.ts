import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getLeaderboard(
  batchId: string,
  difficulty: string,
  region: string,
  N: number = 10
) {
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

export async function updateLeaderboard(
  batchId: string,
  difficulty: string,
  region: string,
  userId: string,
  score: number
) {
  await prisma.leaderboardEntry.create({
    data: {
      batchId,
      userId,
      region,
      score,
      timeStampMs: Date.now()
    }
  });
}