"use strict";
var _a, _b;
const questions = [
    { type: 'true_false', question: 'Qui-Gon Jinn is killed by Jar Jar Binks', answer: 'false' },
    { type: 'true_false', question: 'The name of Boba Fett`s ship is Slave 1', answer: 'true' },
    { type: 'true_false', question: 'Darth Vadar issued Order 66 in Revenge of the Sith', answer: 'false' },
    {
        type: 'true_false',
        question: 'Hayden Christensen plays Anakin Skywalker in the Star Wars prequels',
        answer: 'true',
    },
    { type: 'true_false', question: 'The Empire Strikes Back was released in 1980', answer: 'true' },
    {
        type: 'multiple_choice',
        question: 'What is Chewbacca`s home planet?',
        options: ['Kashyyyk', 'Tatooine', 'Alderaan'],
        answer: 'Kashyyyk',
    },
    {
        type: 'multiple_choice',
        question: 'Who killed Han Solo?',
        options: ['Kylo Ren', 'Luke Skywalker', 'Jabba the Hutt'],
        answer: 'Kylo Ren',
    },
    {
        type: 'multiple_choice',
        question: 'What does Yoda say is the path to the dark side?',
        options: ['Anger', 'Love', 'Fear'],
        answer: 'Fear',
    },
    {
        type: 'multiple_choice',
        question: 'On which plante did Yoda train Luke in The Empire Strikes Back?',
        options: ['Dagobah', 'Daivak', 'Coruscant'],
        answer: 'Dagobah',
    },
    { type: 'multiple_choice', question: 'What episode is A New Hope?', options: ['I', 'IV', 'III'], answer: 'IV' },
];
let userAnswers = [];
let score = 0;
let currentQuestionIndex = -1;
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}
function loadTrueFalse(question, optionsElement) {
    optionsElement.innerHTML = `
        <label><input type="radio" name="answer${currentQuestionIndex}" value="true">True</label>
        <label><input type="radio" name="answer${currentQuestionIndex}" value="false">False</label>
      `;
}
function loadMultipleChoice(question, optionsElement) {
    question.options.forEach((option, index) => {
        optionsElement.innerHTML += `
      <label><input type="radio" name="answer${currentQuestionIndex}" value="${option}">${option}</label>
    `;
    });
}
function loadQuestion() {
    console.log('load question...');
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.getElementById('question');
        const optionsElement = document.getElementById('options');
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = ' ';
        if (currentQuestion.type === 'true_false') {
            console.log('load true false...');
            loadTrueFalse(currentQuestion, optionsElement);
        }
        else if (currentQuestion.type === 'multiple_choice') {
            console.log('load multiple choice...');
            loadMultipleChoice(currentQuestion, optionsElement);
        }
    }
    else {
        quizComplete();
    }
}
function quizComplete() {
    console.log('sending to score page...');
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('score-page').style.display = 'block';
    const totalScore = document.getElementById('score-results');
    totalScore.innerHTML = `
  <h2>Quiz Completed! Your Score is ${score}/${questions.length}</h2>
`;
    const answersElement = document.getElementById('answers');
    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        answersElement.innerHTML += `
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
(_a = document.getElementById('start-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    console.log('starting quiz..');
    score = 0;
    currentQuestionIndex = -1;
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('start-page').style.display = 'none';
    loadQuestion();
});
(_b = document.getElementById('submit-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    var _a;
    console.log(currentQuestionIndex);
    const answer = (_a = document.querySelector(`input[name="answer${currentQuestionIndex}"]:checked`)) === null || _a === void 0 ? void 0 : _a.value;
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
