import { ThunkDispatchType } from '../store/store';
import { addUsersAction } from './UsersActions';

export const getUsersThunk = (page: number) => async (dispatch: ThunkDispatchType) => {
    const seed = '🌈🌈🦄🦄';
    const includedParams = '&inc=gender,name,email,picture,phone,dob';
    const url = `https://randomuser.me/api/?page=${page}&results=10&seed=${seed}${includedParams}`;

    try {
        const res = await fetch(url);
        const users = await res.json();
        dispatch(addUsersAction({ users, page }));
    } catch(e) {
        // TODO: add UX for errors
        console.log(e);
    }
};
