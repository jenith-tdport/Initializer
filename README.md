# Initializer - Quiz Game 🎯

![React](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.0-purple)
![License](https://img.shields.io/badge/License-MIT-green)

An interactive quiz game that tests your knowledge of acronyms, initialisms, and abbreviations. Built with React, TypeScript, and Vite, featuring a beautiful purple gradient UI and intelligent answer randomization.

## Project Overview
- **Name**: Initializer
- **Goal**: A fun, educational quiz game to test knowledge of acronyms, initialisms, and abbreviations
- **Features**: Beautiful purple gradient UI, multiple-choice questions, score tracking, keyboard support, best score persistence

## 🎮 Demo & Links
- **Live Demo**: [Play the Game](https://your-site.pages.dev) *(Deploy to Cloudflare Pages)*
- **GitHub**: [View Source](https://github.com/jenith-tdport/initializer)

## Completed Features ✅
- **Start Screen**: Welcome screen with START button and best score display
- **Quiz Gameplay**: 10 random questions per session from CSV data source
- **Answer Randomization**: Options shuffle on each question to prevent pattern recognition (NEW!)
- **Answer Selection**: Click or use keyboard (A/B/C/D keys) to select answers
- **Double-tap to Submit**: Click same answer twice or press Enter to submit
- **Visual Feedback**: Green for correct answers, red for incorrect
- **Educational Explanations**: Shows explanation after each answer
- **Score Tracking**: +100 points per correct answer, displays running score
- **Best Score Persistence**: Saves best score to localStorage
- **Results Screen**: Shows percentage, total correct, and performance message
- **Keyboard Support**: Full keyboard navigation (A/B/C/D keys, Enter)
- **Responsive Design**: Mobile-first, works on all devices
- **Loading States**: Smooth loading spinner while fetching questions
- **Error Handling**: Graceful error messages with retry option

## Functional Entry Points

### Main Application
- `/` - Main game interface with purple gradient background

### Data Source
- `/data/initializer.csv` - CSV file with quiz questions (20 sample questions included)

### API/Configuration
The game accepts these props:
- `sheetUrl` - URL to CSV file (default: `/data/initializer.csv`)
- `totalQuestions` - Number of questions per session (default: 10)
- `categoryFilter` - Optional category filter (e.g., "computing", "science")
- `onFinish` - Callback when game ends with summary stats

## Data Architecture
- **Data Models**: Question interface with term, category, question text, 4 options, correct answer, and explanation
- **Storage Services**: 
  - localStorage for best score persistence
  - CSV file for question data (can be replaced with Google Sheets published as CSV)
- **Data Flow**: 
  1. Fetch CSV on app load
  2. Parse and shuffle questions
  3. Select 10 random questions
  4. Track user answers and calculate score
  5. Save best score to localStorage

## User Guide

### How to Play
1. **Start**: Click the START button to begin
2. **Answer Questions**: 
   - Click on one of the four answer options (A, B, C, D)
   - Or use keyboard keys A, B, C, D to select
3. **Submit Answer**:
   - Double-click the selected answer
   - Or click the SUBMIT button
   - Or press Enter key
4. **Learn**: Read the explanation after each answer
5. **Continue**: Click NEXT to proceed to the next question
6. **View Results**: After 10 questions, see your score and percentage
7. **Play Again**: Click PLAY AGAIN to start a new game

### Keyboard Shortcuts
- **A, B, C, D**: Select answer option
- **Enter**: Submit selected answer or go to next question
- **Arrow Keys**: Navigate between options (coming soon)

## Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Custom CSS with gradient backgrounds
- **Data**: CSV parsing with custom parser
- **State Management**: React hooks (useState, useEffect)
- **Deployment**: PM2 process manager for production

## Question Database
The game now includes **40 diverse questions** with **properly distributed correct answers** across all options (A, B, C, D):
- **Computing** (14): CPU, RAM, API, HTML, CSS, USB, PDF, HTTP, JSON, SQL, URL, WWW, JPEG, GIF
- **Technology** (8): GPS, WiFi, LED, DVD, AI, VR, AR, IoT
- **Internet Culture** (3): LOL, BRB, FYI
- **Business/Education** (4): CEO, GDP, MBA, PhD
- **Science** (2): DNA, IQ
- **Government** (2): NASA, FBI
- **General** (6): FAQ, VIP, DIY, ASAP, ETA, ATM

**Answer Distribution**: Questions now have balanced correct answers (25% each for A, B, C, D options) making the game more challenging!

## Features Not Yet Implemented
- Category filtering UI (backend support exists)
- Custom question count selector
- Timer for each question
- Difficulty levels
- Multiplayer mode
- Sound effects
- Animation transitions between questions
- Progress bar
- Share results on social media
- Question history/review mode

## Recommended Next Steps
1. **Deploy to Cloudflare Pages** for global edge deployment
2. **Add Google Sheets Integration** for easy question management
3. **Implement Category Selector** UI for filtered gameplay
4. **Add Timer Feature** for time-based challenges
5. **Create Admin Panel** for question management
6. **Add More Questions** to expand the question database
7. **Implement Achievements** system for engagement
8. **Add Analytics** to track popular questions and user performance
9. **Create Mobile Apps** using React Native
10. **Add Internationalization** for multiple languages

## Installation & Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development
```bash
# Clone the repository
git clone <repo-url>
cd webapp

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Adding More Questions to Expand the Game

The game loads questions from `/public/data/initializer.csv`. You can easily add more acronyms, initialisms, and abbreviations to make the game larger and more challenging.

#### CSV File Format
Each row in the CSV represents one question with these columns:
```csv
term,kind,category,question,optionA,optionB,optionC,optionD,correct,explanation
```

#### Column Definitions:
- **term**: The acronym/initialism itself (e.g., "CPU", "NASA", "LOL")
- **kind**: Type of abbreviation - use one of:
  - `initialism` - Pronounced letter by letter (FBI, CPU, ATM)
  - `acronym` - Pronounced as a word (NASA, RADAR, SCUBA)
  - `backronym` - Acronym created after the word existed
- **category**: Topic area for future filtering features:
  - `computing` - Technology and computer terms
  - `technology` - General tech and gadgets
  - `science` - Scientific terms
  - `business` - Corporate and economic terms
  - `government` - Government agencies and political terms
  - `education` - Academic terms
  - `internet` - Online culture and social media
  - `general` - Everyday abbreviations
  - `medical` - Healthcare terms
  - `military` - Defense and military terms
  - Add your own categories as needed!
- **question**: The question text (usually "What does [TERM] stand for?")
- **optionA, optionB, optionC, optionD**: Four answer choices
- **correct**: Which option is correct (must be A, B, C, or D)
- **explanation**: Educational text shown after answering (keep it concise)

#### Example of Adding New Questions:

```csv
RADAR,acronym,military,What does RADAR stand for?,Radio Detection And Ranging,Rapid Detection And Response,Remote Area Detection And Reconnaissance,Radio Distance And Range,A,RADAR was originally an acronym but is now used as a standard word.
SCUBA,acronym,sports,What does SCUBA stand for?,Self-Contained Underwater Breathing Apparatus,Submersible Craft Using Breathing Air,Special Compressed Underwater Breathing Aid,Submarine Crew Underwater Breathing Apparatus,A,SCUBA diving equipment allows underwater breathing without surface air supply.
YOLO,acronym,internet,What does YOLO stand for?,You're Only Living Once,You Obviously Love Oreos,Young Optimistic Life Outlook,You Only Live Once,D,YOLO became popular as a motto to seize the moment and take chances.
```

#### Best Practices for Adding Questions:

1. **Make Wrong Answers Plausible**: Create believable alternatives that sound reasonable
   - ❌ Bad: "CPU = Cute Purple Unicorn" (too obviously wrong)
   - ✅ Good: "CPU = Core Processing Unit" (sounds technical and plausible)

2. **Balance Your Correct Answers**: Distribute correct answers across A, B, C, D
   - Check distribution: `tail -n +2 initializer.csv | cut -d',' -f9 | sort | uniq -c`
   - Aim for roughly 25% in each option

3. **Keep Explanations Educational**: Add interesting facts, not just the definition
   - ❌ Basic: "CPU means Central Processing Unit"
   - ✅ Better: "The CPU executes instructions and is the brain of the computer"

4. **Group Similar Difficulty**: Mix easy and hard questions
   - Easy: Common terms like USB, PDF, FAQ
   - Medium: Technical terms like API, SQL, HTML
   - Hard: Specialized terms like PCMCIA, TWAIN, MIDI

5. **Test Your Questions**: After adding new questions:
   - Ensure no typos or formatting errors
   - Verify the correct answer is actually correct
   - Check that the game still loads properly

#### Quick Method to Add Questions:

1. **Direct CSV Edit** (for a few questions):
   ```bash
   # Open the CSV file in your favorite editor
   nano public/data/initializer.csv
   # Add new rows at the end
   ```

2. **Using a Spreadsheet** (for bulk additions):
   - Open `initializer_questions_complete.xlsx` in Excel/Google Sheets
   - Add new rows in the "Quiz Questions" tab
   - Export as CSV to `public/data/initializer.csv`

3. **Via Google Sheets** (for collaborative editing):
   - Upload the CSV to Google Sheets
   - Share with collaborators to add questions
   - Publish as CSV and update the game's `sheetUrl`

#### Categories for Expansion Ideas:

- **Medical**: MRI, EKG, ICU, ER, IV, ADHD, OCD
- **Military**: AWOL, MIA, POW, SEAL, NATO, DEFCON
- **Sports**: ESPN, UFC, FIFA, NBA, NFL, MVP
- **Music**: DJ, MP3, EDM, R&B, CD, LP
- **Food**: MSG, GMO, EVOO, BLT, PB&J
- **Travel**: TSA, ETA, GPS, SUV, RV, ATV
- **Social Media**: DM, RT, AMA, TBT, FOMO, SMH
- **Gaming**: RPG, FPS, NPC, DLC, MMO, RNG
- **Finance**: ROI, IPO, ETF, APR, IRA, ATM

The game automatically handles any number of questions - just keep adding rows!

### Deployment
- **Platform**: Ready for Cloudflare Pages deployment
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x

## License
MIT License - Feel free to use and modify

## Credits
Created with ❤️ using React, TypeScript, and Vite

---

**Last Updated**: 2025-10-02