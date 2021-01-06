import { downloadFile } from '../app/downloadFile';
import { AppState, ThunkDispatchType } from '../store/store';
import { addUsersAction } from './UsersActions';

export const seed = '&seed=🌈🌈🦄🦄';
export const domain = 'https://randomuser.me'
export const results = '&results=10';
export const includedParams = '&inc=gender,name,email,picture,phone,dob';

export const getUsersThunk = (page: number) => async (dispatch: ThunkDispatchType, getState: () => AppState) => {
    const { users } = getState();
    if (!!users[page]) { return; }

    const url = `${domain}/api/?page=${page}${results}${seed}${includedParams}`;

    try {
        const res = await fetch(url);
        const users = await res.json();
        dispatch(addUsersAction({ users, page }));
    } catch(e) {
        // TODO: add UX for errors
        console.log(e);
    }
};

export const downloadUsersCsvThunk = async (page: number) => {
    const url = `${domain}/api/?page=${page}${results}${seed}${includedParams}&format=csv&dl`;

    try {
        const res = await fetch(url);
        const data = await res.text();
        downloadFile(data, page);
    } catch(e) {
        // TODO: add UX for errors
        console.log(e);
    }
};
