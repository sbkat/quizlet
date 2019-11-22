import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

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

  createQuiz(newQuiz) {
    return this._http.post('/api/create-quiz', newQuiz);
  }

  allQuizzes() {
    return this._http.get('/api/quizzes');
  }

  findQuiz(id) {
    return this._http.get('/api/quizzes/' + id)
  }

  getQuestionsForQuiz(id: string) {

    return this._http.get('/api/quizes/' + id)
  }
  edit(id, editQuiz) {
    return this._http.put('/api/quizzes/' + id, editQuiz);
  }
}
