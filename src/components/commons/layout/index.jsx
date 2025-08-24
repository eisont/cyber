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
import { useProductId } from '../../../context/productIdContext';

const Wrapper = styled(FlexColBetween)`
  align-items: stretch;
  width: 100vw;
`;

const Layout = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  // const [productId, setProductId] = useState('beauty');
  const [productId] = useProductId();

  const ProductsData = useFilterOptions(`https://dummyjson.com/products/category/${productId}`);

  return (
    <Wrapper>
      <Header />
      {currentPage === '/' && <HeroBanner />}
      {currentPage === '/' && <CategoryHighlight />}
      {currentPage === '/' && <ProductGrid productListData={ProductsData[0].products} />}
      {currentPage === '/' && <CategoryPromoBanner />}
      {currentPage === '/' && <SeasonalSaleBanner />}

      {/* 페이지 */}
      {currentPage === '/category' && <Category productListData={ProductsData[0].products} />}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
