import { Component, OnInit, } from '@angular/core';
import {User} from '../../User';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
   user: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getUser();
  }
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }
  goBack(): void {
    this.location.back();
  }
}
