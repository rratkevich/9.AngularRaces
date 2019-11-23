import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../models';
import { State } from '../../models';
import {GetAllUsersAction} from '../actions/user.action';

export const getUsersListState = createFeatureSelector<State>('UsersList');

export const selectAllUsers = createSelector(
  getUsersListState,
  state => state ? state.users : {} as User[]
);
