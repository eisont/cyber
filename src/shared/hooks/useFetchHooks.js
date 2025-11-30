import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userTokenSlice } from '@/redux';

export const useFetch = ({ resource, path = '', endPoint = [], query = {}, enabled = true }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const endPointString = endPoint.length ? '/' + endPoint.map((el) => el).join('/') : '';
  const queryString = Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  const url = `https://dummyjson.com/${resource}/${path}${endPointString}?${queryString}`;

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);

      setData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [url]);
  useEffect(() => {
    if (!enabled) return;
    fetchData();
  }, [enabled, fetchData]);

  return [data, isLoading];
};

export const useSearchFetch = ({ searchData, enabled = true }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = `https://dummyjson.com/products/search?q=${searchData}`;

  const debounceTimer = useCallback(() => {
    try {
      setIsLoading(true);
      const fetchData = async () => {
        const { data } = await axios.get(query);

        setData(data);
        setIsLoading(false);
      };

      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, [query]);

  useEffect(() => {
    if (!enabled) return;
    setTimeout(() => {
      debounceTimer();
    }, 1000);
    return () => clearTimeout(debounceTimer);
  }, [debounceTimer, enabled]);

  return [data, isLoading];
};

export const useUserInfoFetch = ({ enabled = true }) => {
  const accessToken = useSelector((s) => s.userToken?.accessToken);
  const [userInfo, setUserInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!enabled || !accessToken) return;
    try {
      const userInfo = async () => {
        setIsLoading(true);
        const res = await axios.get('https://dummyjson.com/user/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserInfo(res.data);
        setIsLoading(false);
      };
      userInfo();
    } catch (err) {
      console.error(err);
    }
  }, [enabled, accessToken]);

  return [userInfo, isLoading];
};

export const useTokenFetch = ({ query, body, enabled = true }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!enabled || !body.username) return;
    try {
      const fetchData = async () => {
        const res = await axios.post(query, body);
        dispatch(userTokenSlice.actions.setUserToken(res.data));
      };
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, [body, query, dispatch, enabled]);
};
