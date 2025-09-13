import { useDispatch } from 'react-redux';
import { useTokenFetch, useUserInfoFetch } from './useFetchHooks';
import { useEffect } from 'react';
import { userInfoSlice } from '@/redux';

const AuthAndUserInfo = () => {
  useTokenFetch({ enabled: true });
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
