import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models';
import { Store } from '@ngrx/store';
import * as fromRoot from '../store/reducers/user.reducer';
import * as userAction from '../store/actions/user.action';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  users;
  constructor(private store: Store<fromRoot.State>, private userService: UserService) {
    this.users$ = store.select(fromRoot.getUsers);
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
      this.store.dispatch(new userAction.GetAllUsers(this.users));
    });

  }

}
