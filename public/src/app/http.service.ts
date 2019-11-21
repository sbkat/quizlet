import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  register(newUser) {
    return this._http.post('/api/register', newUser);
  }

  login(loginUser) {
    return this._http.post('/api/login', loginUser);
  }

  getCurrentUser() {
    return this._http.get('/api/current-user');
  }

  all() {
    return this._http.get('/api/users');
  }

  createQuiz(id) {
    return this._http.post('/api/createQuiz', id);
  }
}
