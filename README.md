# Initializer - Quiz Game 🎯

## Project Overview
- **Name**: Initializer
- **Goal**: A fun, educational quiz game to test knowledge of acronyms, initialisms, and abbreviations
- **Features**: Beautiful purple gradient UI, multiple-choice questions, score tracking, keyboard support, best score persistence

## URLs
- **Live Demo**: https://3000-if7xr4f8q4qtoa12pwywg-6532622b.e2b.dev
- **GitHub**: (To be configured)

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

### Adding Questions
Edit the `/public/data/initializer.csv` file with this format:
```csv
term,kind,category,question,optionA,optionB,optionC,optionD,correct,explanation
```

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