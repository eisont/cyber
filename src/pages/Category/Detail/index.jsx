import { lazy, Suspense } from 'react';
import * as S from '@/pages/Category/Category.styled';
import SkeleptonProductItemDetail from '@/pages/Category/Detail/SkeleptonProductItemDetail';
const ProductItemDetail = lazy(() => import('@/pages/Category/Detail/ui/ProductItemDetail'));
const ProductGrid = lazy(() => import('@/shared/ui/ProductGrid'));

const CategoryDetail = () => {
  return (
    <Suspense fallback={<SkeleptonProductItemDetail />}>
      <S.SideItem>
        <ProductItemDetail />
        <ProductGrid />
      </S.SideItem>
    </Suspense>
  );
};

export default CategoryDetail;
