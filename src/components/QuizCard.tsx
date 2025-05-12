import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface Question {
  question: string;
  options: string[];
  correctOptionId: number;
}

interface QuizCardProps {
  questions: Question[];
}

const QuizCard: React.FC<QuizCardProps> = ({ questions }) => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showSkillPopup, setShowSkillPopup] = useState(true);

  useEffect(() => {
    if (quizStarted && !quizFinished) {
      if (timeLeft === 0) {
        handleAnswer(null);
        return;
      }
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [quizStarted, quizFinished, timeLeft]);

  const handleSkillLevelSelect = (level: number) => {
    setShowSkillPopup(false);
    setQuizStarted(true);
    setTimeLeft(30);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
  };

  const handleAnswer = (answerIndex: number | null) => {
    if (!quizStarted || quizFinished) return;
    const currentQuestion = questions[currentQuestionIndex];
    if (answerIndex !== null && answerIndex === currentQuestion.correctOptionId) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30);
    } else {
      setQuizFinished(true);
      setQuizStarted(false);
      // router.push('/results'); // Optional: navigate to a results page
    }
  };

  if (showSkillPopup) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Select Your Skill Level</h2>
          <p className="mb-4">Please select your skill level to start the quiz:</p>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
              <button
                key={level}
                onClick={() => handleSkillLevelSelect(level)}
                className="p-2 bg-[#23173a] text-white rounded hover:bg-opacity-80"
              >
                Level {level}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!quizStarted || quizFinished) {
    return quizFinished ? (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
        <p className="mb-2">Your score: {score} / {questions.length}</p>
        <button
          className="mt-4 px-6 py-2 bg-[#23173a] text-white rounded"
          onClick={() => {
            setShowSkillPopup(true);
            setQuizFinished(false);
            setScore(0);
            setCurrentQuestionIndex(0);
            setTimeLeft(30);
          }}
        >
          Try Again
        </button>
      </div>
    ) : null;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span className="text-sm text-gray-500">Time: {timeLeft}s</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="h-2.5 rounded-full"
            style={{ backgroundColor: '#23173a', width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-4">{currentQuestion.question}</h2>
      <div className="space-y-2">
        {currentQuestion.options.map((option: string, index: number) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className="w-full p-3 text-left bg-gray-100 rounded hover:bg-gray-200"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard; 