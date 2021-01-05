import { Action } from 'redux';
import { UserData } from './Users';

export const ADD_USERS = 'ADD_USERS';
export type AddUsersOptions = { users: { results: UserData[]}; page: number; };
export type AddUsersAction = Action & AddUsersOptions;

export const addUsers = (options: AddUsersOptions) : AddUsersAction => ({
    ...options,
    type: ADD_USERS
});
