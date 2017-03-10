import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';

import 'antd/dist/antd.min.css';
// import './views/styles/screen.scss';

import configureStore from './store';

import Root from './containers/root';


const rootElement = document.getElementById('root');
const store = configureStore();

/* Render function is defined so it can be called whenever hot-reload
* is enabled. Hot reload should not be made available in production mode.
*/
function render(Root) {
  ReactDOM.render(<AppContainer>
    <Root
      history={browserHistory}
      store={store}
    />
  </AppContainer>,
  rootElement );
}

if (module.hot) {
  module.hot.accept('./containers/root', () => {
    render(require('./containers/root').default);
  });
}

render(Root);
