import React from 'react';

// TODO: Visa global/regional placering
// TODO: Dela-knappar (Twitter, Facebook, länk)
// TODO: Call-to-action för review
// TODO: Ta emot flawless-prop och visa badge/konfetti

const QuizResult: React.FC<{ flawless?: boolean }> = ({ flawless }) => {
  return (
    <div className="quiz-result">
      <h2>Resultat</h2>
      {/* Flawless Victory Badge */}
      {flawless && (
        <div className="flawless-badge">
          🏅 <b>Flawless Victory!</b>
          {/* TODO: Lägg till konfetti-animation och snygg badge-design */}
        </div>
      )}
      {/* TODO: Placering, delning, review */}
    </div>
  );
};

export default QuizResult; 