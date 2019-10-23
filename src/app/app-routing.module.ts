import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {RacesComponent} from './races/races.component';
import {StagesComponent} from './stages/stages.component';
import {LeaguesComponent} from './leagues/leagues.component';
import {StartComponent} from './start/start.component';

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'users', component: UsersComponent},
  {path: 'races', component: RacesComponent},
  {path: 'stages', component: StagesComponent},
  {path: 'leagues', component: LeaguesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
