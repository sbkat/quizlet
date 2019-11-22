import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { GamePlatformComponent } from './game-platform/game-platform.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AvailableQuizzesComponent } from './available-quizzes/available-quizzes.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    DashboardComponent,
    CreateQuizComponent,
    GamePlatformComponent,
    HomepageComponent,
    AvailableQuizzesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private _httpService: HttpService){}
}
