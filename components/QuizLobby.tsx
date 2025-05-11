import React from 'react';

// TODO: Fetch quiz batch info via API
// TODO: Show countdown to next quiz
// TODO: Show number of participants globally/regionally
// TODO: Buttons for BEGINNER, MEDIUM, PRO
// TODO: Fetch and show streak from backend

interface QuizLobbyProps {
  streak: number;
  onSelectDifficulty: (d: 'BEGINNER' | 'MEDIUM' | 'PRO') => void;
}

const QuizLobby: React.FC<QuizLobbyProps> = ({ streak, onSelectDifficulty }) => {
  return (
    <div className="quiz-lobby">
      {/* Streak widget */}
      <div className="streak-widget">
        🔥 Streak: <b>{streak}</b> days in a row
        {/* TODO: Add Apple-like animation when streak increases */}
      </div>
      <h1>Poker IQ-Challenge</h1>
      {/* TODO: Countdown, participants, difficulty selection */}
      <button onClick={() => onSelectDifficulty('BEGINNER')}>Beginner</button>
      <button onClick={() => onSelectDifficulty('MEDIUM')}>Medium</button>
      <button onClick={() => onSelectDifficulty('PRO')}>Pro</button>
    </div>
  );
};

export default QuizLobby; 