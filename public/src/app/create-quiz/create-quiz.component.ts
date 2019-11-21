import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.sass']
})
export class CreateQuizComponent implements OnInit {
  newQuiz: object;
  errorMsg: string[] = [];

  constructor( private httpService: HttpService, private router: Router ) { }

  ngOnInit() {
    this.newQuiz = {
      title: '',
      // time: '',
      question: [],
      answer: [],
      correct: '',
    };
  }

  createQuiz() {
    const obs = this.httpService.createQuiz(this.newQuiz);
    obs.subscribe((data: any) => {
      console.log('Dataaa: ', data);
      if (data.hasOwnProperties('errors')) {
        this.errorMsg = data.errors.message;
      } else { this.router.navigate(['/dashboard']); }
    });
  }
}
