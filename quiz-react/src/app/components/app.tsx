import { useState } from "react";

function App() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);

  const loadQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const submitAnswer = (answer: any) => {
    setUserAnswers([...userAnswers, answer]);
    if (answer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    loadQuestion();
  };

  const restartQuiz = () => {
    setUserAnswers([]);
    setScore(0);
    setCurrentQuestionIndex(-1);
  };

  return (
    <div>
      {currentQuestionIndex === -1 && <startPage onStartQuiz={loadQuestion} />}
    </div>
  );
}

export default App;
