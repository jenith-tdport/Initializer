import React from 'react';

interface ErrorScreenProps {
  error: string;
  onRetry: () => void;
}

export const ErrorScreen: React.FC<ErrorScreenProps> = ({ error, onRetry }) => {
  return (
    <div className="game-container">
      <div className="title-pill">INITIALIZER</div>
      
      <div className="error-container">
        <h2 className="error-title">Oops! Something went wrong</h2>
        <p className="error-message">{error}</p>
      </div>
      
      <button className="start-button" onClick={onRetry}>
        TRY AGAIN
      </button>
    </div>
  );
};