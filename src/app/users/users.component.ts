import { Component, OnInit } from '@angular/core';
import { User} from '../User';
import {UserService} from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.users = this.userService.getUsers();
  }
}
