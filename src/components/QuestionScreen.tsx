import React from 'react';
import { Question } from '../types';

interface QuestionScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  score: number;
  selectedAnswer: string | null;
  showResult: boolean;
  onAnswerSelect: (answer: string) => void;
  onSubmit: () => void;
  onNext: () => void;
}

export const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  questionNumber,
  totalQuestions,
  score,
  selectedAnswer,
  showResult,
  onAnswerSelect,
  onSubmit,
  onNext,
}) => {
  const options = [
    { label: 'A', text: question.optionA },
    { label: 'B', text: question.optionB },
    { label: 'C', text: question.optionC },
    { label: 'D', text: question.optionD },
  ];

  const handleAnswerClick = (label: string) => {
    if (!showResult) {
      if (selectedAnswer === label) {
        // Double-tap to submit
        onSubmit();
      } else {
        onAnswerSelect(label);
      }
    }
  };

  return (
    <div className="game-container">
      <div className="title-pill">INITIALIZER</div>
      
      <div className="status-pill">
        <span className="question-count">QUESTION {questionNumber} OF {totalQuestions}</span>
        <span className="score">SCORE: {score}</span>
      </div>

      <h2 className="question-text">{question.question}</h2>

      <div className="answers-container">
        {options.map((option) => {
          let buttonClass = 'answer-button';
          
          if (showResult) {
            if (option.label === question.correct) {
              buttonClass += ' correct';
            } else if (option.label === selectedAnswer) {
              buttonClass += ' incorrect';
            }
          } else if (option.label === selectedAnswer) {
            buttonClass += ' selected';
          }

          return (
            <button
              key={option.label}
              className={buttonClass}
              onClick={() => handleAnswerClick(option.label)}
              disabled={showResult}
              aria-label={`Option ${option.label}: ${option.text}`}
            >
              <span className="answer-label">{option.label}</span>
              <span>{option.text}</span>
            </button>
          );
        })}
      </div>

      {!showResult && selectedAnswer && (
        <button className="submit-button" onClick={onSubmit}>
          SUBMIT
        </button>
      )}

      {showResult && (
        <>
          <div className="explanation-container">
            <p className="explanation-text">{question.explanation}</p>
          </div>
          <button className="next-button" onClick={onNext}>
            {questionNumber === totalQuestions ? 'SEE RESULTS' : 'NEXT'}
          </button>
        </>
      )}
    </div>
  );
};