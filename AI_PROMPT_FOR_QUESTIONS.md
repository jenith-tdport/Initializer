# AI Prompt for Generating Initializer Quiz Questions

## Main Prompt

Generate 50 quiz questions about acronyms and initialisms in CSV format. Each row should contain exactly 10 fields in this order: term,kind,category,question,optionA,optionB,optionC,optionD,correct,explanation

Requirements:
1. Include a mix of acronyms (pronounced as words like NASA, RADAR) and initialisms (pronounced letter-by-letter like FBI, CPU)
2. Create THREE plausible wrong answers for each question that sound realistic but are incorrect
3. Randomly distribute correct answers across A, B, C, and D options (aim for 25% each)
4. Categories to use: computing, technology, science, business, government, education, internet, general, medical, military, sports, food, finance, gaming, music, travel
5. Keep explanations under 100 characters and make them educational/interesting
6. The question should usually be "What does [TERM] stand for?" but can vary slightly
7. Make wrong answers believable - they should use similar technical language as the correct answer
8. DO NOT include the header row
9. Ensure proper CSV formatting with commas separating fields
10. If a field contains a comma, wrap it in quotes

Example of the exact format needed:
BIOS,initialism,computing,What does BIOS stand for?,Basic Input/Output System,Binary Integrated Operating System,Built-In Operating Software,Basic Internal Operating Standard,A,BIOS initializes hardware during the boot process before the operating system loads.

Generate 50 diverse questions covering multiple categories. Ensure answers are distributed roughly equally: about 12-13 for A, 12-13 for B, 12-13 for C, and 12-13 for D.

## Alternative Detailed Prompt (More Control)

I need quiz questions for an educational game about acronyms and initialisms. Generate questions in CSV format with these exact columns:
- term: The acronym/initialism (e.g., NASA)
- kind: Either "acronym" or "initialism" 
- category: One of [computing/technology/science/business/government/education/internet/general/medical/military/sports/food/finance/gaming/music/travel]
- question: Usually "What does X stand for?"
- optionA, optionB, optionC, optionD: Four possible answers
- correct: Which option is right (A, B, C, or D)
- explanation: A brief educational fact (under 100 chars)

Create 50 questions with these specific requirements:

DIFFICULTY MIX:
- 15 easy (common everyday terms like GPS, ATM, USB)
- 25 medium (somewhat technical like HTML, CEO, PhD)  
- 10 hard (specialized like CAPTCHA, NASDAQ, OLED)

CATEGORY DISTRIBUTION:
- 10 technology/computing
- 8 internet/social media
- 7 business/finance
- 6 science/medical
- 5 government/military
- 5 education/academic
- 5 general/everyday
- 4 other (sports/food/travel/music/gaming)

ANSWER DISTRIBUTION:
- Make 12-13 questions have A as correct
- Make 12-13 questions have B as correct
- Make 12-13 questions have C as correct
- Make 12-13 questions have D as correct

WRONG ANSWER GUIDELINES:
- Use similar word patterns as the real answer
- Include technical-sounding terms from the same field
- Avoid joke answers or obviously wrong options
- Make them plausible enough that someone might genuinely consider them

Output only the CSV data, no headers or extra text.

## Quick Prompt for Specific Categories

Generate 20 [CATEGORY] acronym quiz questions in CSV format. Fields: term,kind,category,question,optionA,optionB,optionC,optionD,correct,explanation

Rules:
- Replace [CATEGORY] with: medical/gaming/military/food/sports/music/finance
- Mix acronyms and initialisms
- Correct answers evenly distributed across A,B,C,D
- Plausible wrong answers
- Educational explanations <100 chars
- No header row

## Prompt for Checking/Improving Existing Questions

Review these quiz questions and improve them:
1. Make wrong answers more plausible
2. Balance correct answer distribution (currently too many As)
3. Ensure explanations are interesting facts, not just definitions
4. Fix any where the "correct" answer is actually wrong
5. Standardize question format to "What does X stand for?"

[Paste existing CSV rows here]

Output the improved CSV with the same format.

## Prompt for Pop Culture & Modern Terms

Generate 30 modern acronyms and internet slang quiz questions that young people would know:

Include:
- Social media terms (FOMO, YOLO, TBH, SMH, DM, RT)
- Gaming terms (GG, AFK, NPC, OP, RNG, FPS)
- Texting abbreviations (LOL, BRB, TTYL, IMO, TBT)
- Streaming/content (VOD, IRL, OC, AMA, TL;DR)
- Modern tech (NFT, VPN, 5G, QR, NFC, IoT)

Format: term,kind,category,question,optionA,optionB,optionC,optionD,correct,explanation
Make it fun and relevant to Gen Z/Millennials. Distribute answers evenly across A,B,C,D.

## Tips for Using These Prompts:

1. **Test the output**: Always verify the AI didn't make factual errors
2. **Check formatting**: Ensure no extra commas or line breaks mess up the CSV
3. **Verify answers**: Double-check that the "correct" answer is actually correct
4. **Balance check**: Run `tail -n +2 file.csv | cut -d',' -f9 | sort | uniq -c` to verify answer distribution
5. **Combine multiple runs**: Use different prompts to build a diverse question bank
6. **Edit as needed**: AI output is a starting point - refine the questions to match your style

## Sample Command to Add to Your Game:

After generating questions with AI, append them to your existing CSV:
```bash
# Add new questions to the end of existing file
cat new_questions.csv >> public/data/initializer.csv

# Or replace entirely if you want fresh content
cp new_questions.csv public/data/initializer.csv
```