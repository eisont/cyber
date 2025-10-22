import { configureStore, createSlice } from '@reduxjs/toolkit';

export const productIdSlice = createSlice({
  name: 'productId', // 이름
  initialState: 'beauty', // 초기값
  reducers: {
    // 상태가 변하는 값
    getProductId(_, { payload }) {
      return payload;
    },
  },
});

export const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearchData(_, { payload }) {
      return payload;
    },
  },
});

type loginDataProps = {
  username: string;
  password: string;
  expiresInMins: number;
};
const initialState: loginDataProps = {
  username: '',
  password: '',
  expiresInMins: 30,
};

export const loginDataSlice = createSlice({
  name: 'loginData',
  initialState,
  reducers: {
    setLoginData: (_, { payload }) => payload,
  },
});

type userTokenProps = { accessToken: string };
const tokenInitialState: userTokenProps = { accessToken: '' };
export const userTokenSlice = createSlice({
  name: 'userToken',
  initialState: tokenInitialState,
  reducers: {
    setUserToken: (_, { payload }) => payload, // 전체 객체 교체
  },
});

type userInfoProps = { image: string; username: string };
const InfoState: userInfoProps = { image: '', username: '' };
export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: InfoState,
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
