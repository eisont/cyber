import { useDispatch, useSelector } from 'react-redux';
import { useTokenFetch, useUserInfoFetch } from './useFetchHooks';
import { useEffect } from 'react';
import { userInfoSlice } from '@/redux';

const AuthAndUserInfo = () => {
  const loginData = useSelector((state) => state.loginData);
  useTokenFetch({ query: 'https://dummyjson.com/user/login', body: loginData, enabled: true });
  const [userInfo] = useUserInfoFetch({ enabled: true });
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      dispatch(userInfoSlice.actions.setUserInfo(userInfo));
    }
  }, [userInfo, dispatch]);

  return null;
};

export default AuthAndUserInfo;
