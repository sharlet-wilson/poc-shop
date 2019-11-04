import { all, call, delay, put, takeEvery } from 'redux-saga/effects';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export function* fetchProducts() {
  yield delay(1000);
  yield put({ type: FETCH_PRODUCTS_SUCCESS, data: [{ id: 1, name: 'Test' }, { id: 2, name: 'Test2' }] })
}

export function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS, fetchProducts)
}

export default function* rootSaga() {
  yield all([
    call(watchFetchProducts),
  ])
}