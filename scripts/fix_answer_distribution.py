#!/usr/bin/env python3
"""
Fix answer distribution in CSV quiz file by shuffling answer positions
"""
import random
import sys

def fix_answer_distribution(input_file, output_file):
    # Read all lines
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Process each line
    fixed_lines = []
    question_count = 0
    redistributed = 0
    
    for line in lines:
        line = line.strip()
        
        # Keep comments and header as-is
        if not line or line.startswith('#') or line.startswith('term,'):
            fixed_lines.append(line)
            continue
        
        # Process question data
        parts = line.split(',')
        if len(parts) >= 10:
            question_count += 1
            
            # Get the answer options and correct answer
            optionA = parts[4]
            optionB = parts[5]
            optionC = parts[6]
            optionD = parts[7]
            correct = parts[8]
            
            # Only redistribute if answer is A (the over-represented one)
            # and only for new questions (after question 39)
            if correct == 'A' and question_count > 39 and random.random() < 0.75:  # 75% chance to redistribute
                # Create list of options with their labels
                options = [
                    (optionA, 'A'),
                    (optionB, 'B'),
                    (optionC, 'C'),
                    (optionD, 'D')
                ]
                
                # Shuffle the options
                random.shuffle(options)
                
                # Reassign to positions
                new_options = [''] * 4
                new_correct = ''
                
                for i, (text, original_label) in enumerate(options):
                    new_label = ['A', 'B', 'C', 'D'][i]
                    new_options[i] = text
                    if original_label == correct:
                        new_correct = new_label
                
                # Rebuild the line
                parts[4] = new_options[0]
                parts[5] = new_options[1]
                parts[6] = new_options[2]
                parts[7] = new_options[3]
                parts[8] = new_correct
                
                redistributed += 1
            
            fixed_lines.append(','.join(parts))
        else:
            fixed_lines.append(line)
    
    # Write output
    with open(output_file, 'w', encoding='utf-8') as f:
        for line in fixed_lines:
            f.write(line + '\n')
    
    print(f"Processed {question_count} questions")
    print(f"Redistributed {redistributed} questions")
    
    # Analyze new distribution
    answer_counts = {'A': 0, 'B': 0, 'C': 0, 'D': 0}
    for line in fixed_lines:
        if not line.startswith('#') and not line.startswith('term,') and line.strip():
            parts = line.split(',')
            if len(parts) >= 9:
                answer = parts[8].strip()
                if answer in answer_counts:
                    answer_counts[answer] += 1
    
    total = sum(answer_counts.values())
    if total > 0:
        print(f"\nNew distribution:")
        print(f"A: {answer_counts['A']} ({answer_counts['A']/total*100:.1f}%)")
        print(f"B: {answer_counts['B']} ({answer_counts['B']/total*100:.1f}%)")
        print(f"C: {answer_counts['C']} ({answer_counts['C']/total*100:.1f}%)")
        print(f"D: {answer_counts['D']} ({answer_counts['D']/total*100:.1f}%)")

if __name__ == "__main__":
    random.seed(42)  # For reproducibility
    fix_answer_distribution('cleaned_initializer.csv', 'balanced_initializer.csv')