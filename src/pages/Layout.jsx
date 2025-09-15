// 무한스크롤, Ref 구현, 찜한 목록,
// 모바일 반응형 구현 (상품 디테일, 카테고리>필터, header_모달 )

import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from '@/shared/layout';
import { HeroBanner, CategoryHighlight, CategoryPromoBanner, SeasonalSaleBanner } from '@/pages/ui';
import Category from '@/pages/Category';
import { FlexColBetween } from '@/shared/assets/styled/CommonStyled';
import styled from '@emotion/styled';
import ProductGrid from '@/shared/ui/ProductGrid';
import SearchProducts from '@/shared/ui/SearchProducts';
import { BREAKPOINTS } from '@/shared/assets/styled/breakpoints';
import SelectUser from '@/pages/SelectUser';
import MyPage from './Mypage';
import { useSelector } from 'react-redux';

const Wrapper = styled(FlexColBetween)`
  align-items: stretch;
  width: 100%;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 100vw;
  }
`;

const Layout = () => {
  const userInfo = useSelector((state) => state.userInfo);

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

        <Route path='/category/:id?' element={<Category />} />

        <Route path='/products' element={<SearchProducts />} />

        <Route path='/selectuser' element={<SelectUser />} />

        <Route path={`/${userInfo.username}`} element={<MyPage />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
