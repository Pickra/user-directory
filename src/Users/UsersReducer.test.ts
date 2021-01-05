import { AddUsersActionType, ADD_USERS, addUsersAction } from './UsersActions';
import { initialUsersReducerState, usersReducer } from './UsersReducer';
import { mockUsers } from './UserTestHelpers';

describe('usersReducer', () => {
    it('should return the initial state', () => {
        expect(usersReducer(undefined, {} as AddUsersActionType)).toEqual(initialUsersReducerState);
    });

    it('should return the previous state', () => {
        const prev = {...initialUsersReducerState};

        const action = {
            type: ADD_USERS,
            users: { results: initialUsersReducerState[0] },
            page: 0
        };

        expect(usersReducer(prev, action)).toEqual(prev);
    });

    it('should handle an addUsersAction', () => {
        const action = addUsersAction({ users: { results: mockUsers[1] }, page: 1 });
        expect(usersReducer(mockUsers, action)).toEqual(mockUsers)
    });
});
