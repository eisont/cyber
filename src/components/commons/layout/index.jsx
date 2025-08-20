import Header from './Header';
import HeroBanner from './HeroBanner';
import CategoryHighlight from './CategoryHighlight';
import ProductGrid from './ProductGrid';
import CategoryPromoBanner from './CategoryPromoBanner';
import SeasonalSaleBanner from './SeasonalSaleBanner';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useCategroy, useFilterOptions } from '../../../commons/api/filterApi';
import Category from './Category';

const Layout = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  const [productId, setProductId] = useState('beauty');

  const ProductsData = useFilterOptions(`https://dummyjson.com/products/category/${productId}`);

  const data = useCategroy();

  const ToUpper = (word) => {
    const first = word.split('')[0].toUpperCase();
    const second = word.split('').slice(1, word.length).join('');
    return first + second;
  };
  return (
    <>
      <Header />
      {currentPage === '/' && <HeroBanner />}
      {currentPage === '/' && <CategoryHighlight />}
      {currentPage === '/' && <ProductGrid data={data[0][0]} setProductId={setProductId} productListData={ProductsData[0].products} />}
      {currentPage === '/' && <CategoryPromoBanner />}
      {currentPage === '/' && <SeasonalSaleBanner />}
      {currentPage === '/category' && <Category data={data[0][0]} setProductId={setProductId} productListData={ProductsData[0].products} productId={ToUpper(productId)} />}
      <Footer />
    </>
  );
};

export default Layout;
