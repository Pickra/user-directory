import React, { FunctionComponent, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { User } from '../Users/User';
import { getUsersState } from '../Users/UsersReducer';
import { getUsers } from '../Users/UsersThunks';

interface Props {}

export const Main: FunctionComponent<Props> = () => {
  const users = useSelector(getUsersState, shallowEqual);
  const [page, setpage] = useState(1);
  const dispatch = useDispatch();

  const renderUsers = () => {
    const allUsers = users[page];
    if (!allUsers || !allUsers.length) { return <div>loader</div>; }
    const userList = allUsers.map(u => <User {...u} key={u.email} />);
    return <ul className='users'>{userList}</ul>
  }

  useEffect(() => {
    dispatch(getUsers(page));
    // eslint-disable-next-line
  }, []) // only load users on init

  return <main className="main">
    <h1 className="main-header">Get your users, nice and hot!</h1>
    {renderUsers()}
  </main>;
}
