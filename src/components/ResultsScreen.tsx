import React from 'react';
import { GameSummary } from '../types';

interface ResultsScreenProps {
  summary: GameSummary;
  onPlayAgain: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ summary, onPlayAgain }) => {
  const percentage = Math.round((summary.correct / summary.total) * 100);
  
  const getPerformanceMessage = () => {
    if (percentage === 100) return "Perfect! 🎉";
    if (percentage >= 80) return "Excellent! 🌟";
    if (percentage >= 60) return "Good job! 👍";
    if (percentage >= 40) return "Keep practicing! 💪";
    return "Try again! 🎯";
  };

  return (
    <div className="results-container">
      <div className="title-pill">INITIALIZER</div>
      
      <h2 className="results-title">Game Over!</h2>
      
      <div className="percentage">{percentage}%</div>
      
      <div className="results-stats">
        <div className="stat-row">
          <span className="stat-label">Questions:</span>
          <span className="stat-value">{summary.total}</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Correct:</span>
          <span className="stat-value">{summary.correct}</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Score:</span>
          <span className="stat-value">{summary.score}</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Best Score:</span>
          <span className="stat-value">{summary.bestScore}</span>
        </div>
      </div>
      
      <div style={{ color: 'white', fontSize: '20px', marginTop: '10px' }}>
        {getPerformanceMessage()}
      </div>
      
      <button className="play-again-button" onClick={onPlayAgain}>
        PLAY AGAIN
      </button>
    </div>
  );
};