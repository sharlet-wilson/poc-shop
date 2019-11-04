import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../../shared/store/reducers';
import rootSaga from '../../shared/store/actions';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
