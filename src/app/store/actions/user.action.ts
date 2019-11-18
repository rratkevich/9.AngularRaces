import {Action, createAction, props} from '@ngrx/store';
import { User } from '../../models';
import {AddOne, Select} from '../../example/store/actions/films';

export const GET_ALL_USERS = '[USERS] Get All';

export class GetAllUsers implements Action  {
  readonly type  = GET_ALL_USERS;
  constructor(public payload: User) {}
}

export type Action = GetAllUsers ;

export const ADD_USER = createAction('[User component] Add User');
// export const homeScore = createAction('[Scoreboard Page] Home Score');


export const action = async (email, password) => {
  const user = await this.http.post('http://localhost:3000/login', {
    email,
    password,
  });
  return ({
    type: ADD_USER,
    payload: {user}
  });
};

