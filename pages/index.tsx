import React, { useState, useEffect, useRef } from 'react';
import { quizData, QuizQuestion } from '../src/data/quizData';

// Skill level kategorier och beskrivningar
const skillLevels = [
  { range: [1, 2], label: 'Beginner', desc: 'Just learning the ropes' },
  { range: [3, 4], label: 'Novice', desc: 'Know the basics, but still new' },
  { range: [5, 6], label: 'Intermediate', desc: 'Comfortable, but not advanced' },
  { range: [7, 8], label: 'Advanced', desc: 'Confident and strategic' },
  { range: [9, 10], label: 'Pro', desc: 'Poker is second nature' },
];

const IndexPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(20);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [showSkillPopup, setShowSkillPopup] = useState(true);
  const [skillLevel, setSkillLevel] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [hintUsed, setHintUsed] = useState<{ [qIdx: number]: boolean }>({});
  const [localQuestions, setLocalQuestions] = useState<QuizQuestion[] | null>(null);
  const [questionTimer, setQuestionTimer] = useState(30);

  // Start quiz with selected skill level
  const handleStartQuiz = () => {
    setShowSkillPopup(false);
    let questions;
    let timer;
    if (skillLevel! <= 2) {
      questions = quizData.filter(q => q.difficulty === 'easy');
      timer = 30;
    } else if (skillLevel! <= 6) {
      questions = quizData.filter(q => q.difficulty === 'medium');
      timer = 20;
    } else {
      questions = quizData.filter(q => q.difficulty === 'hard');
      timer = 15;
    }
    setLocalQuestions(questions);
    setQuestionTimer(timer);
    setCurrent(0);
    setAnswers([]);
    setShowResult(false);
    setSelected(null);
    setTimer(timer);
    setShowHint(false);
    setHintUsed({});
  };

  const handleSkillLevelSelect = (level: number) => {
    setSkillLevel(level);
    handleStartQuiz();
  };

  const handleAnswer = (answerIndex: number) => {
    if (selected !== null) return;
    setSelected(answerIndex);
    setAnswers([...answers, answerIndex]);
    if (current < (localQuestions?.length || 0) - 1) {
      setTimeout(() => {
        setCurrent(current + 1);
        setSelected(null);
        setTimer(questionTimer);
        setShowHint(false);
      }, 1200);
    } else {
      setShowResult(true);
    }
  };

  const handleHint = () => {
    if (!hintUsed[current]) {
      setShowHint(true);
      setHintUsed({ ...hintUsed, [current]: true });
    }
  };

  useEffect(() => {
    if (timer > 0 && !showResult) {
      timerRef.current = setTimeout(() => setTimer(timer - 1), 1000);
    } else if (timer === 0 && !showResult) {
      handleAnswer(-1); // Time's up
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [timer, showResult]);

  // --- DESIGN ---
  // Skill level popup
  if (showSkillPopup) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#23173a]/80 z-50">
        <div className="bg-[#f0e9db] p-8 rounded-3xl shadow-2xl max-w-md w-full flex flex-col items-center border-4 border-[#23173a]">
          {/* Maskot/ikon, byt ut src om du har en egen */}
          <img src="/maskot.png" alt="Mascot" className="w-20 h-20 mb-4 object-contain" />
          <h2 className="text-2xl font-bold mb-2 text-[#23173a]">How would you rate your poker skill?</h2>
          <p className="mb-6 text-[#23173a] text-center">Select your level from 1 (amateur) to 10 (super pro)</p>
          <div className="flex justify-center space-x-2 mb-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
              <button
                key={level}
                onClick={() => handleSkillLevelSelect(level)}
                className={`w-8 h-8 rounded-full font-bold text-base flex items-center justify-center transition-all duration-150 border-2
                  ${skillLevel === level
                    ? 'bg-[#23173a] text-black border-[#23173a] shadow-lg'
                    : 'bg-[#e5e0f7] text-black border-[#23173a] hover:bg-[#bcb3e6]'}
                `}
                style={{ minWidth: 32, minHeight: 32 }}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!localQuestions) {
    return <div>Loading...</div>;
  }

  const currentQuestion = localQuestions[current];
  const correctCount = answers.filter((a, i) => a === localQuestions[i].correctAnswer).length;

  return (
    <div className="min-h-screen bg-[#f0e9db] flex flex-col items-center justify-center py-8 px-2">
      {/* Quiz Card */}
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center border-4 border-[#23173a] font-sans relative" style={{ minHeight: '520px' }}>
        {/* Progressbar och timer */}
        <div className="w-full flex flex-col gap-2 mb-6 relative">
          <div className="flex justify-between items-center w-full">
            <span className="text-sm text-[#23173a] font-semibold">Question {current + 1} / {localQuestions.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden relative" style={{ position: 'relative' }}>
            <div
              className="h-3 rounded-full transition-all duration-300"
              style={{ backgroundColor: '#23173a', width: `${((current + 1) / localQuestions.length) * 100}%` }}
            ></div>
          </div>
          {/* Timer nere till höger */}
          <div className="absolute right-6 bottom-6 z-10">
            <span className="font-mono text-base bg-[#f0e9db] px-4 py-1 rounded-full text-[#23173a] border-2 border-[#23173a] shadow">⏰ {timer}s</span>
          </div>
        </div>
        {/* Fråga */}
        <div className="text-2xl font-bold mb-6 text-[#23173a] text-center w-full" style={{ fontFamily: 'Montserrat, ui-sans-serif, system-ui, sans-serif', fontWeight: 700 }}>
          {currentQuestion.question}
        </div>
        {/* Hint-bubbla */}
        {showHint && (
          <div className="mb-4 p-4 bg-[#f0e9db] rounded-xl text-[#23173a] w-full text-center border border-[#23173a] shadow">
            <span className="italic">{currentQuestion.hint}</span>
          </div>
        )}
        {/* Svarsalternativ */}
        <div className="flex flex-col gap-4 w-full">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selected !== null}
              className={`w-full py-4 px-4 text-lg rounded-xl font-semibold border-2 transition-all duration-200 text-left shadow-sm
                ${selected === null
                  ? 'bg-[#f0e9db] text-[#23173a] border-[#23173a] hover:bg-[#23173a] hover:text-white'
                  : selected === index
                  ? index === currentQuestion.correctAnswer
                    ? 'bg-green-500 border-green-600 text-white'
                    : 'bg-red-500 border-red-600 text-white'
                  : index === currentQuestion.correctAnswer
                  ? 'bg-green-100 border-green-300 text-green-700'
                  : 'bg-gray-100 border-gray-200 text-gray-400'}
              `}
            >
              {option}
            </button>
          ))}
        </div>
        {/* Hint-knapp */}
        {!hintUsed[current] && !showHint && (
          <button
            onClick={handleHint}
            className="mt-8 mb-2 px-6 py-3 bg-[#23173a] text-white rounded-full font-semibold shadow hover:bg-[#3a2960] transition text-lg flex items-center justify-center gap-2 mx-auto"
            style={{ minWidth: 220 }}
          >
            <span role="img" aria-label="bulb">💡</span> Help me Prometheus
          </button>
        )}
        {/* Feedback */}
        {selected !== null && (
          <div className="mt-6 text-center text-xl font-bold w-full">
            {selected === currentQuestion.correctAnswer ? (
              <span className="text-green-600">Correct!</span>
            ) : (
              <span className="text-red-600">Wrong!</span>
            )}
            <div className="mt-2 text-base text-[#23173a]">{currentQuestion.explanation}</div>
          </div>
        )}
        {/* Resultat-popup */}
        {showResult && (
          <div className="fixed inset-0 bg-[#23173a]/80 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center border-4 border-[#f0e9db] relative">
              <img src="/maskot2.png" alt="Mascot" className="w-36 h-36 mx-auto mb-4 object-contain rounded-[30%]" />
              <h2 className="text-3xl font-bold mb-4 text-[#23173a]">Quiz Complete!</h2>
              <div className="text-6xl font-extrabold mb-2 text-[#23173a]">{correctCount} / {localQuestions.length}</div>
              <div className="mb-4 text-xl text-[#23173a]">Correct answers</div>
              <button
                className="mt-4 px-8 py-3 bg-[#23173a] text-white rounded-xl font-semibold shadow hover:scale-105 transition text-lg"
                onClick={() => {
                  setShowSkillPopup(true);
                  setSkillLevel(null);
                  setShowResult(false);
                }}
              >
                Try Again
              </button>
            </div>
          </div>
        )}
        {/* Maskotcar.png längst ner på quizkortet, nära vänsterkanten */}
        <div className="absolute left-2 bottom-0 z-20" style={{ pointerEvents: 'none' }}>
          <img src="/maskotcar.png" alt="Mascot Car" className="w-24 h-16 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default IndexPage; 