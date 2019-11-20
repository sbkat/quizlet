import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginUser: object;
  errorMsg: string[] = [];

  constructor(
    private httpService: HttpService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.loginUser = {
      email: '',
      password: '',
    };
  }

  login() {
    const obs = this.httpService.login(this.loginUser);
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
