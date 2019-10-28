import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule, MatButtonModule, MatTableModule,
  MatGridListModule, MatListModule, MatIconModule, MatTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserFormComponent } from './users/user-form/user-form.component';

import { LeaguesComponent} from './leagues/leagues.component';
import { StagesComponent } from './stages/stages.component';
import { RacesComponent } from './races/races.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    UserFormComponent,
    LeaguesComponent,
    StagesComponent,
    RacesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
