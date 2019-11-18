import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User} from '../User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  title: 'Registration';
  users;
  constructor( private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
      });
  }
  onSubmit(userForm: any) {
    // const user: User = userForm.value;
    // console.log(user);
    }
}
