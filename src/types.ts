export interface Question {
  term?: string;
  kind?: 'acronym' | 'initialism' | 'backronym';
  category?: string;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correct: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface GameState {
  currentQuestionIndex: number;
  questions: Question[];
  score: number;
  selectedAnswer: string | null;
  showResult: boolean;
  gamePhase: 'start' | 'playing' | 'results';
  answers: string[];
}

export interface InitializerProps {
  sheetUrl?: string;
  totalQuestions?: number;
  categoryFilter?: string | null;
  onFinish?: (summary: {
    total: number;
    correct: number;
    score: number;
    bestScore: number;
  }) => void;
}

export interface GameSummary {
  total: number;
  correct: number;
  score: number;
  bestScore: number;
}