import React, { useState, useMemo, useEffect } from 'react';
import { Question } from '../types';

interface ShuffledQuestionScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  score: number;
  onAnswerSubmit: (isCorrect: boolean) => void;
  onNext: () => void;
}

interface ShuffledOption {
  text: string;
  isCorrect: boolean;
  displayLabel: string;
}

export const ShuffledQuestionScreen: React.FC<ShuffledQuestionScreenProps> = ({
  question,
  questionNumber,
  totalQuestions,
  score,
  onAnswerSubmit,
  onNext,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Shuffle options once when the question is first rendered
  const shuffledOptions = useMemo(() => {
    const options: ShuffledOption[] = [
      { text: question.optionA, isCorrect: question.correct === 'A', displayLabel: '' },
      { text: question.optionB, isCorrect: question.correct === 'B', displayLabel: '' },
      { text: question.optionC, isCorrect: question.correct === 'C', displayLabel: '' },
      { text: question.optionD, isCorrect: question.correct === 'D', displayLabel: '' },
    ];

    // Fisher-Yates shuffle algorithm for better randomization
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }

    // Assign display labels after shuffling
    return options.map((opt, index) => ({
      ...opt,
      displayLabel: ['A', 'B', 'C', 'D'][index],
    }));
  }, [question]);

  const handleAnswerClick = (displayLabel: string) => {
    if (!showResult) {
      if (selectedAnswer === displayLabel && !submitted) {
        // Double-tap to submit
        handleSubmit();
      } else {
        setSelectedAnswer(displayLabel);
      }
    }
  };

  const handleSubmit = () => {
    if (!selectedAnswer || submitted) return;
    
    const selectedOption = shuffledOptions.find(opt => opt.displayLabel === selectedAnswer);
    const isCorrect = selectedOption?.isCorrect || false;
    
    setShowResult(true);
    setSubmitted(true);
    onAnswerSubmit(isCorrect);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setSubmitted(false);
    onNext();
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      
      if (['A', 'B', 'C', 'D'].includes(key) && !showResult) {
        handleAnswerClick(key);
      } else if (e.key === 'Enter') {
        if (!showResult && selectedAnswer && !submitted) {
          handleSubmit();
        } else if (showResult) {
          handleNext();
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedAnswer, showResult, submitted]);

  return (
    <div className="game-container">
      <div className="title-pill">INITIALIZER</div>
      
      <div className="status-pill">
        <span className="question-count">QUESTION {questionNumber} OF {totalQuestions}</span>
        <span className="score">SCORE: {score}</span>
      </div>

      <h2 className="question-text">{question.question}</h2>

      <div className="answers-container">
        {shuffledOptions.map((option) => {
          let buttonClass = 'answer-button';
          
          if (showResult) {
            if (option.isCorrect) {
              buttonClass += ' correct';
            } else if (option.displayLabel === selectedAnswer) {
              buttonClass += ' incorrect';
            }
          } else if (option.displayLabel === selectedAnswer) {
            buttonClass += ' selected';
          }

          return (
            <button
              key={option.displayLabel}
              className={buttonClass}
              onClick={() => handleAnswerClick(option.displayLabel)}
              disabled={showResult}
              aria-label={`Option ${option.displayLabel}: ${option.text}`}
            >
              <span className="answer-label">{option.displayLabel}</span>
              <span>{option.text}</span>
            </button>
          );
        })}
      </div>

      {!showResult && selectedAnswer && (
        <button className="submit-button" onClick={handleSubmit}>
          SUBMIT
        </button>
      )}

      {showResult && (
        <>
          <div className="explanation-container">
            <p className="explanation-text">{question.explanation}</p>
          </div>
          <button className="next-button" onClick={handleNext}>
            {questionNumber === totalQuestions ? 'SEE RESULTS' : 'NEXT'}
          </button>
        </>
      )}
    </div>
  );
};