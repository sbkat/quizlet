import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamePlatformComponent } from './game-platform/game-platform.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'game-platform', component: GamePlatformComponent },
  { path: 'create-quiz', component: CreateQuizComponent },
  { path: '', pathMatch: 'full', redirectTo: '/all' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
