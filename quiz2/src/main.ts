async function fetchQuestions() {
  try {
    const response = await fetch('/quiz');
    if (!response.ok) {
      throw new Error('Failed to fetch quiz questions');
    }
    const questions = await response.json();
    return questions;
  } catch (error) {
    console.error('Error fetching quiz questions', error);
    throw error;
  }
}

let userAnswers: any[] = [];

let score = 0;
let currentQuestionIndex = -1;

function shuffleQuestions(questions: any[]) {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

function loadTrueFalse(question: any, optionsElement: HTMLElement) {
  optionsElement!.innerHTML = `
        <label><input type="radio" name="answer${currentQuestionIndex}" value="true">True</label>
        <label><input type="radio" name="answer${currentQuestionIndex}" value="false">False</label>
      `;
}

function loadMultipleChoice(question: any, optionsElement: HTMLElement) {
  question.options!.forEach((option: any, index: number) => {
    optionsElement!.innerHTML += `
      <label><input type="radio" name="answer${currentQuestionIndex}" value="${option}">${option}</label>
    `;
  });
}

async function loadQuestion() {
  try {
    const questions = await fetchQuestions();
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      const questionElement = document.getElementById('question');
      const optionsElement = document.getElementById('options');
      questionElement!.textContent = currentQuestion.question;
      optionsElement!.innerHTML = ' ';
      if (currentQuestion.type === 'true_false') {
        console.log('load true false...');
        loadTrueFalse(currentQuestion, optionsElement!);
      } else if (currentQuestion.type === 'multiple_choice') {
        console.log('load multiple choice...');
        loadMultipleChoice(currentQuestion, optionsElement!);
      }
    } else {
      quizComplete();
    }
  } catch (error) {
    console.error('Error loading question', error);
  }
}

function quizComplete(questions: any[]) {
  console.log('sending to score page...');

  document.getElementById('quiz-container')!.style.display = 'none';
  document.getElementById('score-page')!.style.display = 'block';

  const totalScore = document.getElementById('score-results');
  totalScore!.innerHTML = `
  <h2>Quiz Completed! Your Score is ${score}/${questions.length}</h2>
`;

  const answersElement = document.getElementById('answers');

  questions.forEach((q, index) => {
    const userAnswer = userAnswers[index];
    answersElement!.innerHTML += `
    <div>
      <p>Question ${index + 1}: ${q.question}</p>
      <p>Correct Answer: ${q.answer}</p>
      <p>Your Answer: ${userAnswer ? userAnswer : 'Not answered'}</p>
      <hr />
    </div>
  `;
  });
}

shuffleQuestions();

document.getElementById('start-btn')?.addEventListener('click', () => {
  console.log('starting quiz..');

  score = 0;
  currentQuestionIndex = -1;

  document.getElementById('quiz-container')!.style.display = 'block';
  document.getElementById('start-page')!.style.display = 'none';

  loadQuestion();
});

document.getElementById('restart-btn')?.addEventListener('click', () => {
  console.log('starting new quiz..');

  score = 0;
  currentQuestionIndex = -1;

  document.getElementById('quiz-container')!.style.display = 'block';
  document.getElementById('score-page')!.style.display = 'none';

  loadQuestion();
});

document.getElementById('submit-btn')?.addEventListener('click', () => {
  console.log(currentQuestionIndex);
  const answer = document.querySelector(`input[name="answer${currentQuestionIndex}"]:checked`)?.value;
  if (!answer) {
    alert('Please select an answer.');
    return;
  }

  userAnswers[currentQuestionIndex] = answer;

  if (answer === questions[currentQuestionIndex].answer) {
    score++;
  }

  console.log(`Score: ${score}/${currentQuestionIndex + 1}`);

  loadQuestion();
});
