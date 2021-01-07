import { navigate, RouteComponentProps, useParams } from '@reach/router';
import React, { Fragment, FunctionComponent, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Button } from '../shared/components/Buttons/Button';
import { Paginator } from '../shared/components/Paginator/Paginator';
import { User, Users } from '../Users/User';
import { getUsersState } from '../Users/UsersReducer';
import { downloadUsersCsvThunk, getUsersThunk } from '../Users/UsersThunks';

interface MainProps extends RouteComponentProps {
  children: any;
}

export const Main: FunctionComponent<MainProps> = ({ children }) => <main className="main">
  {children}
</main>;

interface MainContentProps extends RouteComponentProps {}

export const MainContent: FunctionComponent<MainContentProps> = () => {
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

  return <Fragment>
    <h1 className="main-header">Get your users, nice and hot!</h1>
    <Paginator
      page={pageNumber}
      onPrevClick={onPrevPage}
      onNextClick={onNextPage}
      onSpecificPageClick={handleSpecificPageClick}
    />
    <Button onClick={downloadCsv} className='button--action'>
      Download Csv Of Page # {pageNumber} Users
    </Button>
    <Users data={users[pageNumber]} />
    <Paginator
      page={pageNumber}
      onPrevClick={onPrevPage}
      onNextClick={onNextPage}
      onSpecificPageClick={handleSpecificPageClick}
    />
  </Fragment>;
}
