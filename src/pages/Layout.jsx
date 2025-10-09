// 무한스크롤, Ref 구현, 찜한 목록,
// 모바일 반응형 구현 (상품 디테일, 카테고리>필터, header_모달 )

import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import styled from '@emotion/styled';
import { BREAKPOINTS } from '@/shared/assets/styled/breakpoints';
import { Header, Footer } from '@/shared/layout';
const Category = lazy(() => import('@/pages/Category'));
const SearchProducts = lazy(() => import('@/pages/SearchProducts'));
const SelectUser = lazy(() => import('@/pages/SelectUser'));
const MyPage = lazy(() => import('@/pages/MyPage'));
import ProductGrid from '@/shared/ui/ProductGrid';
import { HeroBanner, CategoryHighlight, CategoryPromoBanner, SeasonalSaleBanner } from '@/pages/ui';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
      <Suspense fallback={<>loading...</>}>
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
      </Suspense>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
