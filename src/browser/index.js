import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { renderRoutes } from 'react-router-config';

import reducers from '../shared/store/reducers';
import rootSaga from '../shared/store/actions';
import routes from '../shared/routes';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);