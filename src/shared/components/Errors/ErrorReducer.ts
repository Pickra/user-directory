import { AppState, ErrorState } from '../../../store/store';
import {
    ADD_USERS_ERROR, REMOVE_USERS_ERROR,
    AddUsersErrorActionType, RemoveUsersDownloadErrorActionType
} from './ErrorActions';

export const intialErrors: ErrorState = {
    userErrors: { fetch: '', download: '' }
};

type errorReducerAction = AddUsersErrorActionType | RemoveUsersDownloadErrorActionType;

export function errorReducer(prev = intialErrors, action: errorReducerAction) {
    switch (action.type) {
        case ADD_USERS_ERROR:
            const { fetch } = action as AddUsersErrorActionType;
            return { userErrors: { ...prev.userErrors, fetch }};

        case REMOVE_USERS_ERROR:
            const { download } = action as RemoveUsersDownloadErrorActionType;
            return { userErrors: { ...prev.userErrors, download }};

        default:
            return prev;
    }
}

export const getErrorsState = (state: AppState) => state.errors;