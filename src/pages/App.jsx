import Layout from '../../src/components/commons/layout';
import './App.css';
import { useSelector } from 'react-redux';
import { useFilterOptions } from '../commons/api/filterApi';

const App = () => {
  const productId = useSelector((state) => state.productId);

  const ProductListData = useFilterOptions(`https://dummyjson.com/products/category/${productId}`);

  return <Layout ProductListData={ProductListData[0].products} />;
};

export default App;
