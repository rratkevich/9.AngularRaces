import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {UserDetailsComponent} from './users/user-details/user-details.component';
import {UserAddComponent} from './users/user-add/user-add.component';


const routes: Routes = [
  {path: 'users/add',  component: UserAddComponent, pathMatch: 'full' },
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'users', component: UsersComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
