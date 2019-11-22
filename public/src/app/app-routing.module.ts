import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamePlatformComponent } from './game-platform/game-platform.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AvailableQuizzesComponent } from './available-quizzes/available-quizzes.component';
import { EditQuizComponent } from './edit-quiz/edit-quiz.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';


const routes: Routes = [
  { path: 'quiz-list', component: QuizListComponent, children: [
      { path: 'available/:id',  component: AvailableQuizzesComponent },

  ] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'game-platform', component: GamePlatformComponent },
  { path: 'create-quiz', component: CreateQuizComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'edit/:id', component: EditQuizComponent },
  { path: '', pathMatch: 'full', redirectTo: '/homepage' },
  { path: '*', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
