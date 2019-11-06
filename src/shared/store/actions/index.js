import { all, fork, delay, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export function* fetchProducts() {
  // const { data } = yield call(() => axios.get('https://ssr-shop.free.beeceptor.com/products'))
  console.log('*********inside fetch products********')
  yield delay(100);
  const data = [{ "id": "a01", "name": "Product 1", "desc": "Good" }, { "id": "a03", "name": "Product 2", "desc": "Great" }];
  console.log('********dispatched success***********');
  yield put({ type: FETCH_PRODUCTS_SUCCESS, data })
}

export function* watchFetchProducts() {
  console.log('********watchFetchProducts********')
  yield takeEvery(FETCH_PRODUCTS, fetchProducts)
}

export default function* rootSaga() {
  console.log('********rootSaga********')
  yield all([
    fork(watchFetchProducts),
  ])
}