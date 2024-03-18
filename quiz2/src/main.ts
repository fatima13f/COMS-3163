const questions = [
  { type: 'true_false', question: 'Qui-Gon Jinn is killed by Jar Jar Binks', answer: 'false' },
  { type: 'multiple_choice', question: 'What episode is A New Hope?', options: ['I', 'IV', 'III'], answer: 'IV' },
  { type: 'true_false', question: 'The name of Boba Fetts ship is Slave 1', answer: 'true' },
  {
    type: 'multiple_choice',
    question: 'Who killed Han Solo?',
    options: ['Kylo Ren', 'Luke Skywalker', 'Jabba the Hutt'],
    answer: 'Kylo Ren',
  },
];

function loadTrueFalse() {}

function loadMultipleChoice() {}

function loadQuestion() {}

function quizComplete() {}

document.getElementById('start-btn')?.addEventListener('click', () => {
  console.log('stareting quiz..');

  let score = 0;
  let currentQuestionIndex = -1;

  document.getElementById('quiz-container')!.style.display = 'block';
  document.getElementById('start-page')!.style.display = 'none';
});
