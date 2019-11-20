import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginUser: Object;
  errorMsg: string[] = [];

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.loginUser = {
      email: '',
      password: '',
    }
  }

  login() {
    let obs = this._httpService.login(this.loginUser);
    obs.subscribe((data: any) => {
      console.log('data:', data);
      if (data.hasOwnProperty('errors')) {
        this.errorMsg = data.errors.message;
      } else {
        this._router.navigate(['/dashboard']);
      }
    })
  }

}
