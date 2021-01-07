import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Router } from "@reach/router";

import './index.scss';
import { Main, MainContent } from './Main/Main';
import { store } from './store/store';
import * as serviceWorker from './serviceWorker';
import { Home } from './Home/Home';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basepath='/'>
        <Home path='/' />
        {/* TODO: fix Main route so you don't need the redirect */}
        <Redirect to={'1'} from={'users'} noThrow />
        <Main path='users'>
          <MainContent path=':page' />
        </Main>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
