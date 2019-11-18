import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserFormComponent} from './registration/user-form/user-form.component';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  constructor(
    private http: HttpClient,
  ) { }

  public getUsers() {
    return this.http.get('http://localhost:3000/registration');
  }
  public onSubmit(userForm: any) {
    // const user = new user.;
    // return this.http.post('http://localhost:3000/registration', {
    //   firstName: this.input1.value,
    //   lastName,
    //   email,
    //   password
// } );

  }
}
