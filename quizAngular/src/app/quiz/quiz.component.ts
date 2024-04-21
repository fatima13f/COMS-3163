import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  currentQuestion: any;
  userAnswer: string | null = null;

  constructor(public quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.shuffleQuestions();
    this.loadQuestion();
  }

  loadQuestion() {
    this.currentQuestion = this.quizService.loadQuestion();
    this.userAnswer = null;
  }

  submitAnswer() {
    if (this.userAnswer) {
      this.quizService.submitAnswer(this.userAnswer);
      this.loadQuestion();
    }
  }
}
