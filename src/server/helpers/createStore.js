import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import sagaMonitor from '@redux-saga/simple-saga-monitor';

import reducers from '../../shared/store/reducers';
import rootSaga from '../../shared/store/actions';

export default () => {
  const activeEffectIds = [];

  const watchEffectEnd = (effectId) => {
    console.log("******ended********", effectId)
    const effectIndex = activeEffectIds.indexOf(effectId);
    if (effectIndex !== -1) {
      console.log("*********removed*******", effectId);
      activeEffectIds.splice(effectIndex, 1);
    }
  };
  const sagaMiddleware = createSagaMiddleware({
    sagaMonitor: {
      effectCancelled: watchEffectEnd,
      effectRejected: watchEffectEnd,
      effectResolved: watchEffectEnd,
      effectTriggered: (event) => {
        console.log("******triggered********", event)
        if (event.effect.type === 'CALL') {
          console.log("********added*********", event)
          activeEffectIds.push(event.effectId);
        }
      },
    }
  });
  const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));
  store.runSaga = sagaMiddleware.run;
  store.activeEffectIds = activeEffectIds;
  store.close = () => {
    store.dispatch(END);
  };
  return store;
}
