import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-available-quizzes',
  templateUrl: './available-quizzes.component.html',
  styleUrls: ['./available-quizzes.component.scss']
})
export class AvailableQuizzesComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

}
