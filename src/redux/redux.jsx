import { configureStore, createSlice } from '@reduxjs/toolkit';

export const productIdSlice = createSlice({
  name: 'productId', // 이름
  initialState: 'beauty', // 초기값
  reducers: {
    // 상태가 변하는 값
    getProductId(state, action) {
      return (state = action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    productId: productIdSlice.reducer,
  },
});
