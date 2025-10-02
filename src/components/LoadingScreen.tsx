import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="title-pill">INITIALIZER</div>
      <div className="loading-spinner"></div>
      <p style={{ fontSize: '18px' }}>Loading questions...</p>
    </div>
  );
};