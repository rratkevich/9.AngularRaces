import { Action } from '@ngrx/store';
import { User } from '../../models';

export const ActionTypes = {
  GET_ALL_USERS: '[USER] Get All Users',
  GET_ALL_USERS_SUCCESS: '[USER] Get All Users Success',
  GET_ALL_USERS_FAILURE: '[USER] Get All Users Failure'
};

// export const GET_ALL_USERS = '[USERS] Get All';
// export const GET_USER = '[USER] Get User';
// export const ADD_USER = createAction('[User component] Add User');

export class GetAllUsersAction implements Action  {
  public type = ActionTypes.GET_ALL_USERS;
  constructor(public payload?: any) {}
}

export class GetAllUsersSuccessAction implements Action  {
  public type = ActionTypes.GET_ALL_USERS_SUCCESS;
  constructor(public payload: User) {}
}

export class GetAllUsersFailureAction implements Action  {
  public type = ActionTypes.GET_ALL_USERS_FAILURE;
  constructor(public payload: any) {}
}

// export class GetUser implements action  {
//   readonly type  = GET_USER;
//   constructor(public payload: User) {}
// }

export type Actions = GetAllUsersAction
| GetAllUsersSuccessAction
| GetAllUsersFailureAction
  ;

// export const action = async (email, password) => {
//   const user = await this.http.post('http://localhost:3000/login', {
//     email,
//     password,
//   });
//   console.log(this.user);
//   return ({
//     type: ADD_USER,
//     payload: {user}
//   });
// };

