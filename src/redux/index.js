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

export const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearchData(state, action) {
      return (state = action.payload);
    },
  },
});

export const loginDataSlice = createSlice({
  name: 'loginData',
  initialState: {},
  reducers: {
    setLoginData: (_, { payload }) => payload,
  },
});

export const userTokenSlice = createSlice({
  name: 'userToken',
  initialState: {},
  reducers: {
    setUserToken: (_, { payload }) => payload, // 전체 객체 교체
  },
});
export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: '',
  reducers: {
    setUserInfo: (_, { payload }) => payload, // 전체 객체 교체
  },
});

export const store = configureStore({
  reducer: {
    productId: productIdSlice.reducer,
    setSearchData: searchSlice.reducer,
    loginData: loginDataSlice.reducer,
    userToken: userTokenSlice.reducer,
    userInfo: userInfoSlice.reducer,
  },
});
