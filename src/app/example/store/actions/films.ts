import {Action, createAction, props} from '@ngrx/store';
import { Film } from '../../models';
import { User } from '../../models/User';

export const SELECT = '[Films] Select';
export const ADD_ONE = '[Films] Add One';
export const GET_ALL_USERS = '[USERS] Get All';

// export const getAllUsers = createAction(
//   '[USERS] Get All',
//   props<{user: User}>()
// );

export class Select implements Action {
  readonly type = SELECT;
  constructor(public payload: number) { }
}

export class AddOne implements Action {
  readonly type = ADD_ONE;
  constructor(public payload: Film) { }
}


export class GetAllUsers implements Action  {
  readonly type  = GET_ALL_USERS;
  constructor(public payload: User) {}
}

export type Action = AddOne | Select | GetAllUsers ;
