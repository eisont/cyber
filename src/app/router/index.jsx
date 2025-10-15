import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from '@/pages/Layout';
const Category = lazy(() => import('@/pages/Category'));
const SearchProducts = lazy(() => import('@/pages/SearchProducts'));
const SelectUser = lazy(() => import('@/pages/SelectUser'));
const MyPage = lazy(() => import('@/pages/MyPage'));
import ProductGrid from '@/shared/ui/ProductGrid';
import { HeroBanner, CategoryHighlight, CategoryPromoBanner, SeasonalSaleBanner } from '@/pages/ui';
const CategoryDetail = lazy(() => import('@/pages/Category/Detail'));

const AppRouter = () => {
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <Layout>
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

          <Route path='/category' element={<Category />}>
            <Route path=':id' element={<CategoryDetail />} />
          </Route>
          <Route path='/products' element={<SearchProducts />} />
          <Route path='/selectuser' element={<SelectUser />} />
          <Route path={`/${userInfo.username}`} element={<MyPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default AppRouter;
