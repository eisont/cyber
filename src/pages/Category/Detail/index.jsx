import { lazy, Suspense } from 'react';
import * as S from '@/pages/Category/Category.styled';
import SkeleptonProductItemDetail from '@/pages/Category/Detail/ui/ProductItemDetail/SkeleptonProductItemDetail';
const ProductItemDetail = lazy(() => import('@/pages/Category/ui/ProductItemDetail'));
const ProductGrid = lazy(() => import('@/shared/ui/ProductGrid'));
import Breadcrumb from '@/pages/Category/ui/Breadcrumb';

const CategoryDetail = () => {
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <Breadcrumb />
        <Suspense fallback={<SkeleptonProductItemDetail />}>
          <S.SideItem>
            <ProductItemDetail />
            <ProductGrid />
          </S.SideItem>
        </Suspense>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default CategoryDetail;
