import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import {User} from '../User';
import {USERS} from '../mock-users';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {
  }

  getUsers(): User[] {
    return USERS ;
  }
  getUser(id: number): Observable<User> {
    return of(USERS.find(user => user.id === id));
  }

  // addUser(): void {
  //   console.log(USERS);
  //   user.id = this.generateId();
  //   const lengthArray = USERS.push(user);
  //   console.log(user);
  //   console.log(USERS);
  // generateId(): number {
  //   return  ++USERS.length;
  // }
  // updateUser()
}
