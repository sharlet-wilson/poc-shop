import { FETCH_PRODUCTS_SUCCESS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      console.log('3333333333333333333')
      console.log(action.data)
      return action.data;
    default:
      return state;
  }
};