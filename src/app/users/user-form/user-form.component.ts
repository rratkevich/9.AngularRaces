import {Component, OnInit} from '@angular/core';
import {User} from '../../User';
import {UserService} from '../user.service';
import {Observable, of} from 'rxjs';
import {USERS} from '../../mock-users';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  user: User;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private location: Location,
  ) {}


  userForm = this.formBuilder.group({
    id: [this.user ? this.user.id : null],
    name: [''],
    surname: [''],
    username: ['']
  });

  onSubmit() {
    this.userService.onSubmit(this.userForm);
  }

  ngOnInit() {
  }

}
