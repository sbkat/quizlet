import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Quiz } from '../models/quiz';
import { HttpService } from './http.service';





@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  currentQuiz = this.socket.fromEvent<Quiz>('quiz');
  quizes = this.socket.fromEvent<object[]>('quizes');

  constructor(
    private socket: Socket,
    private httpService: HttpService,

  ) { }

  getQuiz(id:String) {
    this.socket.emit('getQuiz', id);
  }

  newQuiz(quiz: Quiz) {
    this.socket.emit('addQuiz', { id: this.quizId(quiz)});
  }

  private quizId(quiz) {
    let text = this.httpService.findQuiz(quiz._id)
  }

}
