import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userTokenSlice } from '@/redux';

export const useFetch = ({ query, id = '', enabled = true }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    try {
      const url = query + id;
      setIsLoading(true);
      const fetchData = async () => {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
        setIsLoading(false);
      };

      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, [query, id, enabled]);

  return [data, isLoading];
};

export const useSearchFetch = ({ query, enabled = true }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const debounceTimer = setTimeout(() => {
      try {
        setIsLoading(true);
        const fetchData = async () => {
          const res = await fetch(query);
          const json = await res.json();

          setData(json);
          setIsLoading(false);
        };

        fetchData();
      } catch (err) {
        console.error(err);
      }
    }, 1000);
    return () => clearTimeout(debounceTimer);
  }, [query, enabled]);

  return [data, isLoading];
};

export const useTokenFetch = ({ enabled = true }) => {
  const loginData = useSelector((state) => state.loginData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!enabled || !loginData.username) return;
    try {
      const fetchData = async () => {
        const res = await axios.post('https://dummyjson.com/user/login', loginData);
        dispatch(userTokenSlice.actions.setUserToken(res.data));
      };
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, [dispatch, loginData, enabled]);
};

export const useUserInfoFetch = ({ enabled = true }) => {
  const token = useSelector((s) => s.userToken?.accessToken);
  const [userInfo, setUserInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!enabled || !token) return;
    try {
      const userInfo = async () => {
        setIsLoading(true);
        const res = await axios.get('https://dummyjson.com/user/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserInfo(res.data);
        setIsLoading(false);
      };
      userInfo();
    } catch (err) {
      console.error(err);
    }
  }, [enabled, token]);

  return [userInfo, isLoading];
};
