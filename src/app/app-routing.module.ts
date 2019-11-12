import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent} from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  {path: 'registration',  component: RegistrationComponent },
  {path: 'login',  component: LoginComponent },
  {path: 'userInfo',  component: UserInfoComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
