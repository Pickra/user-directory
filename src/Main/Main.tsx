import React, { FunctionComponent, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { UserList } from '../Users/Users';
import { getUsersState } from '../Users/UsersReducer';
import { getUsers } from '../Users/UsersThunks';

const seed = '🌈🌈🦄🦄';

interface Props {}

export const Main: FunctionComponent<Props> = () => {
  const users = useSelector(getUsersState, shallowEqual);
  const [page, setpage] = useState(1);
  const dispatch = useDispatch();

  const renderUsers = () => {
    const allUsers = users[page];
    if (!allUsers || !allUsers.length) { return <div>loader</div>; }
    return <UserList users={allUsers} />;
  }

  useEffect(() => {
    dispatch(getUsers(`https://randomuser.me/api/?page=${page}&results=10&seed=${seed}`, page));
    // eslint-disable-next-line
  }, [])

  return <main className="main">
    <h1 className="main-header">Get your users, nice and hot!</h1>
    {renderUsers()}
  </main>;
}
