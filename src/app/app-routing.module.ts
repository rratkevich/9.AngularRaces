import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserDeleteComponent } from './users/user-delete/user-delete.component';
import { UserUpdateComponent } from './users/user-update/user-update.component';


const routes: Routes = [
  {path: 'users/add',  component: UserAddComponent },
  {path: 'users/delete', component: UserDeleteComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'users/update/:id', component: UserUpdateComponent},
  {path: 'users', component: UsersComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
