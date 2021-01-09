import { navigate, RouteComponentProps, useParams } from '@reach/router';
import React, { FunctionComponent, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { UserPage } from './UserPage';
import { getUsersState } from './state/UsersReducer';
import { getErrorsState } from '../shared/components/Errors/ErrorReducer';
import { getUsersThunk, downloadUsersCsvThunk } from './state/UsersThunks';
import { addUsersDownloadError, addUsersError } from '../shared/components/Errors/ErrorActions';

interface UsersRouteProps extends RouteComponentProps {
    children: React.ReactNode;
}
  
export const UsersRoute: FunctionComponent<UsersRouteProps> = ({ children }) => <main className='user_page'>
    {children}
</main>;

interface UsersPageRouteProps extends RouteComponentProps {}

export const UsersPageRoute: FunctionComponent<UsersPageRouteProps> = () => {
  const users = useSelector(getUsersState, shallowEqual);
  const { userErrors } = useSelector(getErrorsState, shallowEqual)
  const { page } = useParams();
  const pageNumber = +page;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk(pageNumber));
    // eslint-disable-next-line
  }, [pageNumber]);

  const downloadCsv = () => dispatch(downloadUsersCsvThunk(pageNumber));
  const onNextPage = () => navigate(`${pageNumber + 1}`);
  
  const onPrevPage = () => {
    if (pageNumber === 1) { return; }
    navigate(`${pageNumber - 1}`);
  };

  const handleSpecificPageClick = (selectedPage: number) => navigate(`${selectedPage}`);

  const onCloseUsersError = () => dispatch(addUsersError(''));
  const onCloseUsersDownloadError = () => dispatch(addUsersDownloadError(''));

  return <UserPage
    pageNumber={pageNumber}
    users={users[pageNumber]}
    errors={userErrors}
    downloadCsv={downloadCsv}
    onPrevPage={onPrevPage}
    onNextPage={onNextPage}
    onSpecificPageClick={handleSpecificPageClick}
    onCloseUsersError={onCloseUsersError}
    onCloseUsersDownloadError={onCloseUsersDownloadError}
  />;
};