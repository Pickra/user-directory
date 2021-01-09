import { Action } from 'redux';

export const ADD_USERS_ERROR = 'ADD_USER_ERROR';
export type AddUsersErrorOptions = { fetch: string; };
export type AddUsersErrorActionType = Action & AddUsersErrorOptions;

export const addUsersError = (options: AddUsersErrorOptions): any => ({
    ...options,
    type: ADD_USERS_ERROR
});

export const REMOVE_USERS_ERROR = 'REMOVE_USER_ERROR';
