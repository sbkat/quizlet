import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { WebsocketService } from 'src/app/services/websocket.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit, OnDestroy {
  quizes: Observable<any[]>;
  currentQuiz: string;
  private _quizSub: Subscription;

  constructor(
    private webSocketService: WebsocketService,
    private httpService: HttpService,
    ) { }

  ngOnInit() {
    this.quizes = this.webSocketService.quizes;
    this._quizSub = this.webSocketService.currentQuiz.subscribe(quiz => this.currentQuiz = quiz.id);
    this.allQuizes()
  }

  ngOnDestroy() {
    this._quizSub.unsubscribe();
  }

  loadQuiz(id: string) {
    this.webSocketService.getQuiz(id);
  }

  allQuizes() {
    this.httpService.allQuizzes()
      .subscribe((data: any ) => {
        this.quizes = data.quizzes;
        console.log(this.quizes);
      })
    
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
