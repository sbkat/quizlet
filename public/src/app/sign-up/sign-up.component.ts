import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  newUser: object;
  errorMsg: string[] = [];

  constructor(
    private httpService: HttpService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.newUser = {
      username: '',
      email: '',
      password: '',
    };
  }

  register() {
    const obs = this.httpService.register(this.newUser);
    obs.subscribe((data: any) => {
      console.log('data:', data);
      if (data.hasOwnProperty('errors')) {
        this.errorMsg = data.errors.message;
      } else {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
