import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  currentUser: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    let obs = this._httpService.getCurrentUser();
    obs.subscribe((data: any) => {
      if(data.sessionStatus == false) {
        this._router.navigate(['/']);
      } else {
        this.currentUser = data;
      }
    })
  }
}
