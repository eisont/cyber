import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as S from '@/pages/Category/Category.styled';
import { Arrow24pxSVG } from '@/shared/assets/SVGicons';
import { ToUpper } from '@/shared/lib';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import SkeleptonProductItemDetail from '@/shared/assets/skelepton/ProductItemDetail';
const ProductItemDetail = lazy(() => import('@/pages/Category/ui/ProductItemDetail'));
const ProductGrid = lazy(() => import('@/shared/ui/ProductGrid'));
import { DumText } from '@/shared/assets/styled/skelepton';

const CategoryDetail = () => {
  const params = useParams();
  const productId = useSelector((state) => state.productId);

  const [ItemTitleData, isLoading] = useFetch({ resource: 'products', endPoint: params.id, params: 'title', enabled: true });

  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.Category>
          <S.CategoryMenu to='/'>Home</S.CategoryMenu>
          <S.Arrow>{Arrow24pxSVG({ size: '24', color: '#a4a4a4' })}</S.Arrow>
          <S.CategoryMenu to='/category'>Category</S.CategoryMenu>
          <S.Arrow>{Arrow24pxSVG({ size: '24', color: '#a4a4a4' })}</S.Arrow>
          <S.ProductAllMenu to='/category' params={params.id}>
            {ToUpper(productId)}
          </S.ProductAllMenu>

          <S.Arrow>{Arrow24pxSVG({ size: '24', color: '#a4a4a4' })}</S.Arrow>
          {isLoading ? <DumText width='160px' height='10px' /> : <S.ProductItemMenu params={params.id}>{ItemTitleData.title}</S.ProductItemMenu>}
        </S.Category>
        <Suspense
          fallback={
            <S.SideItem>
              <SkeleptonProductItemDetail />
            </S.SideItem>
          }
        >
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
