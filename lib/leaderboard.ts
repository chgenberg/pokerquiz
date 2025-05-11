import Redis from 'redis';

const redis = Redis.createClient();

export async function getTopN(batchId: string, difficulty: string, region: string, N = 100) {
  return new Promise<{ userId: string; score: number }[]>((resolve, reject) => {
    const key = `lb:${batchId}:${difficulty}:${region}`;
    redis.zrevrange(key, 0, N - 1, 'WITHSCORES', (err: Error | null, result: string[]) => {
      if (err) return reject(err);
      const entries = [];
      for (let i = 0; i < result.length; i += 2) {
        entries.push({ userId: result[i], score: parseInt(result[i + 1], 10) });
      }
      resolve(entries);
    });
  });
} 