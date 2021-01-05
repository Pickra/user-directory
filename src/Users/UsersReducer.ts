import { AppState, UsersState } from '../store';
import { AddUsersAction, ADD_USERS } from './UsersActions';

export function UsersReducer(prev = {0: []} as UsersState, action: AddUsersAction) {
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
