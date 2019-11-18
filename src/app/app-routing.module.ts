import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent} from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserPageComponent} from './user-page/user-page.component';
import {ExampleComponent} from './example/example.component';
import {UserListComponent} from './user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  {path: 'registration',  component: RegistrationComponent },
  {path: 'login',  component: LoginComponent },
  {path: 'userPage',  component: UserPageComponent },
  {path: 'usersList',  component: UserListComponent },
  {path: 'example',  component: ExampleComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
