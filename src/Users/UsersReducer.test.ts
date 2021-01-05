import { AddUsersActionType, ADD_USERS, addUsersAction } from './UsersActions';
import { initialRulesReducerState, usersReducer } from './UsersReducer';
import { mockUsers } from './UserTestHelpers';

describe('usersReducer', () => {
    it('should return the initial state', () => {
        expect(usersReducer(undefined, {} as AddUsersActionType)).toEqual(initialRulesReducerState);
    });

    it('should return the previous state', () => {
        const prev = {...initialRulesReducerState};

        const action = {
            type: ADD_USERS,
            users: { results: initialRulesReducerState[0] },
            page: 0
        };

        expect(usersReducer(prev, action)).toEqual(prev);
    });

    it('should handle an addUsersAction', () => {
        const action = addUsersAction({ users: { results: mockUsers[1] }, page: 1 });
        expect(usersReducer(mockUsers, action)).toEqual(mockUsers)
    });
});
