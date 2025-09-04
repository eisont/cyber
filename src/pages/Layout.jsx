// 스켈렙톤 구현, 무한스크롤, trottle, Ref 구현

import { Route, Routes } from 'react-router-dom';
import { FlexColBetween } from '@/shared/assets/styled/CommonStyled';
import CategoryHighlight from '@/shared/ui/CategoryHighlight';
import CategoryPromoBanner from '@/shared/ui/CategoryPromoBanner';
import Category from '@/pages/Category';
import HeroBanner from '@/shared/ui/HeroBanner';
import ProductGrid from '@/shared/ui/ProductGrid';
import SeasonalSaleBanner from '@/shared/ui/SeasonalSaleBanner';
import SearchProducts from '@/shared/ui/SearchProducts';
import Header from '@/shared/layout/Header';
import Footer from '@/shared/layout/Footer';
import styled from '@emotion/styled';

const Wrapper = styled(FlexColBetween)`
  align-items: stretch;
  width: 100vw;
`;

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <HeroBanner />
              <CategoryHighlight />
              <ProductGrid />
              <CategoryPromoBanner />
              <SeasonalSaleBanner />
            </>
          }
        />
        <Route path='/category' element={<Category />} />
        <Route path='/category/:id' element={<Category />} />

        <Route path='/products' element={<SearchProducts />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
