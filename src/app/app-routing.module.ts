import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {UserDetailsComponent} from './users/user-details/user-details.component';
// import {RacesComponent} from './races/races.component';
// import {StagesComponent} from './stages/stages.component';
// import {LeaguesComponent} from './leagues/leagues.component';

const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full' },
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
