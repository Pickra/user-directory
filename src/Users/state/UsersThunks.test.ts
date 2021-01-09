import { MockStore } from 'redux-mock-store';
import { store } from '../../store/store';
import { ADD_USERS } from './UsersActions';
import { getUsersThunk } from './UsersThunks';

jest.mock('../store/store');

describe('getUsersThunk', () => {
    beforeEach(() => {
        (store as unknown as MockStore).clearActions();
    });

    it('should dispatch an addUsersAction', async () => {
        const expected = [{ type: ADD_USERS, page: 1 }];
        await store.dispatch<any>(getUsersThunk(1));
        const actual = (store as unknown as MockStore).getActions();

        expect(actual).toMatchObject(expected);
        expect(actual[0].users.results.length).toBe(10);
    });
});
