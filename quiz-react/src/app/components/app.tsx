import { useState } from "react";
import StartPage from "./startPage";
import questions from "../questions.json";

function App() {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);

  const loadQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const submitAnswer = (answer: string) => {
    if (currentQuestionIndex < questions.length) {
      setUserAnswers([...userAnswers, answer]);
      if (answer === questions[currentQuestionIndex].answer) {
        setScore(score + 1);
      }
      loadQuestion();
    } else {
    }
  };

  const restartQuiz = () => {
    setUserAnswers([]);
    setScore(0);
    setCurrentQuestionIndex(-1);
  };

  return (
    <div>
      {currentQuestionIndex === -1 && <StartPage onStartQuiz={loadQuestion} />}
    </div>
  );
}

export default App;
