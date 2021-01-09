import { AppState, UsersState } from '../../store/store';
import { AddUsersActionType, ADD_USERS } from './UsersActions';

export const initialUsersReducerState = {0: []} as UsersState;

export function usersReducer(prev = initialUsersReducerState, action: AddUsersActionType) {
    switch (action.type) {
        case ADD_USERS:
            const { page, users } = action;

            return {
                ...prev,
                [page]: users.results
            };

        default:
            return prev;
    }
}

export const getUsersState = (state: AppState) => state.users;
