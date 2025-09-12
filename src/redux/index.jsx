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
export const userTokenSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (_, { payload }) => payload, // 전체 객체 교체
    clearUser: () => ({
      accessToken: '',
      email: '',
      firstName: '',
      gender: '',
      id: null,
      image: '',
      lastName: '',
      username: '',
    }),
  },
});

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {},
  reducers: {
    setUserInfo: (_, { payload }) => payload, // 전체 객체 교체
    clearUserInfo: () => ({
      address: null,
      age: null,
      bank: null,
      birthDate: '',
      bloodGroup: '',
      company: null,
      crypto: null,
      ein: '',
      email: '',
      eyeColor: '',
      firstName: '',
      gender: '',
      hair: null,
      height: null,
      id: null,
      image: '',
      ip: '',
      lastName: '',
      macAddress: '',
      maidenName: '',
      password: '',
      phone: '',
      role: '',
      ssn: '',
      university: '',
      userAgent: '',
      username: '',
      weight: null,
    }),
  },
});

export const store = configureStore({
  reducer: {
    productId: productIdSlice.reducer,
    setSearchData: searchSlice.reducer,
    setUser: userTokenSlice.reducer,
    clearUser: userTokenSlice.reducer,
    setUserInfo: userInfoSlice.reducer,
    clearUserInfo: userInfoSlice.reducer,
  },
});
