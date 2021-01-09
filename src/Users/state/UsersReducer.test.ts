import { AddUsersActionType, ADD_USERS, addUsersAction } from './UsersActions';
import { initialUsersReducerState, usersReducer } from './UsersReducer';
import { mockUsers } from '../UserTestHelpers';

describe('usersReducer', () => {
    it('should return the initial state', () => {
        expect(usersReducer(undefined, {} as AddUsersActionType)).toEqual(initialUsersReducerState);
    });

    it('should return the previous state when it receives an invalid action', () => {
        const action = {
            type: '💩',
            users: { results: mockUsers[1] },
            page: 10
        };

        expect(usersReducer(undefined, action)).toEqual(initialUsersReducerState);
    });

    it('should handle an addUsersAction', () => {
        const action = addUsersAction({ users: { results: mockUsers[1] }, page: 1 });
        expect(usersReducer(mockUsers, action)).toEqual(mockUsers)
    });
});
