import { NextApiRequest, NextApiResponse } from 'next';
import Redis from 'redis';

const redis = Redis.createClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { batchId, difficulty, region, N } = req.query;
  if (!batchId || !difficulty || !region) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  const key = `lb:${batchId}:${difficulty}:${region}`;
  const n = N ? parseInt(N as string, 10) : 100;
  redis.zrevrange(key, 0, n - 1, 'WITHSCORES', (err: Error | null, result: string[]) => {
    if (err) return res.status(500).json({ error: 'Redis error' });
    // result = [userId1, score1, userId2, score2, ...]
    const entries = [];
    for (let i = 0; i < result.length; i += 2) {
      entries.push({
        userId: result[i],
        score: parseInt(result[i + 1], 10)
      });
    }
    res.status(200).json(entries);
  });
} 