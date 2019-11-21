import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})

export class CreateQuizComponent implements OnInit {
  newQuiz: { 
    title: string, 
    questions: [{
      question: string,
      options: [],
    }]
  };
  errorMsg: string[] = [];

  constructor(
    private httpService: HttpService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.newQuiz = {
      title: '',
      questions: [{
        question: '',
        options: [],
      }]
    };
  }

  createQuiz() {
    console.log('in the component');
    const obs = this.httpService.createQuiz(this.newQuiz);
    obs.subscribe((data: any) => {
      console.log('data:', data);
      if (data.hasOwnProperty('errors')) {
        this.errorMsg = data.errors.message;
      } else {
        this.router.navigate(['/game-platform']);
      }
    });
  }

  additionalQuestion() {
    this.newQuiz.questions.push({
      question: '',
      options: [],
    })
  }
}
