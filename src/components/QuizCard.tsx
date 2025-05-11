import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setCurrentQuestion, setScore, setTimeLeft, setQuizStarted, setQuizFinished } from '../store/quizSlice';
import { Question } from '../types/quiz';
import { useRouter } from 'next/router';

interface QuizCardProps {
  questions: Question[];
}

const QuizCard: React.FC<QuizCardProps> = ({ questions }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentQuestionIndex, score, timeLeft, quizStarted, quizFinished } = useSelector((state: RootState) => state.quiz);
  const [showSkillPopup, setShowSkillPopup] = useState(true);

  useEffect(() => {
    if (quizStarted && !quizFinished) {
      const timer = setInterval(() => {
        if (timeLeft > 0) {
          dispatch(setTimeLeft(timeLeft - 1));
        } else {
          handleAnswer(null);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [quizStarted, quizFinished, timeLeft, dispatch]);

  const handleSkillLevelSelect = (level: number) => {
    // Here you can store the selected skill level in your state or context if needed
    console.log('Selected skill level:', level);
    setShowSkillPopup(false);
    dispatch(setQuizStarted(true));
  };

  const handleAnswer = (answer: string | null) => {
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      if (answer === currentQuestion.correctAnswer) {
        dispatch(setScore(score + 1));
      }
      if (currentQuestionIndex + 1 < questions.length) {
        dispatch(setCurrentQuestion(currentQuestionIndex + 1));
        dispatch(setTimeLeft(30));
      } else {
        dispatch(setQuizFinished(true));
        router.push('/results');
      }
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
    return null;
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
            onClick={() => handleAnswer(option)}
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