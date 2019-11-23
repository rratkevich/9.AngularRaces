import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserListComponent} from './user-list/user-list.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  {path: 'registration',  component: RegistrationComponent },
  {path: 'login',  component: LoginComponent },
  // {path: 'userPage/friends',  component: UserFriendsComponent },
  // {path: 'userPage/:id',  component: UserPageComponent },
  {path: 'usersList',  component: UserListComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
