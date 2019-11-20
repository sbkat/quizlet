import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})

export class SignUpComponent implements OnInit {
  newUser: Object;
  errorMsg: string[] = [];

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.newUser = {
      username: '',
      email: '',
      password: '',
    }
  }

  register() {
    let obs = this._httpService.register(this.newUser);
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
