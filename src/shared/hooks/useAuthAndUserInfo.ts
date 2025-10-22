import { useTokenFetch, useUserInfoFetch } from '@/shared/hooks/useFetchHooks';
import { useEffect } from 'react';
import { userInfoSlice } from '@/redux';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const AuthAndUserInfo = () => {
  const loginData = useAppSelector((state) => state.loginData);
  useTokenFetch({ query: 'https://dummyjson.com/user/login', body: loginData, enabled: true });
  const [userInfo] = useUserInfoFetch({ enabled: true });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userInfo) {
      dispatch(userInfoSlice.actions.setUserInfo(userInfo));
    }
  }, [userInfo, dispatch]);

  return null;
};

export default AuthAndUserInfo;
