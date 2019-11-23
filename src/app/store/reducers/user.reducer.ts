import { User } from '../../models';
import { State } from '../../models';
import { Actions as actions, ActionTypes as actionTypes } from '../actions/user.action';

// import {GET_USER} from '../../store/actions/user.action';
// const initialUsersPage: User = {
//   id: '',
//   firstName: '',
//   lastName: '',
//   password: '',
//   email: '',
// };

export const initialState: State = {
  users: [],
  // user: { } as User,
};

export function reducer(state = initialState, action: actions): State {
  switch (action.type) {
    case actionTypes.GET_ALL_USERS:
      return {
        ...state,
        users: []
      };
    case actionTypes.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case actionTypes.GET_ALL_USERS_FAILURE:
      return {
        ...state,
        users: []
      };
    default:
       return state;
  }
}

