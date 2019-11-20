import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginUser: Object;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.loginUser = {
      email: '',
      password: '',
    }
  }

  login() {

  }
}
