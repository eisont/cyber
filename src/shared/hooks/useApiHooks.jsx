import { useEffect, useState } from 'react';

export const useFilterOptions = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
      };

      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, [url]);

  return [data];
};

export const useCategroy = () => {
  const categoriesData = useFilterOptions('https://dummyjson.com/products/categories');

  return [categoriesData];
};
