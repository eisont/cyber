import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { userTokenSlice } from '@/redux';
import { useAppSelector } from '@/redux/hooks';
import type { Recipe } from '@/shared/types/api/recipe';
import type { Product, ProductsResponse } from '@/shared/types/api/product';
import type { User } from '@/shared/types/api/user';

type RecipesRes = { recipes: Recipe[]; products: Product[]; users: User[] };
const defaultRecipesRes: RecipesRes = { recipes: [], products: [], users: [] };

type UseFetchParams<TData> = {
  resource?: string;
  path?: string | number;
  endPoint?: Array<string | number>;
  query?: Record<string, string | number>;
  enabled?: boolean;
  initialData?: TData;
};

export const useFetch = <TData = RecipesRes>({
  resource = '',
  path = '',
  endPoint = [],
  query = {},
  enabled = true,
  initialData = defaultRecipesRes as TData,
}: UseFetchParams<TData>) => {
  const [data, setData] = useState<TData>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(enabled);

  const endPointString = endPoint.length ? `/${endPoint.join('/')}` : '';
  const pathSegment = path !== '' ? `/${path}` : '';
  const queryEntries = Object.entries(query);
  const queryString = queryEntries.length
    ? `?${queryEntries.map(([key, value]) => `${key}=${value}`).join('&')}`
    : '';

  const url = `https://dummyjson.com/${resource}${pathSegment}${endPointString}${queryString}`;

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get<TData>(url);

      setData(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [url]);
  useEffect(() => {
    if (!enabled) {
      setIsLoading(false);
      return;
    }

    fetchData();
  }, [enabled, fetchData]);

  return [data, isLoading] as const;
};

export const useSearchFetch = ({
  searchData = '',
  enabled = true,
}: {
  searchData?: string;
  enabled?: boolean;
}) => {
  const [data, setData] = useState<ProductsResponse>({
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  const query = `https://dummyjson.com/products/search?q=${encodeURIComponent(searchData)}`;

  const debounceTimer = useCallback(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<ProductsResponse>(query);

        setData(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchData();
  }, [query]);

  useEffect(() => {
    if (!enabled) return;

    const id: ReturnType<typeof setTimeout> = setTimeout(() => {
      debounceTimer();
    }, 500);
    // 핵심: clearTimeout은 setTimeout이 반환한 ID(브라우저에선 number, Node에선 객체)를 받아요. TS에선 ReturnType<typeof setTimeout> 를 쓰면 환경 차이까지 안전하게 커버됩니다.

    return () => clearTimeout(id);
  }, [debounceTimer, enabled]);

  return [data, isLoading] as const;
};

export const useUserInfoFetch = ({ enabled = true }: { enabled?: boolean }): [User | null, boolean] => {
  const accessToken = useAppSelector((s) => s.userToken?.accessToken);
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!enabled || !accessToken) return;
    const fetchUserInfo = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get<User>('https://dummyjson.com/user/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserInfo(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
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
