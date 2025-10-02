import React from 'react';

interface StartScreenProps {
  onStart: () => void;
  bestScore: number;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart, bestScore }) => {
  return (
    <div className="game-container">
      <div className="title-pill">INITIALIZER</div>
      
      {bestScore > 0 && (
        <div className="best-score" style={{ 
          color: 'white', 
          fontSize: '16px', 
          opacity: 0.9,
          marginTop: '20px'
        }}>
          Best Score: {bestScore}
        </div>
      )}
      
      <button className="start-button" onClick={onStart}>
        START
      </button>
    </div>
  );
};