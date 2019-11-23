import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models';
import { Store } from '@ngrx/store';
import {selectAllUsers} from '../store/selectors/user.selectors';
import { GetAllUsersAction } from '../store/actions/user.action';
import { State } from '../models';
import {select} from '@ngrx/core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  users;
  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
      this.users$ = this.store.select(selectAllUsers);
      this.users$.subscribe((data) => {
      this.users = data;
      this.store.dispatch(new GetAllUsersAction());
      console.log(this.users);
    });
    }
}
