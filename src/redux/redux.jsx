import { combineReducers, legacy_createStore } from 'redux';

export const getProductId = (id) => {
  return {
    type: 'getProductId',
    payload: id,
  };
};

const productIdReducer = (state = 'beauty', action) => {
  switch (action.type) {
    case 'getProductId':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ productId: productIdReducer });
export const store = legacy_createStore(rootReducer);
