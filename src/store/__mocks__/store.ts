import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { AppState, ThunkDispatchType } from '../store';
import { initialUsersReducerState } from '../../Users/UsersReducer';

const mockStore = configureMockStore<AppState, ThunkDispatchType>([thunk]);

export const store = mockStore({
    users: initialUsersReducerState
});
