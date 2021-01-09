import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { AppState, ThunkDispatchType } from '../store';
import { initialUsersReducerState } from '../../Users/state/UsersReducer';
import { intialErrors } from '../../shared/components/Errors/ErrorReducer';

const mockStore = configureMockStore<AppState, ThunkDispatchType>([thunk]);

export const store = mockStore({
    users: initialUsersReducerState,
    errors: intialErrors
});
