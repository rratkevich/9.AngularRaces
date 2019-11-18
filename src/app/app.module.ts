import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule, MatButtonModule, MatTableModule,
  MatGridListModule, MatListModule, MatIconModule, MatTabsModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UserFormComponent } from './registration/user-form/user-form.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';

import { UserListComponent } from './user-list/user-list.component';
import {metaReducers, reducers} from './store/reducers/user.selectors';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    RegistrationComponent,
    LoginComponent,
    UserPageComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
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
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
