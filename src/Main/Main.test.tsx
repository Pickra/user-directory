import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { buildStore } from '../store';
import { Main } from './Main';
import * as reactRedux from 'react-redux';
import { getUsersState } from '../Users/UsersReducer';

let store: any;

describe('<Main />', () => {
  beforeEach(() => { store = buildStore(); });

  it('should render the header', () => {  
    const { getByText } = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
  
    expect(getByText(/Get your users, nice and hot!/i)).toBeInTheDocument();
  });

  it('should show a loader when there are no users', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
  
    expect(getByText(/loader/i)).toBeInTheDocument();
  });

  it('should show users when they exist', () => {
    const first = '🌮';
    const last = '🐈';
    const dob = { age: 5 };

    const mockUsers = { 1: [{ name: { first, last }, dob, gender: '', phone: '', picture: '', email: '' }]};

    jest.spyOn(reactRedux, 'useSelector').mockImplementation(selector => {
      if (selector === getUsersState) { return mockUsers; }
    });
  
    const { getByText, queryByText } = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    expect(queryByText(/loader/i)).not.toBeInTheDocument();
    expect(getByText(`${first} ${last}`)).toBeInTheDocument();
    expect(getByText(`age: ${dob.age}`)).toBeInTheDocument();
  });
});
