import * as userAction from '../../store/actions/user.action';
import { User } from '../../models';

export interface State {
  users: User[];
}

export const initialState: State = {
  users: [],
  };


export function reducer(state = initialState, action: userAction.Action) {
  switch (action.type) {

    case userAction.GET_ALL_USERS: {
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    }
    default:
      return state;
  }
}

export const getUsers = (state: State) => state.users;

// export function userReducer(state, action) {
//   // return _counterReducer(state, action);
//   switch (action.type) {
//     case 'ADD_USER': {
//       return {
//         ...state,
//         users: [...state.users, action.payload.user]
//       };
//       // const user = action.payload;
//       // const users = [...state.users, user];
//       // return { users };
//     }
//   }
//   return state;
// }
