import { useEffect, useState } from 'react';

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
