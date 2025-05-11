import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../contexts/QuizContext';
import '../styles/QuizInterface.css';

export default function QuizInterface() {
  const navigate = useNavigate();
  const { currentQuiz, submitAnswer, currentQuestionIndex, timeLeft, isComplete, score, stats } = useQuiz();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (isComplete) {
      setShowResults(true);
    }
  }, [isComplete]);

  const handleOptionSelect = (optionId) => {
    if (selectedOption !== null) return; // Prevent multiple selections
    setSelectedOption(optionId);
    submitAnswer(optionId);
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setSelectedOption(null);
    }
  };

  const handleRetry = () => {
    navigate('/');
  };

  if (!currentQuiz) {
    return <div>Loading quiz...</div>;
  }

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === currentQuiz.questions.length - 1;

  return (
    <div className="app-card minimalist">
      <header className="header-solid">
        <img src="/logo.png" alt="Poker Quiz Logo" className="logo-img" />
        <h1 className="title">POKER QUIZ</h1>
      </header>

      <div className="quiz-content">
        <div className="question-card">
          <div className="question-text">
            {currentQuestion.text}
          </div>
          <div className="options-grid">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                className={`option-btn ${
                  selectedOption === option.id ? 'selected' : ''
                } ${
                  selectedOption !== null && option.id === currentQuestion.correctOptionId
                    ? 'correct'
                    : selectedOption === option.id && option.id !== currentQuestion.correctOptionId
                    ? 'incorrect'
                    : ''
                }`}
                onClick={() => handleOptionSelect(option.id)}
                disabled={selectedOption !== null}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>

        <div className="quiz-controls">
          <div className="timer">Time: {timeLeft}s</div>
          {selectedOption !== null && !isLastQuestion && (
            <button className="next-btn" onClick={handleNext}>
              Next Question
            </button>
          )}
        </div>
      </div>

      {showResults && (
        <div className="results-modal-overlay">
          <div className="results-modal">
            <h2>Quiz Complete!</h2>
            <div className="score-display">{score}%</div>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">{stats.correctAnswers}</div>
                <div className="stat-label">Correct</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{stats.incorrectAnswers}</div>
                <div className="stat-label">Incorrect</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{stats.averageTime}s</div>
                <div className="stat-label">Avg. Time</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{stats.questionsAnswered}</div>
                <div className="stat-label">Total</div>
              </div>
            </div>
            <button className="retry-btn" onClick={handleRetry}>
              Try Another Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 