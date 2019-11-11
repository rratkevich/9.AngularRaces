import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../User';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() title: string;
  user: User;
  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
  ) {}


  userForm = this.formBuilder.group({
    id: [this.user ? this.user.id : null],
    firstName: [''],
    lastName: [''],
    password: [''],
    email: ['']
  });

  onSubmit() {
    // this.userService.onSubmit(this.userForm);
  }

  ngOnInit() {
    // if (this.title === 'update user') {
    //   this.userService.getUser(this.user.id);
    }

}
