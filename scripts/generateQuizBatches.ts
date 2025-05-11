import { PrismaClient, Difficulty } from '@prisma/client';
import OpenAI from 'openai';

const prisma = new PrismaClient();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const difficulties = [Difficulty.BEGINNER, Difficulty.MEDIUM, Difficulty.PRO];
const prompts = {
  BEGINNER: `Create 20 multiple-choice questions about poker strategy for BEGINNERS.\nReturn JSON array with: id: slug-id, question: string (≤120 chars), answers: [string, string, string, string], correctIndex: 0-3`,
  MEDIUM: `Create 20 multiple-choice questions about poker strategy for INTERMEDIATE players.\nReturn JSON array with: id: slug-id, question: string (≤120 chars), answers: [string, string, string, string], correctIndex: 0-3`,
  PRO: `Create 20 multiple-choice questions about poker strategy for PROS.\nReturn JSON array with: id: slug-id, question: string (≤120 chars), answers: [string, string, string, string], correctIndex: 0-3`,
};

async function generateBatch(difficulty: Difficulty) {
  const prompt = prompts[difficulty as keyof typeof prompts];
  const res = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  });
  let content = res.choices[0].message?.content || '[]';
  console.log('OpenAI response:', content);
  content = content.trim();
  const codeBlockMatch = content.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (codeBlockMatch) {
    content = codeBlockMatch[1].trim();
  }
  let questions;
  try {
    questions = JSON.parse(content);
  } catch {
    throw new Error('Failed to parse OpenAI response');
  }
  const now = new Date();
  const validTo = new Date(now.getTime() + 72 * 60 * 60 * 1000);
  await prisma.quizBatch.create({
    data: {
      difficulty,
      questions,
      validFrom: now,
      validTo,
    },
  });
}

async function main() {
  for (const difficulty of difficulties) {
    await generateBatch(difficulty);
    console.log(`Generated batch for ${difficulty}`);
  }
  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});

// Run 'npm install' to install dependencies. If you get process type errors: 'npm i --save-dev @types/node'. 