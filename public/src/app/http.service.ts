import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  register(newUser) {
    console.log('in the service', newUser);
    return this._http.post('/api/user', newUser);
  }

  all() {
    return this._http.get('/api/users');
  }
}
