import { Link } from '@reach/router';
import React, { Fragment, FunctionComponent } from 'react';
import { Button } from '../shared/components/Buttons/Button';
import { ErrorNotification } from '../shared/components/Errors/ErrorNotification';
import { Paginator } from '../shared/components/Paginator/Paginator';
import { UserErrorTypes } from '../store/store';
import { UserData, UserList } from './User';

interface UserPageProps {
  pageNumber: number;
  users: UserData[];
  errors: UserErrorTypes;
  downloadCsv: () => void;
  onPrevPage: () => void;
  onNextPage: () => void;
  onSpecificPageClick: (selectedPageNumber: number) => void;
  onCloseUsersError: () => void;
  onCloseUsersDownloadError: () => void;
}

export const UserPage: FunctionComponent<UserPageProps> = ({
  pageNumber, users, errors,
  downloadCsv, onPrevPage, onNextPage, onSpecificPageClick, onCloseUsersError, onCloseUsersDownloadError
}) => {
  const userErrors = Object.keys(errors).reduce((acc, nxt) => {
    const close = nxt === 'fetch' ? onCloseUsersError : onCloseUsersDownloadError;

    return {
      ...acc,
      [nxt]: { name: errors[nxt], close }
    }
  }, {});

  return <Fragment>
    <h1 className='user-page__header'>Users Page # {pageNumber}</h1>
    <ErrorNotification errors={userErrors} />
    <div className='row'>
      <Link className='link' to='/'>Go Home</Link>
    </div>
    <Paginator
      page={pageNumber}
      onPrevClick={onPrevPage}
      onNextClick={onNextPage}
      onSpecificPageClick={onSpecificPageClick}
    />
    <div className='user-page__download'>
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
  </Fragment>
};
