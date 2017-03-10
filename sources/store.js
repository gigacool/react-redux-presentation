import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { applications } from './business/applications/reducers';
import sagas from './business/sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(sagaMiddleware);

  if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension());
    }
  }

  const reducers = combineReducers({applications})
  const store = createStore(reducers, middleware);
  sagaMiddleware.run(sagas);

  // if (module.hot) {
  //   module.hot.accept('./reducers', () => {
  //     store.replaceReducer(require('./reducers').default);
  //   });
  // }

  return store;
}
