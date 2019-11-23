import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models';

@Injectable()

export class UserService {
  constructor(private readonly http: HttpClient) {
  }

  public getAllUsers(): Observable<User> {
    return this.http.get<User>('http://localhost:3000/registration');
  }
}
  // public getUserById(userId: string) {
  //   return this.http.get<User>(`http://localhost:3000/userPage/${userId}`);
  // }
  // getUser(id: number): Observable<User> {
  //   return of(USERS.find(user => user.id === id));
  // }
//   public onSubmit(userForm: any) {
//     // const user = new user.;
//     // return this.http.post('http://localhost:3000/registration', {
//     //   firstName: this.input1.value,
//     //   lastName,
//     //   email,
//     //   password
// // } );
//
//   }

