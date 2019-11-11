import { all, call, delay, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export function* fetchProducts() {
  // const { data } = yield call(() => axios.get('https://poc-shop.free.beeceptor.com/products'))
  yield delay(100);
  const data = {
    products: [{
      categoryId: "c92",
      categoryName: "Mobiles",
      items: [{
        id: "i203",
        thumbnail: "https://source.unsplash.com/random/241/200",
        name: "Google Pixel",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        rating: 4,
        noOfRatings: 10,
        price: 333.33,
        itemsInStock: 10,
        discount: '10%',
      }, {
        id: "i275",
        thumbnail: "https://source.unsplash.com/random/241/200",
        name: "Google Pixel",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        rating: 0,
        noOfRatings: 0,
        price: 333.33,
        itemsInStock: 10,
      }, {
        id: "i233",
        thumbnail: "https://source.unsplash.com/random/241/200",
        name: "Google Pixel",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        rating: 4,
        noOfRatings: 10,
        price: 333.33,
        itemsInStock: 10,
      }, {
        id: "i763",
        thumbnail: "https://source.unsplash.com/random/241/200",
        name: "Google Pixel",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        rating: 4,
        noOfRatings: 10,
        price: 333.33,
        itemsInStock: 10,
      }]
    }, {
      categoryId: "c53",
      categoryName: "Laptops",
      items: [{
        id: "i653",
        thumbnail: "https://source.unsplash.com/random/241/200",
        name: "Google Pixel",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        rating: 4,
        noOfRatings: 10,
        price: 333.33,
        itemsInStock: 10,
      }, {
        id: "i125",
        thumbnail: "https://source.unsplash.com/random/241/200",
        name: "Google Pixel",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        rating: 4,
        noOfRatings: 10,
        price: 333.33,
        itemsInStock: 10,
      }, {
        id: "i230",
        thumbnail: "https://source.unsplash.com/random/241/200",
        name: "Google Pixel",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        rating: 4,
        noOfRatings: 10,
        price: 333.33,
        itemsInStock: 10,
      }, {
        id: "i263",
        thumbnail: "https://source.unsplash.com/random/241/200",
        name: "Google Pixel",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        rating: 4,
        noOfRatings: 10,
        price: 333.33,
        itemsInStock: 10,
      }]
    }, {
      categoryId: null,
      categoryName: null,
      items: [{
        id: "i633",
        thumbnail: "https://source.unsplash.com/random/241/200",
        name: "Google Pixel",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        rating: 4,
        noOfRatings: 10,
        price: 333.33,
        itemsInStock: 10,
      }, {
        id: "i225",
        thumbnail: "https://source.unsplash.com/random/241/200",
        name: "Google Pixel",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        rating: 4,
        noOfRatings: 10,
        price: 333.33,
        itemsInStock: 10,
      }, {
        id: "i970",
        thumbnail: "https://source.unsplash.com/random/241/200",
        name: "Google Pixel",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        rating: 4,
        noOfRatings: 10,
        price: 333.33,
        itemsInStock: 10,
      }, {
        id: "i523",
        thumbnail: "https://source.unsplash.com/random/241/200",
        name: "Google Pixel",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        rating: 4,
        noOfRatings: 10,
        price: 333.33,
        itemsInStock: 10,
      }, {
        id: "i564",
        thumbnail: "https://source.unsplash.com/random/241/200",
        name: "Google Pixel",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        rating: 4,
        noOfRatings: 10,
        price: 333.33,
        itemsInStock: 10,
      }, {
        id: "i273",
        thumbnail: "https://source.unsplash.com/random/241/200",
        name: "Google Pixel",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        rating: 4,
        noOfRatings: 10,
        price: 333.33,
        itemsInStock: 10,
      }]
    }],
    filters: [{ "id": "f1238", "name": "Category", "types": ["Mobiles", "Laptops", "Clothing", "Footwear"] }, { "id": "f1233", "name": "Price", "types": ["0-100", "100-200", "200-300", "300-400"] }, { "id": "f1338", "name": "Rating", "types": ["5 stars", "4 stars", "3 stars", "2 stars", "1 star"] }, { "id": "f1648", "name": "Discounts / Offers", "types": ["0-20%", "20- 40%", "40-60%", "60-80%"] }, { "id": "f1288", "name": "Exclude Out of Stock" }]
  }
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