import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
      if (data.errorMessage) {
        this.errorMsg = data.errorMessage;
      } else {
        this.router.navigate(['/dashboard']);
      }
    });
  }

}
