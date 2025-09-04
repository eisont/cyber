// 이미지 최적화, 무한스크롤, 절대경로, 폴더구조 수정, 검색 기능 구현, page 폴더 구조 수정, customHooks 따로 관리, api fetch함수 수정

import { Route, Routes } from 'react-router-dom';
import { FlexColBetween } from '@/shared/assets/styled/CommonStyled';
import CategoryHighlight from '@/shared/ui/CategoryHighlight';
import CategoryPromoBanner from '@/shared/ui/CategoryPromoBanner';
import Category from '@/pages/Category';
import HeroBanner from '@/shared/ui/HeroBanner';
import ProductGrid from '@/shared/ui/ProductGrid';
import SeasonalSaleBanner from '@/shared/ui/SeasonalSaleBanner';
import styled from '@emotion/styled';
import Header from '@/shared/layout/Header';
import Footer from '@/shared/layout/Footer';

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
      </Routes>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
