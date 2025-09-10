// 무한스크롤, Ref 구현, 찜한 목록, 반응형 구현

import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from '@/shared/layout';
import { HeroBanner, CategoryHighlight, CategoryPromoBanner, SeasonalSaleBanner } from '@/pages/ui';
import Category from '@/pages/Category';
import { FlexColBetween } from '@/shared/assets/styled/CommonStyled';
import styled from '@emotion/styled';
import ProductGrid from '@/shared/ui/ProductGrid';
import SearchProducts from '@/shared/ui/SearchProducts';

const Wrapper = styled(FlexColBetween)`
  align-items: stretch;
  width: 100%;
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
              {/* <HeroBanner /> */}
              {/* <CategoryHighlight /> */}
              <ProductGrid />
              <CategoryPromoBanner />
              <SeasonalSaleBanner />
            </>
          }
        />

        {/* <Route path='/category/:id?' element={<Category />} /> */}

        {/* <Route path='/products' element={<SearchProducts />} /> */}
      </Routes>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
