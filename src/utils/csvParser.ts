import { Question } from '../types';

export function parseCSV(csvText: string): Question[] {
  const lines = csvText.trim().split('\n');
  if (lines.length < 2) return [];

  // Remove header line
  const dataLines = lines.slice(1);

  const questions: Question[] = [];
  
  for (const line of dataLines) {
    // Handle CSV parsing with potential commas in quoted fields
    const fields = parseCSVLine(line);
    
    if (fields.length < 10) continue;

    const question: Question = {
      term: fields[0] || undefined,
      kind: fields[1] as Question['kind'] || undefined,
      category: fields[2] || undefined,
      question: fields[3],
      optionA: fields[4],
      optionB: fields[5],
      optionC: fields[6],
      optionD: fields[7],
      correct: fields[8] as Question['correct'],
      explanation: fields[9],
    };
    
    questions.push(question);
  }
  
  return questions;
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        // Escaped quote
        current += '"';
        i++;
      } else {
        // Toggle quote state
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      // Field separator
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  // Don't forget the last field
  result.push(current.trim());

  return result;
}

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}