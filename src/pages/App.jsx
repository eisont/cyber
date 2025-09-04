// 이미지 최적화, 무한스크롤, 절대경로, 폴더구조 수정, 검색 기능 구현, page 폴더 구조 수정, customHooks 따로 관리, api fetch함수 수정

import { Route, Routes } from 'react-router-dom';
import { FlexColBetween } from '../shared/assets/styled/CommonStyled';
import HeroBanner from '../components/commons/layout/HeroBanner';
import CategoryHighlight from '../components/commons/layout/CategoryHighlight';
import ProductGrid from '../components/commons/layout/ProductGrid';
import CategoryPromoBanner from '../components/commons/layout/CategoryPromoBanner';
import SeasonalSaleBanner from '../components/commons/layout/SeasonalSaleBanner';
import Footer from '../components/commons/layout/Footer';
import Category from '../components/commons/layout/Category';
import Header from '../components/commons/layout/Header';
import styled from '@emotion/styled';

const Wrapper = styled(FlexColBetween)`
  align-items: stretch;
  width: 100vw;
`;

const App = () => {
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

export default App;
