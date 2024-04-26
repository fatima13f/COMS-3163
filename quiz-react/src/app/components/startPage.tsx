function StartPage({ onStartQuiz }: any) {
  return (
    <div>
      <h1>Star Wars Trivia</h1>
      <button onClick={onStartQuiz}>Start Quiz</button>
    </div>
  );
}

export default StartPage;
