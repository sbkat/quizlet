import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-available-quizzes',
  templateUrl: './available-quizzes.component.html',
  styleUrls: ['./available-quizzes.component.scss']
})
export class AvailableQuizzesComponent implements OnInit {
  showQuiz: any;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    ) { }
  ngOnInit() {
    this._activeRoute.params
    .subscribe((params: Params) => {
      console.log(params);
      this._httpService.findQuiz(params.id)
        .subscribe((data: any) => {
          this.showQuiz = data.quiz;
          console.log(this.showQuiz);
        });
    });
  }
}