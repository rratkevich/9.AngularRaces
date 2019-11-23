import { UserService } from '../../user.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as actions from '../actions/user.action';
import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {GetAllUsersAction} from '../actions/user.action';

@Injectable()
export class UserEffects {
  // tslint:disable-next-line:variable-name
  constructor(private readonly _actions$: Actions,
              private readonly userService: UserService,
  ) {
  }
  @Effect()
  GetAllUsers = this._actions$.pipe(
    ofType<actions.GetAllUsersAction>(actions.ActionTypes.GET_ALL_USERS),
    switchMap(() => this.userService.getAllUsers()),
    switchMap((data) => of(new actions.GetAllUsersSuccessAction(data))),
    catchError((error) => of(new actions.GetAllUsersFailureAction(error)))
  );
}

