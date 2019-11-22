import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-socket-room',
  templateUrl: './socket-room.component.html',
  styleUrls: ['./socket-room.component.scss']
})
export class SocketRoomComponent implements OnInit {
  currentUser: any;
  allQuiz: any[] = [];
  allQuestions: any[] = [];
  answers: any[] =[]


  @Input() public quizToShow;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    
  ) { }

  ngOnInit() {
    this.getCurrentUser();
    this.allQuizzes();
    this.getAllQuestions();
  }

  getCurrentUser() {
    let obs = this._httpService.getCurrentUser();
    obs.subscribe((data: any) => {
      if(data.sessionStatus == false) {
        this._router.navigate(['/']);
      } else {
        this.currentUser = data;
      }
    })
  }

  allQuizzes() {
    let observable = this._httpService.allQuizzes();
    observable.subscribe((data: any) => {
      this.allQuiz = data.quizzes; 
    });
  }
  
  getAllQuestions() {
    let observable = this._httpService.findQuiz(this.quizToShow._id)
    observable.subscribe((data: any) => {
      //  console.log(data)
      //  console.log(data.questions)
     
      
      this.allQuestions = this.quizToShow.questions
      this.answers = this.quizToShow.questions[0].options
      console.log(this.allQuestions)
      console.log(this.answers)
    })
  }
}
