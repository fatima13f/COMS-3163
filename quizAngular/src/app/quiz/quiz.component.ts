import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  currentQuestion: any;
  userAnswer: string | null = null;

  constructor(public quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.quizService.restartQuiz();
    this.quizService.shuffleQuestions();
    this.loadQuestion();
  }

  loadQuestion() {
    this.currentQuestion = this.quizService.loadQuestion();
    this.userAnswer = null;
    if (!this.currentQuestion) {
      this.router.navigate(['/score']);
    }
  }

  submitAnswer() {
    if (this.userAnswer) {
      this.quizService.submitAnswer(this.userAnswer);
      this.loadQuestion();
    }
  }
}
