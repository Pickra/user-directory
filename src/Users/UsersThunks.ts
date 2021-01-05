import { ThunkDispatchType } from '../store';
import { addUsersAction } from './UsersActions';

export const getUsers = (page: number) => async (dispatch: ThunkDispatchType) => {
    const seed = '🌈🌈🦄🦄';
    const url = `https://randomuser.me/api/?page=${page}&results=10&seed=${seed}`;

    try {
        const res = await fetch(url);
        const users = await res.json();
        dispatch(addUsersAction({ users, page }));
    } catch(e) {
        // TODO: add UX for errors
        console.log(e);
    }
};