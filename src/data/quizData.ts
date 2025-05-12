export type QuizQuestion = {
  question: string;
  options: string[];
  correctOptionId: number;
  hint: string;
  explanation?: string;
};

export const quizData: QuizQuestion[] = [
  {
    question: 'Which hand outranks a straight: a flush or a full house?',
    options: ['Flush', 'Full house', 'Straight', 'Three of a kind'],
    correctOptionId: 1,
    hint: "Prometheus whispers: 'A house is stronger than a river's flow.'"
  },
  {
    question: 'How many hole cards does each player receive?',
    options: ['One', 'Two', 'Three', 'Four'],
    correctOptionId: 1,
    hint: "Prometheus: 'You need a pair of eyes to see your fate.'"
  },
  {
    question: 'What are the first three community cards called?',
    options: ['The river', 'The turn', 'The flop', 'The draw'],
    correctOptionId: 2,
    hint: "Prometheus: 'It\'s the sound of something falling.'"
  }
]; 