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
    private httpService: HttpService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    const obs = this.httpService.getCurrentUser();
    obs.subscribe((data: any) => {
      if (data.sessionStatus === false) {
        this.router.navigate(['/']);
      } else {
        this.currentUser = data;
      }
    });
  }
}
