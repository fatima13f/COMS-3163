interface StartPageProps {
  onStartQuiz: () => void;
}

const StartPage: React.FC<StartPageProps> = ({ onStartQuiz }: any) => {
  return (
    <div id="start-page">
      <h1>Star Wars Trivia</h1>
      <button onClick={onStartQuiz} id="start-btn">
        Start Quiz
      </button>
    </div>
  );
};

export default StartPage;
