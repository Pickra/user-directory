import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, RouteComponentProps } from "@reach/router";

import './index.scss';
import { Main, MainContent } from './Main/Main';
import { store } from './store/store';
import * as serviceWorker from './serviceWorker';

const Home: FunctionComponent<RouteComponentProps> = () => <div>poo</div>;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basepath='/'>
        <Home path='/' />
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
