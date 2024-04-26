function Quiz({ questions, onSubmitAnswer }: any) {
  const handleAnswerSubmit = (e: any) => {
    onSubmitAnswer(e.target.checked);
  };

  return (
    <div>
      <h1>{questions.question}</h1>
      {questions.options.map((option: any, index: any) => (
        <label key={index}>
          <input
            type="radio"
            name="answer"
            value={option}
            onChange={handleAnswerSubmit}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default Quiz;
