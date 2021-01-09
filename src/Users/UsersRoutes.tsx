import { navigate, RouteComponentProps, useParams } from '@reach/router';
import React, { FunctionComponent, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { UserPage } from './UserPage';
import { getUsersState } from './UsersReducer';
import { getUsersThunk, downloadUsersCsvThunk } from './UsersThunks';

interface UsersRouteProps extends RouteComponentProps {
    children: React.ReactNode;
}
  
export const UsersRoute: FunctionComponent<UsersRouteProps> = ({ children }) => <main className='user_page'>
    {children}
</main>;

interface UsersPageRoute extends RouteComponentProps {}

export const UsersPageRoute: FunctionComponent<UsersPageRoute> = () => {
  const users = useSelector(getUsersState, shallowEqual);
  const { page } = useParams();
  const pageNumber = +page;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk(pageNumber));
    // eslint-disable-next-line
  }, [pageNumber]);

  const downloadCsv = () => downloadUsersCsvThunk(pageNumber);
  const onNextPage = () => navigate(`${pageNumber + 1}`);
  
  const onPrevPage = () => {
    if (pageNumber === 1) { return; }
    navigate(`${pageNumber - 1}`);
  };

  const handleSpecificPageClick = (selectedPage: number) => navigate(`${selectedPage}`);

  return <UserPage
    pageNumber={pageNumber}
    users={users[pageNumber]}
    downloadCsv={downloadCsv}
    onPrevPage={onPrevPage}
    onNextPage={onNextPage}
    onSpecificPageClick={handleSpecificPageClick}
  />;
};