import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { QuizComponent } from './quiz/quiz.component';
import { ScorePageComponent } from './score-page/score-page.component';
import { QuizService } from './quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    QuizComponent,
    ScorePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [QuizService],
  bootstrap: [AppComponent],
})
export class AppModule {}
