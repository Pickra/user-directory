import React, { FunctionComponent, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Paginator } from '../shared/components/Paginator/Paginator';
import { User } from '../Users/User';
import { getUsersState } from '../Users/UsersReducer';
import { downloadUsersCsvThunk, getUsersThunk } from '../Users/UsersThunks';

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
    dispatch(getUsersThunk(page));
    // eslint-disable-next-line
  }, [page]);

  const downloadCsv = () => downloadUsersCsvThunk(page);
  const onNextPage = () => setpage(page + 1);
  
  const onPrevPage = () => {
    if (page === 1) { return; }
    setpage(page - 1);
  };

  return <main className="main">
    <h1 className="main-header">Get your users, nice and hot!</h1>
    <Paginator page={page} onPrevClick={onPrevPage} onNextClick={onNextPage} onSpecificPageClick={setpage} />
    <button onClick={downloadCsv}>Download Csv Of Page # {page} Users</button>
    {renderUsers()}
    <Paginator page={page} onPrevClick={onPrevPage} onNextClick={onNextPage} onSpecificPageClick={setpage} />
  </main>;
}
