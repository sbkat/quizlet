import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-platform',
  templateUrl: './game-platform.component.html',
  styleUrls: ['./game-platform.component.sass']
})
export class GamePlatformComponent implements OnInit {
  newJoiner: object;
  errorMsg: string[] = [];

  constructor(private httpService: HttpService, private router: Router) {
  }

  ngOnInit() {
    this.newJoiner = {
      pin: Number,
      username: String,
    };
  }

  submitPlayer() {
    const obs = this.httpService.createQuiz(this.newJoiner);
    obs.subscribe((data: any) => {
      console.log('Dataaa: ', data);
      if (data.hasOwnProperties('errors')) {
        this.errorMsg = data.errors.message;
      } else { this.router.navigate(['/dashboard']); }
    });
  }

}
