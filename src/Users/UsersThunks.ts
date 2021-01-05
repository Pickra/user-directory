import { ThunkDispatchType } from '../store';
import { addUsers } from './UsersActions';

export const getUsers = (url: string, page: number) => async (dispatch: ThunkDispatchType) => {
    try {
        const res = await fetch(url);
        const users = await res.json();
        dispatch(addUsers({ users, page }));
    } catch(e) {
        // TODO: add UX for errors
        console.log(e);
    }
};