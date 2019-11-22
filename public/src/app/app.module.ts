import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './services/http.service';
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

// socket Module
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { SocketRoomComponent } from './socket-room/socket-room.component';
import { EditQuizComponent } from './edit-quiz/edit-quiz.component';
const config: SocketIoConfig = { url: 'http://localhost:4200', options: {} };
// bootstrap
import bootstrap from "bootstrap";



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    DashboardComponent,
    CreateQuizComponent,
    GamePlatformComponent,
    HomepageComponent,
    AvailableQuizzesComponent,
    QuizListComponent,
    SocketRoomComponent,
    EditQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocketIoModule.forRoot(config)

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private _httpService: HttpService){}
}
