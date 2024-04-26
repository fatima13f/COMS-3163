function ScorePage({ score, totalQuestions, userAnswers, onRestartQuiz }: any) {
  return (
    <div>
      <h2>
        Quiz Completed! Your Score is {score}/{totalQuestions}
      </h2>
      <ul>
        {userAnswers.map((answer: any, index: any) => (
          <li key={index}>
            <p>Question {index + 1}</p>
            <p>Correct Answer: {questions[index].answer}</p>
            <p>Your Answer: {answer}</p>
          </li>
        ))}
      </ul>
      <button onClick={onRestartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default ScorePage;
