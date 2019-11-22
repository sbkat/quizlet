import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {
  editQuiz: any;
  errorMsg: string = '';

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
    this._activeRoute.params
    .subscribe((params: Params) => {
      this._httpService.findQuiz(params.id)
        .subscribe((data: any) => {
          this.editQuiz = data.quiz;
          console.log(this.editQuiz);
        });
    });
  }

  submitEdit() {
    this._httpService.edit(this.editQuiz._id, this.editQuiz)
      .subscribe((data: any) => {
        if (data.hasOwnProperty('errors')) {
          console.log(data.errors);
          this.errorMsg = data.errors.message;
        }
        else {
          this._router.navigate(['/quiz-list']);
        }
      });
  }

  additionalQuestion() {
    this.editQuiz.questions.push({
      question: '',
      options: [],
    })
  }

}
