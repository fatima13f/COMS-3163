interface ScorePageProps {
  score: number;
  userAnswers: any[];
  questions: any[];
  restartQuiz: () => void;
}

const ScorePage: React.FC<ScorePageProps> = ({
  score,
  userAnswers,
  questions,
  restartQuiz,
}: any) => {
  const handleRestartQuiz = () => {
    restartQuiz();
  };

  return (
    <div id="score-page">
      <h2>Quiz Completed! Your Score is {score}/10</h2>
      {userAnswers.map((answer: any, index: any) => (
        <div key={index}>
          <p>Question {index + 1}:</p>
          <p>Correct Answer: {questions[index].answer}</p>
          <p>Your Answer: {answer}</p>
          <hr />
        </div>
      ))}
      <button onClick={handleRestartQuiz} id="restart-btn">
        Restart Quiz
      </button>
    </div>
  );
};

export default ScorePage;
