import { useState } from "react";

interface QuizProps {
  question: any;
  onSubmitAnswer: (answer: string) => void;
}

const Quiz: React.FC<QuizProps> = ({ question, onSubmitAnswer }: any) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerSubmit = (e: any) => {
    if (selectedAnswer !== null) {
      onSubmitAnswer(selectedAnswer);
      setSelectedAnswer(null);
    } else {
      alert("Please select an answer.");
    }
  };

  const handleAnswerSelect = (e: any) => {
    setSelectedAnswer(e.target.value);
  };

  return (
    <div id="quiz-container">
      <h1 id="question">{question.question}</h1>
      {question.type === "multiple_choice" && (
        <>
          {question.options.map((option: string, index: number) => (
            <label key={index}>
              <input
                type="radio"
                name="answer"
                id="options"
                value={option}
                onChange={handleAnswerSelect}
                checked={selectedAnswer === option}
              />
              {option}
            </label>
          ))}
        </>
      )}
      {question.type === "true_false" && (
        <>
          <label>
            <input
              type="radio"
              name="answer"
              value="true"
              id="options"
              onChange={handleAnswerSelect}
              checked={selectedAnswer === "true"}
            />
            True
          </label>
          <label>
            <input
              type="radio"
              name="answer"
              value="false"
              id="options"
              onChange={handleAnswerSelect}
              checked={selectedAnswer === "false"}
            />
            False
          </label>
        </>
      )}
      <button onClick={handleAnswerSubmit}>Submit</button>
    </div>
  );
};

export default Quiz;
