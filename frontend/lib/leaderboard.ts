import { Redis } from 'ioredis';

const redis = process.env.REDIS_URL ? new Redis(process.env.REDIS_URL) : new Redis();

export async function getLeaderboard(
  batchId: string,
  difficulty: string,
  region: string,
  N: number = 10
) {
  return new Promise<{ userId: string; score: number }[]>((resolve, reject) => {
    const key = `lb:${batchId}:${difficulty}:${region}`;
    redis.zrevrange(
      key,
      0,
      N - 1,
      'WITHSCORES',
      (err: Error | null | undefined, result: string[] | undefined) => {
        if (err) return reject(err);
        if (!result) return resolve([]);
        const entries = [];
        for (let i = 0; i < result.length; i += 2) {
          entries.push({
            userId: result[i],
            score: parseInt(result[i + 1], 10),
          });
        }
        resolve(entries);
      }
    );
  });
}

export async function updateLeaderboard(
  batchId: string,
  difficulty: string,
  region: string,
  userId: string,
  score: number
) {
  const key = `lb:${batchId}:${difficulty}:${region}`;
  await redis.zadd(key, score, userId);
}