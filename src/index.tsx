import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Router } from "@reach/router";

import './index.scss';
import { store } from './store/store';
import { Home } from './Home/Home';
import { UsersRoute, UsersPageRoute } from './Users/UsersRoutes';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basepath='/'>
        <Home path='/' />
        {/* TODO: fix UsersRoute route so you don't need the redirect */}
        <Redirect to={'1'} from={'users'} noThrow />
        <UsersRoute path='users'>
          <UsersPageRoute path=':page' />
        </UsersRoute>
      </Router>
      <footer className='row'>
        Copyright {new Date().getFullYear()}: Dragons And Unicorns
      </footer>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
