export type QuizQuestion = {
  question: string;
  options: string[];
  correctOptionId: number;
  hint: string;
  explanation?: string;
};

export const quizData = {
  easy: [
    {
      question: 'Which hand outranks a straight: a flush or a full house?',
      options: ['Flush', 'Full house', 'Straight', 'Three of a kind'],
      correctOptionId: 1,
      hint: "Prometheus whispers: 'A house is stronger than a river's flow.'"
    },
    {
      question: 'How many hole cards does each player receive?',
      answers: ['One', 'Two', 'Three', 'Four'],
      correctIndex: 1,
      hint: "Prometheus: 'You need a pair of eyes to see your fate.'"
    },
    {
      question: 'What are the first three community cards called?',
      answers: ['The river', 'The turn', 'The flop', 'The draw'],
      correctIndex: 2,
      hint: "Prometheus: 'It\'s the sound of something falling.'"
    },
    {
      question: 'What is the minimum possible straight (without using aces as high)?',
      answers: ['A-2-3-4-5', '2-3-4-5-6', '3-4-5-6-7', 'A-K-Q-J-10'],
      correctIndex: 0,
      hint: "Prometheus: 'The wheel keeps turning from the very start.'"
    },
    {
      question: 'If the board shows K-K-Q-Q-8, what is the best possible five-card hand a single player could hold?',
      answers: ['Full house', 'Four of a kind', 'Straight', 'Flush'],
      correctIndex: 1,
      hint: "Prometheus: 'Two kings in your hand make you a monarch among mortals.'"
    },
    {
      question: 'What is the name of the forced bet posted by the player two seats left of the dealer button?',
      answers: ['Small blind', 'Big blind', 'Ante', 'Straddle'],
      correctIndex: 1,
      hint: "Prometheus: 'It\'s not small, it\'s...?"
    },
    {
      question: 'In fixed-limit Hold\'em, how many betting rounds are there?',
      answers: ['Three', 'Four', 'Five', 'Two'],
      correctIndex: 1,
      hint: "Prometheus: 'Count the streets: pre, flop, turn, river.'"
    },
    {
      question: 'True/False: Suited cards always improve your pre-flop hand ranking.',
      answers: ['True', 'False', 'Only with aces', 'Only with pairs'],
      correctIndex: 1,
      hint: "Prometheus: 'Color isn\'t everything.'"
    },
    {
      question: 'Which position acts first on every post-flop street?',
      answers: ['Big blind', 'Small blind', 'Button', 'Cutoff'],
      correctIndex: 1,
      hint: "Prometheus: 'The smallest must speak first.'"
    },
    {
      question: 'If you hold A♣ A♦ pre-flop, what is this starting hand nicknamed?',
      answers: ['Pocket rockets', 'Cowboys', 'Snowmen', 'Ducks'],
      correctIndex: 0,
      hint: "Prometheus: 'They shoot for the stars.'"
    },
    {
      question: 'What is the minimum raise size in No-Limit Hold\'em after a 1 BB open?',
      answers: ['1 BB', '2 BB', '3 BB', '4 BB'],
      correctIndex: 1,
      hint: "Prometheus: 'Double or nothing.'"
    },
    {
      question: 'What is a "set"?',
      answers: ['Three of a kind with a pocket pair', 'Four of a kind', 'Straight', 'Flush'],
      correctIndex: 0,
      hint: "Prometheus: 'A pair in your hand, a match on the board.'"
    },
    {
      question: 'When all remaining players reveal their cards at the end, what is that stage called?',
      answers: ['Showdown', 'Turn', 'River', 'Flop'],
      correctIndex: 0,
      hint: "Prometheus: 'The final curtain.'"
    },
    {
      question: 'What is the most common number of players at a "full-ring" table online?',
      answers: ['Six', 'Nine', 'Ten', 'Eight'],
      correctIndex: 1,
      hint: "Prometheus: 'Three times three.'"
    },
    {
      question: 'You hold 8♠ 8♥ and the flop is 8♦ K♣ 2♠. What strong made hand do you have?',
      answers: ['Set of eights', 'Straight', 'Flush', 'Full house'],
      correctIndex: 0,
      hint: "Prometheus: 'Three of a kind, all the same number.'"
    },
    {
      question: 'True/False: You may use only one of your hole cards to make your final hand.',
      answers: ['True', 'False', 'Only with aces', 'Only with pairs'],
      correctIndex: 0,
      hint: "Prometheus: 'Sometimes, less is more.'"
    },
    {
      question: 'Which blind is posted by the player immediately left of the dealer button?',
      answers: ['Big blind', 'Small blind', 'Ante', 'Straddle'],
      correctIndex: 1,
      hint: "Prometheus: 'Small steps first.'"
    },
    {
      question: 'Name the betting round that comes after the turn card.',
      answers: ['Flop', 'River', 'Showdown', 'Pre-flop'],
      correctIndex: 1,
      hint: "Prometheus: 'It flows to the end.'"
    },
    {
      question: 'What\'s the maximum number of cards any player can ever physically hold in Hold\'em?',
      answers: ['Five', 'Six', 'Seven', 'Eight'],
      correctIndex: 2,
      hint: "Prometheus: 'Two in your hand, five on the table.'"
    },
    {
      question: 'In tournament play, when a player is out of chips, what term is used?',
      answers: ['Eliminated', 'All-in', 'Folded', 'Checked'],
      correctIndex: 0,
      hint: "Prometheus: 'No chips, no seat.'"
    }
  ],
  // ... Lägg till medium och hard på samma sätt ...
}; 