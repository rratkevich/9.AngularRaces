import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import {User} from '../User';
import {USERS} from '../mock-users';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private formBuilder: FormBuilder,
    private location: Location
  ) {
  }
  getUsers(): User[] {
    return USERS ;
  }
  getUser(id: number): Observable<User> {
    return of(USERS.find(user => user.id === id));
  }

  onSubmit(userForm: any) {
    const user: User = userForm.value;
    if (!user.id) {
      user.id = this.generateId();
    }
    USERS.push(user);
    this.location.back();
  }

  generateId(): number {
    return USERS.length + 1;
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
