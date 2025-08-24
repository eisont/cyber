import Header from './Header';
import HeroBanner from './HeroBanner';
import CategoryHighlight from './CategoryHighlight';
import ProductGrid from './ProductGrid';
import CategoryPromoBanner from './CategoryPromoBanner';
import SeasonalSaleBanner from './SeasonalSaleBanner';
import Footer from './Footer';
import Category from './Category';
import { useLocation } from 'react-router-dom';
import { useFilterOptions } from '../../../commons/api/filterApi';
import { FlexColBetween } from '../../../shared/assets/styled/CommonStyled';
import styled from '@emotion/styled';
import { useState } from 'react';

const Wrapper = styled(FlexColBetween)`
  align-items: stretch;
  width: 100vw;
`;

const Layout = () => {
  const location = useLocation();
  const currentPage = location.pathname;
  const [productId, setProductId] = useState('beauty');

  const ProductsData = useFilterOptions(`https://dummyjson.com/products/category/${productId}`);

  const ToUpper = (word) => {
    const first = word.split('')[0].toUpperCase();
    const second = word.split('').slice(1, word.length).join('');
    return first + second;
  };
  return (
    <Wrapper>
      <Header />
      {currentPage === '/' && <HeroBanner />}
      {currentPage === '/' && <CategoryHighlight />}
      {currentPage === '/' && <ProductGrid setProductId={setProductId} productListData={ProductsData[0].products} productId={productId} />}
      {currentPage === '/' && <CategoryPromoBanner />}
      {currentPage === '/' && <SeasonalSaleBanner />}

      {/* 페이지 */}
      {currentPage === '/category' && <Category setProductId={setProductId} productListData={ProductsData[0].products} productId={ToUpper(productId)} />}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
