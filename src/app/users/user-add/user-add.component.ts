import {Component, OnInit} from '@angular/core';
// import {User} from '../../User';
import {UserService} from '../user.service';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  title = `add works!`;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

}
