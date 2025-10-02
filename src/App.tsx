import { Initializer } from './components/Initializer';
import './App.css';

function App() {
  const handleFinish = (summary: {
    total: number;
    correct: number;
    score: number;
    bestScore: number;
  }) => {
    console.log('Game finished:', summary);
  };

  return (
    <div className="app-container">
      <Initializer
        sheetUrl="/data/initializer.csv"
        totalQuestions={10}
        onFinish={handleFinish}
      />
    </div>
  );
}

export default App;