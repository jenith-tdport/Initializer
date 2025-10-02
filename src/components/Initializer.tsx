import React, { useState, useEffect, useCallback } from 'react';
import { Question, GameState, InitializerProps, GameSummary } from '../types';
import { parseCSV, shuffleArray } from '../utils/csvParser';
import { getBestScore, setBestScore } from '../utils/storage';
import { StartScreen } from './StartScreen';
import { ShuffledQuestionScreen } from './ShuffledQuestionScreen';
import { ResultsScreen } from './ResultsScreen';
import { LoadingScreen } from './LoadingScreen';
import { ErrorScreen } from './ErrorScreen';

export const Initializer: React.FC<InitializerProps> = ({
  sheetUrl = '/data/initializer.csv',
  totalQuestions = 10,
  categoryFilter = null,
  onFinish,
}) => {
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [gameState, setGameState] = useState<GameState>({
    currentQuestionIndex: 0,
    questions: [],
    score: 0,
    selectedAnswer: null,
    showResult: false,
    gamePhase: 'start',
    answers: [],
  });

  // Load questions from CSV
  const loadQuestions = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(sheetUrl);
      if (!response.ok) {
        throw new Error(`Failed to load questions: ${response.statusText}`);
      }
      
      const csvText = await response.text();
      const questions = parseCSV(csvText);
      
      if (questions.length === 0) {
        throw new Error('No questions found in the CSV file');
      }
      
      // Filter by category if specified
      const filtered = categoryFilter
        ? questions.filter(q => q.category === categoryFilter)
        : questions;
      
      if (filtered.length === 0) {
        throw new Error(`No questions found for category: ${categoryFilter}`);
      }
      
      setAllQuestions(filtered);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load questions');
    } finally {
      setLoading(false);
    }
  }, [sheetUrl, categoryFilter]);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  const startGame = () => {
    const shuffled = shuffleArray(allQuestions);
    const gameQuestions = shuffled.slice(0, Math.min(totalQuestions, shuffled.length));
    
    setGameState({
      currentQuestionIndex: 0,
      questions: gameQuestions,
      score: 0,
      selectedAnswer: null,
      showResult: false,
      gamePhase: 'playing',
      answers: [],
    });
  };

  const handleAnswerSubmit = (isCorrect: boolean) => {
    const newScore = isCorrect ? gameState.score + 100 : gameState.score;
    
    setGameState(prev => ({
      ...prev,
      score: newScore,
      showResult: true,
      answers: [...prev.answers, isCorrect ? 'correct' : 'incorrect'],
    }));
  };

  const handleNext = () => {
    const nextIndex = gameState.currentQuestionIndex + 1;
    
    if (nextIndex >= gameState.questions.length) {
      // Game finished
      const correctCount = gameState.answers.filter(
        answer => answer === 'correct'
      ).length;
      
      const bestScore = getBestScore();
      const newBestScore = Math.max(bestScore, gameState.score);
      
      if (newBestScore > bestScore) {
        setBestScore(newBestScore);
      }
      
      const summary: GameSummary = {
        total: gameState.questions.length,
        correct: correctCount,
        score: gameState.score,
        bestScore: newBestScore,
      };
      
      if (onFinish) {
        onFinish(summary);
      }
      
      setGameState(prev => ({
        ...prev,
        gamePhase: 'results',
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        currentQuestionIndex: nextIndex,
        selectedAnswer: null,
        showResult: false,
      }));
    }
  };

  const handlePlayAgain = () => {
    startGame();
  };

  const handleRetry = () => {
    loadQuestions();
  };

  // Note: Keyboard navigation is now handled inside ShuffledQuestionScreen

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen error={error} onRetry={handleRetry} />;
  }

  if (gameState.gamePhase === 'start') {
    return <StartScreen onStart={startGame} bestScore={getBestScore()} />;
  }

  if (gameState.gamePhase === 'results') {
    const correctCount = gameState.answers.filter(
      answer => answer === 'correct'
    ).length;
    
    const summary: GameSummary = {
      total: gameState.questions.length,
      correct: correctCount,
      score: gameState.score,
      bestScore: getBestScore(),
    };
    
    return <ResultsScreen summary={summary} onPlayAgain={handlePlayAgain} />;
  }

  const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
  
  return (
    <ShuffledQuestionScreen
      question={currentQuestion}
      questionNumber={gameState.currentQuestionIndex + 1}
      totalQuestions={gameState.questions.length}
      score={gameState.score}
      onAnswerSubmit={handleAnswerSubmit}
      onNext={handleNext}
    />
  );
};