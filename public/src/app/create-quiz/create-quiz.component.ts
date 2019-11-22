import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service';
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
  @Input() allQuiz: any;

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
        this.router.navigate(['/quiz-list']);
        this.allQuiz.push(this.newQuiz);
        this.newQuiz = {
          title: '',
          questions: [{
            question: '',
            options: [],
          }]
        };
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
