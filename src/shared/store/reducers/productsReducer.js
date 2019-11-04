import { FETCH_PRODUCTS_SUCCESS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return action.data;
    default:
      return state;
  }
};