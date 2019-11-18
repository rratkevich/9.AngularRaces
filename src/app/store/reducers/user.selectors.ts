import { ActionReducerMap, createSelector, createFeatureSelector,
  ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromUsers from './user.reducer';

export interface State {
  films: fromUsers.State;
}
export const reducers: ActionReducerMap<State> = {
  films: fromUsers.reducer
};
export const metaReducers: MetaReducer<State>[] = [logger];
export const getUserState = createFeatureSelector<fromUsers.State>('users');
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const getUsers = createSelector(
  getUserState,
  fromUsers.getUsers,
);
