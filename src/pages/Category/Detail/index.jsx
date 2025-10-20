import { lazy, Suspense } from 'react';
import SkeletonProductItemDetail from '@/pages/Category/Detail/SkeletonProductItemDetail';
import styled from '@emotion/styled';
const ProductItemDetail = lazy(() => import('@/pages/Category/Detail/ui/ProductItemDetail'));
const ProductGrid = lazy(() => import('@/shared/ui/ProductGrid'));

const SideItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryDetail = () => {
  return (
    <Suspense fallback={<SkeletonProductItemDetail />}>
      <SideItem>
        <ProductItemDetail />
        <ProductGrid />
      </SideItem>
    </Suspense>
  );
};

export default CategoryDetail;
