import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { userTokenSlice } from '@/redux';
import { useAppSelector } from '@/redux/hooks';
import type { RecipeCard } from '@/shared/types/api/recipe';
import type { Product } from '@/shared/types/api/product';
import type { User } from '@/shared/types/api/user';

type RecipesRes = { recipes: RecipeCard[]; products: Product[]; users: User[] };
const initialData: RecipesRes = { recipes: [], products: [], users: [] };

export const useFetch = ({ resource = '', path = '', endPoint = [], query = {}, enabled = true }) => {
  const [data, setData] = useState<RecipesRes>(initialData);
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

export const useSearchFetch = ({ searchData = '', enabled = true }) => {
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

    const id: ReturnType<typeof setTimeout> = setTimeout(() => {
      debounceTimer();
    }, 1000);
    //     핵심: clearTimeout은 setTimeout이 반환한 ID(브라우저에선 number, Node에선 객체)를 받아요. TS에선 ReturnType<typeof setTimeout> 를 쓰면 환경 차이까지 안전하게 커버됩니다.

    return () => clearTimeout(id);
  }, [debounceTimer, enabled]);

  return [data, isLoading];
};

export const useUserInfoFetch = ({ enabled = true }) => {
  const accessToken = useAppSelector((s) => s.userToken?.accessToken);
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

type tokenFetchPros = {
  query: string;
  body: {
    username: string;
    password: string;
  };
  enabled: boolean;
};

export const useTokenFetch = ({ query, body, enabled = true }: tokenFetchPros) => {
  const dispatch = useAppDispatch();

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
