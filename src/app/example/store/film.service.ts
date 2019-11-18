import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  user: User;

  constructor(
    private http: HttpClient,
  ) {
  }

  public getUsers() {
    return this.http.get('http://localhost:3000/registration');
  }
}
