import { lazy, Suspense } from 'react';
import * as S from '@/pages/Category/Category.styled';
import SkeletonProductItemDetail from '@/pages/Category/Detail/SkeletonProductItemDetail';
const ProductItemDetail = lazy(() => import('@/pages/Category/Detail/ui/ProductItemDetail'));
const ProductGrid = lazy(() => import('@/shared/ui/ProductGrid'));

const CategoryDetail = () => {
  return (
    <Suspense fallback={<SkeletonProductItemDetail />}>
      <S.SideItem>
        <ProductItemDetail />
        <ProductGrid />
      </S.SideItem>
    </Suspense>
  );
};

export default CategoryDetail;
