import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../../User';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {USERS} from '../../mock-users';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  title = 'Update user';
  user: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder) { }

  userForm = this.formBuilder.group({
    id: [this.user ? this.user.id : null],
    name: [''],
    surname: [''],
    username: ['']
  });
  newUser = this.userForm.value;
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
    console.log(this.user);
    console.log(this.newUser);
    this.newUser = this.user;
    console.log(this.newUser);
    this.userForm = this.formBuilder.group({
      id: [this.newUser ? this.newUser.id : null],
      name: [this.newUser.name],
      surname: [this.newUser.surname],
      username: [this.newUser.username]
    });
    }

  ngOnInit() {
    this.getUser();
  }
}
