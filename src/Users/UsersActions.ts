import { Action } from 'redux';
import { UserData } from './User';

export const ADD_USERS = 'ADD_USERS';
export type AddUsersOptions = { users: { results: UserData[]}; page: number; };
export type AddUsersActionType = Action & AddUsersOptions;

export const addUsersAction = (options: AddUsersOptions) : AddUsersActionType => ({
    ...options,
    type: ADD_USERS
});
