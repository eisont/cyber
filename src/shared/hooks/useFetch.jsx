import { useEffect, useState } from 'react';

const useFetch = ({ query, id = '', enabled = true }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    try {
      const url = query + id;
      const fetchData = async () => {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
      };

      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, [query, id, enabled]);

  return data;
};

export default useFetch;
