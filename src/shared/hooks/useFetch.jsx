import { useEffect, useState } from 'react';

const useFetch = ({ query, id = '', enabled = true }) => {
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

export default useFetch;
