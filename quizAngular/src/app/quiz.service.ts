import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  public questions = [
    {
      type: 'true_false',
      question: 'Qui-Gon Jinn is killed by Jar Jar Binks',
      answer: 'false',
    },
    {
      type: 'true_false',
      question: 'The name of Boba Fett`s ship is Slave 1',
      answer: 'true',
    },
    {
      type: 'true_false',
      question: 'Darth Vadar issued Order 66 in Revenge of the Sith',
      answer: 'false',
    },
    {
      type: 'true_false',
      question:
        'Hayden Christensen plays Anakin Skywalker in the Star Wars prequels',
      answer: 'true',
    },
    {
      type: 'true_false',
      question: 'The Empire Strikes Back was released in 1980',
      answer: 'true',
    },
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
      question:
        'On which plant did Yoda train Luke in The Empire Strikes Back?',
      options: ['Dagobah', 'Daivak', 'Coruscant'],
      answer: 'Dagobah',
    },
    {
      type: 'multiple_choice',
      question: 'What episode is A New Hope?',
      options: ['I', 'IV', 'III'],
      answer: 'IV',
    },
  ];

  private userAnswers: any[] = [];

  private score = 0;
  private currentQuestionIndex = -1;

  constructor() {}

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [
        this.questions[j],
        this.questions[i],
      ];
    }
  }

  loadQuestion(): any {
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex < this.questions.length) {
      return this.questions[this.currentQuestionIndex];
    }
    return null;
  }

  submitAnswer(answer: string) {
    this.userAnswers[this.currentQuestionIndex] = answer;
    if (answer === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }
  }

  getScore(): number {
    return this.score;
  }

  getUserAnswers() {
    return this.userAnswers;
  }

  restartQuiz() {
    this.score = 0;
    this.currentQuestionIndex = -1;
    this.userAnswers = [];
  }
}
