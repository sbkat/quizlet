import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser: any;
  allQuiz: any[] = []
  activeQuiz = null;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.getCurrentUser();
    this.allQuizzes();
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

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  editQuiz(quizId: string) {
    this._router.navigate(['/edit/' + quizId]);
  }
  
}
