import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserFormComponent } from './registration/user-form/user-form.component';
import { TestComponent} from './test/test.component';
import { RegistrationComponent} from './registration/registration.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  {path: 'registration',  component: RegistrationComponent },
  {path: 'login',  component: LoginComponent },
  {path: 'users/test',  component: TestComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
