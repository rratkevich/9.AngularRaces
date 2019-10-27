import {Component, OnInit} from '@angular/core';
import {User} from '../../User';
import {UserService} from '../user.service';
import {Observable, of} from 'rxjs';
import {USERS} from '../../mock-users';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  user = new User();
  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }
  addUser(): void {
    this.userService.addUser(this.user);
  }
}
