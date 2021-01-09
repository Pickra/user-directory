import { Action } from 'redux';

export const ADD_USERS_ERROR = 'ADD_USER_ERROR';
export type AddUsersErrorActionType = Action & { fetch: string; };

export const addUsersError = (options: string): any => ({
    fetch: options,
    type: ADD_USERS_ERROR
});

export const REMOVE_USERS_ERROR = 'REMOVE_USER_ERROR';
export type RemoveUsersDownloadErrorActionType = Action & { download: string; };

export const addUsersDownloadError = (options: string): RemoveUsersDownloadErrorActionType => ({
    download: options,
    type: REMOVE_USERS_ERROR
});
