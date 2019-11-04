import { all, call, delay, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export function* fetchProducts() {
  const { data } = yield call(() => axios.get('https://poc-shop.free.beeceptor.com/products'))
  yield put({ type: FETCH_PRODUCTS_SUCCESS, data })
}

export function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS, fetchProducts)
}

export default function* rootSaga() {
  yield all([
    call(watchFetchProducts),
  ])
}