import { Link } from '@reach/router';
import React, { Fragment, FunctionComponent } from 'react';
import { Button } from '../shared/components/Buttons/Button';
import { Paginator } from '../shared/components/Paginator/Paginator';
import { UserData, UserList } from './User';

interface UserPageProps {
  pageNumber: number;
  users: UserData[];
  downloadCsv: () => void;
  onPrevPage: () => void;
  onNextPage: () => void;
  onSpecificPageClick: (selectedPageNumber: number) => void;
}

export const UserPage: FunctionComponent<UserPageProps> = ({
  pageNumber, users, downloadCsv, onPrevPage, onNextPage, onSpecificPageClick
}) => <Fragment>
  <h1 className="main__header">Users page # {pageNumber}</h1>
  <div className='row'>
    <Link className='link' to='/'>Go Home</Link>
  </div>
  <Paginator
    page={pageNumber}
    onPrevClick={onPrevPage}
    onNextClick={onNextPage}
    onSpecificPageClick={onSpecificPageClick}
  />
  <div className='row'>
    <span>Download Users CSV </span>
    <Button onClick={downloadCsv} className='button--action'>
      Page # {pageNumber}
    </Button>
  </div>
  <UserList data={users} />
  <Paginator
    page={pageNumber}
    onPrevClick={onPrevPage}
    onNextClick={onNextPage}
    onSpecificPageClick={onSpecificPageClick}
  />
</Fragment>;
