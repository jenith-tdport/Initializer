const STORAGE_KEY = 'initializer.bestScore';

export function getBestScore(): number {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? parseInt(stored, 10) : 0;
  } catch {
    return 0;
  }
}

export function setBestScore(score: number): void {
  try {
    localStorage.setItem(STORAGE_KEY, score.toString());
  } catch (error) {
    console.error('Failed to save best score:', error);
  }
}