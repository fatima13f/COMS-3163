"use client";

import { useState } from "react";
import StartPage from "./components/startPage";
import Quiz from "./components/quiz";
import ScorePage from "./components/scorePage";
import { questions } from "./questions";

export default function App() {
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
    }
  };

  const restartQuiz = () => (
    setUserAnswers([]), setScore(0), setCurrentQuestionIndex(-1)
  );

  return (
    <div>
      {currentQuestionIndex === -1 && <StartPage onStartQuiz={loadQuestion} />}
      {currentQuestionIndex >= 0 && currentQuestionIndex < questions.length && (
        <Quiz
          question={questions[currentQuestionIndex]}
          onSubmitAnswer={submitAnswer}
        />
      )}
      {currentQuestionIndex === questions.length && (
        <ScorePage
          score={score}
          userAnswers={userAnswers}
          questions={questions}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
}
