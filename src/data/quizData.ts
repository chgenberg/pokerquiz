export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard' | 'super-elite-expert';
  explanation: string;
  hint: string;
}

export const quizData: QuizQuestion[] = [
  // BEGINNER QUESTIONS
  {
    id: 1,
    question: "Which hand outranks a straight: a flush or a full house?",
    options: ["Flush", "Full house", "They are equal", "Depends on the cards"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "A full house (three of a kind plus a pair) always outranks a flush (five cards of the same suit).",
    hint: "Think about the rarity of making three of a kind plus a pair versus five cards of the same suit."
  },
  {
    id: 2,
    question: "How many hole cards does each player receive?",
    options: ["One", "Two", "Three", "Four"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "Each player receives exactly two hole cards in Texas Hold'em.",
    hint: "The number of cards you can hold in your hand at the start of each hand."
  },
  {
    id: 3,
    question: "What are the first three community cards called?",
    options: ["The turn", "The river", "The flop", "The board"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation: "The first three community cards dealt are called 'the flop'.",
    hint: "This term comes from the sound of the cards being dealt quickly."
  },
  {
    id: 4,
    question: "What is the minimum possible straight (without using aces as high)?",
    options: ["2-3-4-5-6", "A-2-3-4-5", "3-4-5-6-7", "4-5-6-7-8"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "The 'wheel' or 'bicycle' straight (A-2-3-4-5) is the lowest possible straight when aces are played low.",
    hint: "This straight is often called the 'wheel' because it's the lowest possible straight."
  },
  {
    id: 5,
    question: "If the board shows K-K-Q-Q-8, what is the best possible five-card hand a single player could hold?",
    options: ["Full house", "Four of a kind", "Straight flush", "Royal flush"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "With K-K-Q-Q-8 on the board, a player holding K♠ K♣ would make four of a kind, which is the best possible hand in this situation.",
    hint: "Look at how many of each rank are already on the board."
  },
  {
    id: 6,
    question: "What is the name of the forced bet posted by the player two seats left of the dealer button?",
    options: ["Small blind", "Big blind", "Ante", "Forced bet"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "The big blind is posted by the player two seats to the left of the dealer button and is typically twice the size of the small blind.",
    hint: "This is the larger of the two forced bets in a standard game."
  },
  {
    id: 7,
    question: "In fixed-limit Hold'em, how many betting rounds are there?",
    options: ["Two", "Three", "Four", "Five"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation: "There are four betting rounds in fixed-limit Hold'em: pre-flop, flop, turn, and river.",
    hint: "Count the number of times players can bet in a complete hand."
  },
  {
    id: 8,
    question: "True/False: Suited cards always improve your pre-flop hand ranking.",
    options: ["True", "False", "Depends on the cards", "Only with aces"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "While suited cards add value to your hand, they don't automatically improve the hand's ranking. For example, A♠K♠ is still ranked the same as A♠K♥, just with added flush potential.",
    hint: "Think about whether having two cards of the same suit changes their face value."
  },
  {
    id: 9,
    question: "Which position acts first on every post-flop street?",
    options: ["Big blind", "Small blind", "Dealer", "Under the gun"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "The small blind acts first on all post-flop streets if they are still in the hand.",
    hint: "This position is closest to the dealer button on the left side."
  },
  {
    id: 10,
    question: "If you hold A♣ A♦ pre-flop, what is this starting hand nicknamed?",
    options: ["Cowboys", "Bullets", "Pocket rockets", "American Airlines"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation: "A pair of aces is commonly called 'pocket rockets' or 'bullets' in poker slang.",
    hint: "This hand is often associated with something that goes very fast and is very powerful."
  },
  {
    id: 11,
    question: "What is the minimum raise size in No-Limit Hold'em after a 1 BB open?",
    options: ["1 BB more", "2 BB more", "3 BB more", "4 BB more"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation: "The minimum raise must be at least the size of the previous bet or raise. After a 1 BB open, the minimum raise would be to 2 BB total (1 BB more).",
    hint: "The minimum raise must be at least equal to the previous bet or raise."
  },
  {
    id: 12,
    question: "What is a 'set'?",
    options: [
      "Three of a kind made with one hole card and two board cards",
      "Three of a kind made with a pocket pair and one board card",
      "Three of a kind made with three board cards",
      "Three of a kind made with two hole cards and one board card"
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "A set is three of a kind made when you have a pocket pair and one matching card comes on the board.",
    hint: "This is different from 'trips', which is made with one hole card and two board cards."
  },
  {
    id: 13,
    question: "When all remaining players reveal their cards at the end, what is that stage called?",
    options: ["The reveal", "The showdown", "The display", "The final hand"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "The final stage where players reveal their cards to determine the winner is called the 'showdown'.",
    hint: "This is when players 'show' their cards to determine who has the best hand."
  },
  {
    id: 14,
    question: "What is the most common number of players at a 'full-ring' table online?",
    options: ["Six", "Seven", "Eight", "Nine"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation: "A full-ring table typically seats nine players, which is the standard for most online poker rooms.",
    hint: "This is the maximum number of players that can comfortably fit around a standard poker table."
  },
  {
    id: 15,
    question: "You hold 8♠ 8♥ and the flop is 8♦ K♣ 2♠. What strong made hand do you have?",
    options: ["Three of a kind", "Set of eights", "Full house", "Four of a kind"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "When you have a pocket pair and one matching card comes on the board, you have a 'set'. In this case, it's a set of eights.",
    hint: "This is different from 'trips' because you started with a pair in your hand."
  },
  {
    id: 16,
    question: "True/False: You may use only one of your hole cards to make your final hand.",
    options: ["True", "False", "Depends on the board", "Only with a straight or flush"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation: "You can use zero, one, or both of your hole cards to make your best five-card hand.",
    hint: "Think about whether you're required to use both of your hole cards."
  },
  {
    id: 17,
    question: "Which blind is posted by the player immediately left of the dealer button?",
    options: ["Big blind", "Small blind", "No blind", "Double blind"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "The small blind is posted by the player immediately to the left of the dealer button.",
    hint: "This is the smaller of the two forced bets."
  },
  {
    id: 18,
    question: "Name the betting round that comes after the turn card.",
    options: ["The flop", "The river", "The showdown", "The final round"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "The river is the final community card and the last betting round before the showdown.",
    hint: "This is the last card dealt in a hand of Texas Hold'em."
  },
  {
    id: 19,
    question: "What's the maximum number of cards any player can ever physically hold in Hold'em?",
    options: ["Five", "Six", "Seven", "Eight"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation: "A player can hold up to seven cards total: their two hole cards plus the five community cards on the board.",
    hint: "Count your hole cards plus all possible community cards."
  },
  {
    id: 20,
    question: "In tournament play, when a player is out of chips, what term is used?",
    options: ["Busted", "Eliminated", "Out", "Finished"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "When a player loses all their chips in a tournament, they are said to be 'eliminated' or 'busted'.",
    hint: "This is the term used when a player can no longer continue in the tournament."

  },
  // INTERMEDIATE QUESTIONS
  {
    id: 21,
    question: "How many distinct pre-flop hand combinations (unsuited + suited) does Hold'em have?",
    options: ["1,326", "1,225", "1,098", "1,560"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "There are 1,326 distinct starting hand combinations in Hold'em (13 ranks × 12 ranks ÷ 2 for unsuited hands, plus 13 suited hands).",
    hint: "This includes all possible combinations of two cards from a 52-card deck."
  },
  {
    id: 22,
    question: "What does 'SPR' stand for, and why is an SPR < 3 often considered 'commitment' depth?",
    options: [
      "Stack-to-Pot Ratio; low SPR means limited fold equity",
      "Stack-to-Pot Ratio; low SPR means high fold equity",
      "Stack-to-Position Ratio; low SPR means limited fold equity",
      "Stack-to-Position Ratio; low SPR means high fold equity"
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "SPR (Stack-to-Pot Ratio) is the ratio of the effective stack size to the pot size. An SPR < 3 is considered commitment depth because it becomes difficult to fold with most hands.",
    hint: "This ratio helps determine how committed you are to the pot based on your stack size."
  },
  {
    id: 23,
    question: "In a 6-max cash game, which two positions are collectively called 'late position'?",
    options: [
      "UTG and MP",
      "MP and CO",
      "CO and BTN",
      "SB and BB"
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation: "In 6-max games, the cutoff (CO) and button (BTN) are considered late position, as they act last pre-flop.",
    hint: "These positions act after most other players in the hand."
  },
  {
    id: 24,
    question: "Define 'cold-calling a 3-bet.'",
    options: [
      "Calling a re-raise without having invested chips in the pot previously",
      "Calling a re-raise after having already called a bet",
      "Calling a re-raise with a cold hand",
      "Calling a re-raise with a strong hand"
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "Cold-calling a 3-bet means calling a re-raise without having invested any chips in the pot previously on that street.",
    hint: "This is different from calling a 3-bet after you've already called a bet."
  },
  {
    id: 25,
    question: "You open-raise 2.5 BB on the button. The small blind 3-bets to 9 BB. What is the pot size before action returns to you?",
    options: [
      "11.5 BB",
      "12.5 BB",
      "13.5 BB",
      "14.5 BB"
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation: "The pot size would be 13.5 BB (2.5 BB from your raise + 9 BB from the 3-bet + 1 BB from the big blind + 1 BB from the small blind).",
    hint: "Add up all the chips that have been put into the pot so far."
  },
  {
    id: 26,
    question: "Explain blockers and give one example pre-flop.",
    options: [
      "Holding a card reduces combos of that rank/suit for opponents; e.g., having A♠ blocks opponent's possible A♠K♠ suited combo",
      "Holding a card increases combos of that rank/suit for opponents; e.g., having A♠ increases opponent's possible A♠K♠ suited combo",
      "Holding a card has no effect on opponent's possible combos",
      "Holding a card only blocks straight possibilities"
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "Blockers are cards that reduce the number of possible combinations your opponent can have. For example, if you hold A♠, your opponent cannot have A♠K♠ suited.",
    hint: "Think about how holding a specific card affects what your opponent can have."
  },
  {
    id: 27,
    question: "What is the Minimum Defense Frequency (MDF) formula versus a pot-sized bet?",
    options: [
      "MDF = 1 – (bet / (pot + bet)) → 1 – (1 / 2) = 50%",
      "MDF = bet / (pot + bet) → 1 / 2 = 50%",
      "MDF = pot / (pot + bet) → 1 / 2 = 50%",
      "MDF = (pot + bet) / bet → 2 / 1 = 200%"
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "The MDF formula is 1 – (bet / (pot + bet)). For a pot-sized bet, this equals 1 – (1/2) = 50%, meaning you need to defend at least 50% of your range.",
    hint: "This formula helps determine how often you need to call to prevent your opponent from profiting with any two cards."
  },
  {
    id: 28,
    question: "What equity (%) does an open-ended straight draw have against top pair top kicker on the flop (≈ 100 BB stacks, no flush draw, two overcards dead)?",
    options: [
      "~20-25%",
      "~25-30%",
      "~31-32%",
      "~35-40%"
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation: "An open-ended straight draw has approximately 31-32% equity against top pair top kicker on the flop in this scenario.",
    hint: "This is the probability of making your straight by the river."
  },
  {
    id: 29,
    question: "Name two reasons to bet the flop other than value-betting.",
    options: [
      "Bluffing and denying equity",
      "Bluffing and building the pot",
      "Denying equity and building the pot",
      "Building the pot and getting information"
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "Two main reasons to bet the flop other than value-betting are bluffing (to make better hands fold) and denying equity (to prevent opponents from realizing their equity).",
    hint: "Think about why you might bet when you don't have the best hand."
  },
  {
    id: 30,
    question: "What is ICM in tournament poker?",
    options: [
      "Independent Chip Model – converts chip stacks into real-money equity",
      "Independent Chip Model – converts real-money into chip stacks",
      "Independent Chip Model – calculates pot odds",
      "Independent Chip Model – calculates implied odds"
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "ICM (Independent Chip Model) is a mathematical model that converts tournament chip stacks into real-money equity, helping players make optimal decisions based on their tournament equity.",
    hint: "This model helps determine the real value of your chips in a tournament setting."
  },
  {
    id: 31,
    question: "Against a 3 BB open from UTG in a 9-handed game, which suited connector is generally the weakest profitable 3-bet bluff candidate from the cutoff?",
    options: [
      "8♠7♠",
      "7♠6♠",
      "6♠5♠",
      "5♠4♠"
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation: "5♠4♠ is generally considered the weakest profitable 3-bet bluff candidate from the cutoff against a UTG open, as it has good playability post-flop.",
    hint: "This hand is often used as a 3-bet bluff because it has good post-flop playability."
  },
  {
    id: 32,
    question: "Calculate pot odds to call a 5 BB river bet into a 10 BB pot.",
    options: [
      "20%",
      "25%",
      "30%",
      "35%"
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation: "To calculate pot odds, divide the amount you need to call by the total pot after your call. 5 / (10 + 5) = 5/15 = 33.33%, so you need at least 25% equity to call.",
    hint: "Divide the amount you need to call by the total pot after your call."
  },
  {
    id: 33,
    question: "What is the term for re-stealing by 3-bet shoving a short stack over a late-position raise?",
    options: [
      "Jam resteal",
      "Shove resteal",
      "Both A and B",
      "Neither A nor B"
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation: "Both 'jam resteal' and 'shove resteal' are terms used to describe 3-bet shoving a short stack over a late-position raise.",
    hint: "This is a move that combines a 3-bet with an all-in shove."
  },
  {
    id: 34,
    question: "True/False: In GTO solutions, c-bet frequency generally increases as board texture becomes drier.",
    options: [
      "True",
      "False",
      "Depends on position",
      "Depends on stack depth"
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "In GTO solutions, c-bet frequency generally increases as board texture becomes drier, as there are fewer draws and more opportunities to win the pot.",
    hint: "Think about how the number of possible draws affects betting frequency."
  },
  {
    id: 35,
    question: "How many combo draws (straight + flush) exist on a flop of J♥ T♥ 3♣?",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation: "There are four combo draws on this flop: A♥K♥, K♥Q♥, Q♥9♥, and 9♥8♥, each of which has both a flush draw and a straight draw.",
    hint: "Count the number of suited hands that can make both a straight and a flush."
  },
  {
    id: 36,
    question: "What is a 'polarized range'?",
    options: [
      "A range consisting of very strong hands and bluffs",
      "A range consisting of medium-strength hands",
      "A range consisting of very weak hands",
      "A range consisting of all possible hands"
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "A polarized range consists mainly of very strong hands and bluffs, with few medium-strength hands. This is often used in situations where you want to either win a big pot or lose a small one.",
    hint: "Think about a range that has two distinct groups of hands."
  },
  {
    id: 37,
    question: "You hold Q♦ J♦ on a flop Q♠ 7♦ 2♥. Give one good turn barrel card for you and why.",
    options: [
      "Any diamond – adds flush draw equity",
      "Any queen – improves to trips",
      "Any jack – improves to two pair",
      "Any seven – improves to two pair"
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "Any diamond is a good turn barrel card because it adds flush draw equity and allows for a semi-bluff on the turn.",
    hint: "Think about cards that add equity to your hand while maintaining your ability to bluff."
  },
  {
    id: 38,
    question: "Define reverse implied odds.",
    options: [
      "Potential to lose additional chips when you improve but still end up second-best",
      "Potential to win additional chips when you improve",
      "Potential to lose additional chips when you don't improve",
      "Potential to win additional chips when you don't improve"
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "Reverse implied odds refer to the potential to lose additional chips when you improve your hand but still end up second-best to your opponent's hand.",
    hint: "Think about situations where improving your hand actually makes you lose more money."
  },
  {
    id: 39,
    question: "In multi-way pots, GTO solvers often recommend smaller / larger c-bets compared with heads-up?",
    options: [
      "Smaller",
      "Larger",
      "The same size",
      "Depends on position"
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "In multi-way pots, GTO solvers often recommend smaller c-bets compared with heads-up, as there are more players who could have strong hands.",
    hint: "Think about how the number of opponents affects the likelihood of someone having a strong hand."
  },
  {
    id: 40,
    question: "What is the main purpose of a blocking bet on the river?",
    options: [
      "Set a cheap price to reach showdown",
      "Build the pot",
      "Get value",
      "Bluff"
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "The main purpose of a blocking bet on the river is to set a cheap price to reach showdown and discourage larger bets from your opponent.",
    hint: "Think about why you might want to bet small when you're not sure if you have the best hand."
  },
  // ADVANCED QUESTIONS
  {
    id: 41,
    question: "Solve MDF (%) against a 1.2 × pot river shove.",
    options: [
      "40%",
      "45.5%",
      "50%",
      "55%"
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation: "MDF = 1 – (bet / (pot + bet)) = 1 – (1.2 / 2.2) ≈ 45.5%",
    hint: "Use the MDF formula: 1 – (bet / (pot + bet))"
  },
  {
    id: 42,
    question: "According to Nash equilibrium in HU push-fold (no ante, 20 BB effective), what is the minimum suited king the SB can profitably shove?",
    options: [
      "K9s",
      "K8s",
      "K7s",
      "K6s"
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation: "According to Nash equilibrium, K8s is the minimum suited king that can be profitably shoved from the small blind in heads-up play with 20 BB effective stacks.",
    hint: "This is based on game theory optimal (GTO) solutions for heads-up push-fold situations."
  },
  {
    id: 43,
    question: "How many total ace-high, wheel-blocking suited combos (A2-A5 suited) exist?",
    options: [
      "12",
      "14",
      "16",
      "18"
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation: "There are 16 total ace-high, wheel-blocking suited combos: 4 combos each of A2s, A3s, A4s, and A5s.",
    hint: "Count the number of possible suited combinations for each ace-low hand."
  },
  {
    id: 44,
    question: "On a rainbow flop Q♣ J♦ 9♠, how many two-pair+ combos can UTG have if their pre-flop range is exactly 15% (all suited aces, broadways, 77+)?",
    options: [
      "30 combos",
      "35 combos",
      "40 combos",
      "45 combos"
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation: "With a 15% range consisting of all suited aces, broadways, and 77+, UTG can have 40 two-pair+ combos on this flop.",
    hint: "This requires detailed enumeration of all possible combinations in the range."
  },
  {
    id: 45,
    question: "Give the exact hand-class frequency (%) of 3-bet bluffs vs value hands in a solver's 100 BB BTN vs CO scenario (2.5 BB open, 11 BB 3-bet) at equilibrium.",
    options: [
      "50% value / 50% bluff",
      "55% value / 45% bluff",
      "60% value / 40% bluff",
      "65% value / 35% bluff"
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation: "In a solver's 100 BB BTN vs CO scenario with a 2.5 BB open and 11 BB 3-bet, the equilibrium frequency is approximately 60% value hands and 40% bluffs.",
    hint: "This is based on game theory optimal (GTO) solutions for 3-betting ranges."
  },
  {
    id: 46,
    question: "Define 'cap' and 'uncap' in range terminology.",
    options: [
      "A capped range lacks the strongest possible hands; an uncapped range still contains them",
      "A capped range contains the strongest possible hands; an uncapped range lacks them",
      "A capped range is limited to certain hands; an uncapped range includes all hands",
      "A capped range is unlimited; an uncapped range is limited"
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation: "A capped range lacks the strongest possible hands (e.g., a range that can't have aces), while an uncapped range still contains the strongest possible hands.",
    hint: "Think about whether a range can contain the absolute strongest hands in poker."
  },
  {
    id: 47,
    question: "In PioSOLVER, what is the default node-locking weight (tolerance) for exploit analysis?",
    options: [
      "3%",
      "5%",
      "7%",
      "10%"
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation: "In PioSOLVER, the default node-locking weight (tolerance) for exploit analysis is 5%.",
    hint: "This is the default setting for how much deviation from GTO is allowed in exploit analysis."
  },
  {
    id: 48,
    question: "Compute the combo count of all nut-flush-blocker bluffs available on the river when you hold A♣ on a 9♣ 6♣ 2♦ K♥ 3♣ board (assume no 4-bet pot, CO vs BTN).",
    options: [
      "1 combo",
      "2 combos",
      "3 combos",
      "4 combos"
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation: "There are 3 suited wheel aces left (A♦, A♥, A♠) that can be used as nut-flush-blocker bluffs, as A♣ is already in your hand.",
    hint: "Count the number of remaining aces that can make a flush."
  },
  {
    id: 49,
    question: "What is the theoretical max exploit in BB/100 a perfect opponent can gain vs an open strategy that deviates 5% from Nash in heads-up play?",
    options: [
      "3 BB/100",
      "4 BB/100",
      "5 BB/100",
      "6 BB/100"
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation: "The theoretical maximum exploit in BB/100 that a perfect opponent can gain against a strategy that deviates 5% from Nash in heads-up play is 5 BB/100.",
    hint: "The maximum exploit is proportional to the deviation from GTO."
  },
  {
    id: 50,
    question: "In solver outputs, a mixed strategy > 50% frequency is often rounded to pure for live play. State a downside of this simplification.",
    options: [
      "Becomes exploitable by attentive opponents",
      "Increases variance",
      "Reduces expected value",
      "Makes the game more complex"
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation: "Rounding mixed strategies to pure strategies makes your play more exploitable by attentive opponents who can adjust to your simplified strategy.",
    hint: "Think about how simplifying a strategy might make it easier for opponents to counter."
  },
  {
    id: 51,
    question: "On a flop A♠ K♠ 5♥ (100 BB stacks, heads-up), GTO c-bet size mixes ~25% pot and 150% pot. Explain why polar big-bet appears.",
    options: [
      "Range splits: big bet with nut advantage + strong draws, small bet with range advantage",
      "Range splits: big bet with range advantage, small bet with nut advantage",
      "Range splits: big bet with weak hands, small bet with strong hands",
      "Range splits: big bet with medium hands, small bet with strong hands"
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation: "The polar big-bet appears because the range splits: big bets are used with nut advantage and strong draws, while small bets are used with range advantage.",
    hint: "Think about how different parts of your range might want to bet different sizes."
  },
  {
    id: 52,
    question: "Derive the equity realisation factor (alpha) necessary for calling K♠ Q♠ on the turn, facing 75% pot bet with 12 outs, pot odds 30%.",
    options: [
      "Need to realise ≥ 25% equity; KQ♠ vs top-pair ≈ 27% → call",
      "Need to realise ≥ 30% equity; KQ♠ vs top-pair ≈ 27% → fold",
      "Need to realise ≥ 35% equity; KQ♠ vs top-pair ≈ 27% → fold",
      "Need to realise ≥ 40% equity; KQ♠ vs top-pair ≈ 27% → fold"
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation: "You need to realise ≥ 30% equity to call. KQ♠ vs top-pair has ≈ 27% equity, which is less than required, so you should fold.",
    hint: "Compare the equity you need to call with the equity you actually have."
  },
  {
    id: 53,
    question: "Provide the exact GTO solver c-bet frequency on flop T♣ 8♠ 3♦ for BTN vs BB single raised (100 BB).",
    options: [
      "40%",
      "43%",
      "46%",
      "49%"
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation: "The exact GTO solver c-bet frequency on this flop for BTN vs BB single raised (100 BB) is approximately 46%.",
    hint: "This is based on game theory optimal (GTO) solutions for c-betting frequencies."
  },
  {
    id: 54,
    question: "What is the preferred exploit versus recreational players' uncapped limp-call range from the SB?",
    options: [
      "Raise larger iso sizes (6-8 BB) with polarised range",
      "Raise smaller iso sizes (3-4 BB) with polarised range",
      "Raise larger iso sizes (6-8 BB) with linear range",
      "Raise smaller iso sizes (3-4 BB) with linear range"
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation: "The preferred exploit versus recreational players' uncapped limp-call range from the SB is to raise larger iso sizes (6-8 BB) with a polarised range.",
    hint: "Think about how to maximize value against players who limp-call with weak hands."
  },
  {
    id: 55,
    question: "Name two board run-outs where solver shifts from range bet flop to range check turn despite equity lead.",
    options: [
      "Monotone flop completes flush on turn; paired turn on low-connected board",
      "Monotone flop completes flush on turn; high card on low-connected board",
      "Paired flop completes full house on turn; low card on high-connected board",
      "Paired flop completes full house on turn; high card on low-connected board"
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation: "The solver shifts from range bet flop to range check turn on two types of boards: when a monotone flop completes a flush on the turn, and when a paired turn comes on a low-connected board.",
    hint: "Think about board textures where your equity lead might disappear on the turn."
  },
  {
    id: 56,
    question: "In tournament endgame, describe the 'chip-EV gap' effect on 15 BB BTN shoving range as pay-jumps increase.",
    options: [
      "Range tightens (gap widens) due to higher ICM pressure",
      "Range widens (gap narrows) due to higher ICM pressure",
      "Range tightens (gap widens) due to lower ICM pressure",
      "Range widens (gap narrows) due to lower ICM pressure"
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation: "As pay-jumps increase in tournament endgame, the 'chip-EV gap' effect causes the 15 BB BTN shoving range to tighten (gap widens) due to higher ICM pressure.",
    hint: "Think about how the value of chips changes as you get closer to the money."
  },
  {
    id: 57,
    question: "What is the maximum allowed abstraction error (in EV%) considered acceptable in modern river solver buckets?",
    options: [
      "0.3%",
      "0.5%",
      "0.7%",
      "1.0%"
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation: "The maximum allowed abstraction error considered acceptable in modern river solver buckets is 0.5% EV.",
    hint: "This is the maximum acceptable deviation from perfect play in solver solutions."
  },
  {
    id: 58,
    question: "Explain why solver pre-flop 4-bet sizing increases as effective stack depth shrinks.",
    options: [
      "Need to reduce SPR and avoid giving correct price to suited connectors",
      "Need to increase SPR and give correct price to suited connectors",
      "Need to reduce SPR and give correct price to suited connectors",
      "Need to increase SPR and avoid giving correct price to suited connectors"
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation: "Solver pre-flop 4-bet sizing increases as effective stack depth shrinks because you need to reduce the SPR (Stack-to-Pot Ratio) and avoid giving the correct price to suited connectors.",
    hint: "Think about how stack depth affects the profitability of different hands."
  },
  {
    id: 59,
    question: "On river, population data shows under-bluffing at mid stakes. Give one GTO deviation to exploit.",
    options: [
      "Over-fold medium bluff-catchers; call stronger only",
      "Over-call medium bluff-catchers; fold stronger only",
      "Over-fold strong bluff-catchers; call medium only",
      "Over-call strong bluff-catchers; fold medium only"
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation: "To exploit under-bluffing at mid stakes, you should over-fold medium bluff-catchers and only call with stronger hands.",
    hint: "Think about how to adjust your calling range when opponents are not bluffing enough."
  },
  {
    id: 60,
    question: "Identify one scenario where negative freeroll applies in multi-way:",
    options: [
      "When you bet flush draw on paired board and get called by better made hand + draw",
      "When you bet straight draw on paired board and get called by better made hand + draw",
      "When you bet flush draw on unpaired board and get called by better made hand + draw",
      "When you bet straight draw on unpaired board and get called by better made hand + draw"
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation: "Negative freeroll applies in multi-way when you bet a flush draw on a paired board and get called by a better made hand that also has a draw.",
    hint: "Think about situations where your draw is dominated by an opponent's draw."
  },
  {
    id: 61,
    question: "In a single-raised pot BTN vs BB (100 BB deep), rainbow flop K♠-9♦-6♣. According to most modern nodelocked Pio trees (2 sizings), what is the exact aggregate c-bet frequency the solver chooses for BTN? (±2 %)",
    options: ["≈ 35%", "≈ 41%", "≈ 45%", "≈ 50%"],
    correctAnswer: 1,
    difficulty: "super-elite-expert",
    explanation: "Solver chooses ≈ 41% c-bet frequency for BTN in this spot.",
    hint: "Consider the solver's tendency to balance between value and bluff frequencies in this spot."
  },
  {
    id: 62,
    question: "How many unblocked nut-straight combos can SB hold on river A♣-T♠-8♦-7♣-9♥ when SB 3-bet pre-flop from 30 BB stack using a 12 % linear range?",
    options: ["4 combos", "6 combos", "8 combos", "10 combos"],
    correctAnswer: 1,
    difficulty: "super-elite-expert",
    explanation: "6 combos (KQ offsuit & suited excluding blocked suits).",
    hint: "Think about KQ combinations, excluding blocked suits."
  },
  {
    id: 63,
    question: "In HU push-fold (no ante), equilibrium shove range at 9 BB effective from the button is ~47.6 % of hands. What is the lowest offsuit queen that is profitable?",
    options: ["Q4-offsuit", "Q5-offsuit", "Q6-offsuit", "Q7-offsuit"],
    correctAnswer: 2,
    difficulty: "super-elite-expert",
    explanation: "Q6-offsuit is the lowest profitable offsuit queen.",
    hint: "Consider the equity needed against a calling range at this stack depth."
  },
  {
    id: 64,
    question: "Give the minimum defence frequency versus a 1.33× pot jam on the river. (Formula required)",
    options: ["≈ 40.9%", "≈ 42.9%", "≈ 45.9%", "≈ 47.9%"],
    correctAnswer: 1,
    difficulty: "super-elite-expert",
    explanation: "MDF = 1 – (1.33 / 2.33) ≈ 42.9%.",
    hint: "Use the formula: MDF = 1 – (bet size / (bet size + pot))"
  },
  {
    id: 65,
    question: "On flop T♥-7♥-3♦ with 3 sizes (25 %, 75 %, 150 %), solver chooses 25 %-pot c-bet how often with A♠-K♦ BTN vs BB? (±3 %)",
    options: ["~8%", "~12%", "~15%", "~20%"],
    correctAnswer: 1,
    difficulty: "super-elite-expert",
    explanation: "Solver chooses ~12% (mostly checks) with AK.",
    hint: "Consider the board texture and how it interacts with AK's equity."
  },
  {
    id: 66,
    question: "Compute raw equity of 8♠-5♠ vs Q♦-Q♣ on flop 6♠-7♣-2♥ (no back-door flush for villain). Give to 1 decimal.",
    options: ["45.4%", "46.4%", "47.4%", "48.4%"],
    correctAnswer: 2,
    difficulty: "super-elite-expert",
    explanation: "47.4% equity for 8♠-5♠ vs Q♦-Q♣.",
    hint: "Calculate the number of outs and consider the straight draw possibilities."
  },
  {
    id: 67,
    question: "Under Fedor Holz's 2018 PIO pre-flop sims (100 BB, 4-bet = 22 BB), which exact suited connector first enters pure 4-bet bluff range CO vs BTN?",
    options: ["5♠-4♠", "6♠-5♠", "7♠-6♠", "8♠-7♠"],
    correctAnswer: 1,
    difficulty: "super-elite-expert",
    explanation: "6♠-5♠ is the first suited connector to enter pure 4-bet bluff range.",
    hint: "Consider the balance between playability and blocker effects."
  },
  {
    id: 68,
    question: "Name the only rank that solver never mixes as a river thin-value bet on board K♣-K♦-4♠-4♦-2♣ (BTN vs BB SRP) despite being top-two.",
    options: ["K-K", "4-4", "2-2", "A-A"],
    correctAnswer: 1,
    difficulty: "super-elite-expert",
    explanation: "4-4 (turned quads; always checks or overbets, never thin-values).",
    hint: "Think about the board texture and how it affects the value betting strategy."
  },
  {
    id: 69,
    question: "A live obscure rule: in TDA, if a player verbally declares 'check in the dark' before cards are dealt for the next street, can it later be retracted?",
    options: ["Yes, if no action has occurred", "No, declaration is binding", "Yes, if within 10 seconds", "No, but only in tournament play"],
    correctAnswer: 1,
    difficulty: "super-elite-expert",
    explanation: "No; declaration is binding once next street begins.",
    hint: "Consider the binding nature of verbal declarations in poker rules."
  },
  {
    id: 70,
    question: "How many distinct triple-barrel bluff combinations remain on river Q♠-J♠-4♦-2♣-2♥ when hero opened CO 30 % and c-bet flop/turn large with only A-X spade draws?",
    options: ["4 combos", "6 combos", "8 combos", "10 combos"],
    correctAnswer: 1,
    difficulty: "super-elite-expert",
    explanation: "6 combos (A♠9♠, A♠8♠, A♠7♠, A♠6♠, A♠5♠, A♠3♠).",
    hint: "Count the remaining A-X spade combinations that haven't made a flush."
  },
  {
    id: 71,
    question: "GTO Wizard (v2) shows that in 4-bet pots OOP, solver chooses a single flop size. What is that size expressed as a % of the pot?",
    options: ["25% pot", "33% pot", "50% pot", "75% pot"],
    correctAnswer: 1,
    difficulty: "super-elite-expert",
    explanation: "33% pot is the single flop size chosen.",
    hint: "Consider the balance between value and protection in 4-bet pots."
  },
  {
    id: 72,
    question: "In a multi-way solver sim CO-BTN-BB, who has range advantage on A♦-6♦-6♣ flop?",
    options: ["CO", "BTN", "BB", "Equal advantage"],
    correctAnswer: 0,
    difficulty: "super-elite-expert",
    explanation: "CO retains range advantage; BB equity ≈ BTN equity < CO.",
    hint: "Think about pre-flop ranges and how they interact with this board texture."
  },
  {
    id: 73,
    question: "Exact number of board-pairing run-outs (turn–river) that remove all flop straight draws on T-9-7 rainbow.",
    options: ["15 combos", "18 combos", "21 combos", "24 combos"],
    correctAnswer: 1,
    difficulty: "super-elite-expert",
    explanation: "18 out of 45 turn×river combos remove all straight draws.",
    hint: "Calculate the number of turn-river combinations that pair the board."
  },
  {
    id: 74,
    question: "On solvable flop nodes, the correlation (R²) between polarity and bet-size selection exceeds what value?",
    options: ["R² > 0.6", "R² > 0.7", "R² > 0.8", "R² > 0.9"],
    correctAnswer: 2,
    difficulty: "super-elite-expert",
    explanation: "R² > 0.8 is the threshold.",
    hint: "Consider the strong relationship between board texture and bet sizing."
  },
  {
    id: 75,
    question: "Compute SPR after BTN flats a 3-bet to 10.5 BB from BB, starting stacks 100 BB.",
    options: ["3.16", "4.16", "5.16", "6.16"],
    correctAnswer: 1,
    difficulty: "super-elite-expert",
    explanation: "SPR ≈ 4.16 (Pot = 21.5 BB; effective = 89.5).",
    hint: "Calculate: (Effective stack) / (Pot size after action)"
  },
  {
    id: 76,
    question: "Post-flop exploit: population at $500NL folds to river over-bets what % more often than solver equilibrium? (Upswing 2023 database)",
    options: ["~10%", "~13%", "~15%", "~18%"],
    correctAnswer: 1,
    difficulty: "super-elite-expert",
    explanation: "~13% extra folds compared to solver equilibrium.",
    hint: "Consider the population's tendency to overfold to large river bets."
  },
  {
    id: 77,
    question: "Give the only river node in which Pio defaults to no further solving and outputs 'skip' due to symmetric ranges.",
    options: ["Any all-in situation", "Perfectly mirrored board texture", "Heads-up pre-flop all-in", "Any river check-check"],
    correctAnswer: 1,
    difficulty: "super-elite-expert",
    explanation: "Perfectly mirrored board texture + identical ranges (rare; e.g., HU pre-flop all-in).",
    hint: "Think about situations where ranges are perfectly balanced."
  },
  {
    id: 78,
    question: "In PLO5, what is nut-equity share (to 0.1 %) of top-set vs wrap+FD on K-T-8 two-tone (200 BB)?",
    options: ["50.9%", "51.9%", "52.9%", "53.9%"],
    correctAnswer: 2,
    difficulty: "super-elite-expert",
    explanation: "52.9% is the nut-equity share.",
    hint: "Consider the equity distribution in PLO5 between made hands and draws."
  },
  {
    id: 79,
    question: "What is the maximum EV error tolerated (in bb/100) in MonkerSolver flop abstraction using 1845 buckets?",
    options: ["0.10 bb/100", "0.15 bb/100", "0.20 bb/100", "0.25 bb/100"],
    correctAnswer: 1,
    difficulty: "super-elite-expert",
    explanation: "0.15 bb/100 is the max EV error tolerated.",
    hint: "Think about the balance between accuracy and computational efficiency."
  },
  {
    id: 80,
    question: "A famous solver result: BTN vs BB on Q-9-2 two-tone: what % of range does BB check-raise? (three sizes allowed)",
    options: ["10%", "12%", "14%", "16%"],
    correctAnswer: 2,
    difficulty: "super-elite-expert",
    explanation: "14% of combos are check-raised by BB.",
    hint: "Consider the balance between value and bluff frequencies in this spot."
  }
] as const; 