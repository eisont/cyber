import { lazy, Suspense } from 'react';
import * as S from './Category.styled';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { Arrow24pxSVG } from '@/shared/assets/SVGicons';
import { ToUpper } from '@/shared/lib';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import { DumText } from '@/shared/assets/styled/skelepton';
import Filter from '@/pages/Category/ui/Filter';
import ProductsBox from '@/shared/ui/ProductsBox';
import SkeleptonProductItemDetail from '@/shared/assets/skelepton/ProductItemDetail';
const ProductItemDetail = lazy(() => import('@/pages/Category/ui/ProductItemDetail'));
const ProductGrid = lazy(() => import('@/shared/ui/ProductGrid'));

const Category = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const params = useParams();

  const [ItemTitleData, isLoading] = useFetch({ resource: 'products', endPoint: params.id, params: 'title', enabled: true });

  const productId = useSelector((state) => state.productId);

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

          {pathname === `/category/${params.id}` && (
            <>
              <S.Arrow>{Arrow24pxSVG({ size: '24', color: '#a4a4a4' })}</S.Arrow>
              {isLoading ? <DumText width='160px' height='10px' /> : <S.ProductItemMenu params={params.id}>{ItemTitleData.title}</S.ProductItemMenu>}
            </>
          )}
        </S.Category>

        <S.FlexBox>
          {pathname === '/category' && (
            <>
              <Filter />
              <ProductsBox />
            </>
          )}

          {pathname === `/category/${params.id}` && (
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
          )}
        </S.FlexBox>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default Category;
