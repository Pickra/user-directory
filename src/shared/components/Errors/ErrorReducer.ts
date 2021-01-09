import { AppState, ErrorState } from '../../../store/store';
import { AddUsersErrorActionType, ADD_USERS_ERROR } from './ErrorActions';

export const intialErrors: ErrorState = {
    userErrors: { fetch: '', download: '' }
};

export function errorReducer(prev = intialErrors, action: AddUsersErrorActionType) {
    switch (action.type) {
        case ADD_USERS_ERROR:
            const { fetch } = action;
            return { userErrors: { ...prev.userErrors, fetch }};

        default:
            return prev;
    }
}

export const getErrorsState = (state: AppState) => state.errors;