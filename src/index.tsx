import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import { Main } from './Main/Main';
import { buildStore } from './store';
import * as serviceWorker from './serviceWorker';

const store = buildStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
