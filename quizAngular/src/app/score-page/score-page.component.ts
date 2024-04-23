import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.css'],
})
export class ScorePageComponent {
  constructor(public quizService: QuizService) {}
}
