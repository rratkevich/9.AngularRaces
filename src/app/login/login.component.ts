import { Component, OnInit } from '@angular/core';

import {FormBuilder} from '@angular/forms';
import {Location} from '@angular/common';
import { User} from '../models';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  title: 'Log in';
  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private http: HttpClient,
  ) {
  }

  userForm = this.formBuilder.group({
    id: [this.user ? this.user.id : null],
    firstName: [''],
    lastName: [''],
    password: [''],
    email: ['']
  });

  ngOnInit() {
  }

  onSubmit(userForm: any) {
    const user: User = userForm.value;
    // action(user.email, user.password);
  }
}
