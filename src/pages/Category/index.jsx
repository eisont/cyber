import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { Arrow24pxSVG } from '@/shared/assets/SVGicons';
import { ToUpper } from '@/shared/lib';
import { Filter, ProductItemDetail } from '@/pages/Category/ui';
import ProductGrid from '@/shared/ui/ProductGrid';
import ProductsBox from '@/shared/ui/ProductsBox';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import * as S from './Category.styled';

const Category = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const params = useParams();

  const [ItemTitleData] = useFetch({ resource: 'products', endPoint: params.id, params: 'title', enabled: true });

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
              <S.ProductItemMenu params={params.id}>{ItemTitleData.title}</S.ProductItemMenu>
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
            <S.SideItem>
              <ProductItemDetail />
              <ProductGrid />
            </S.SideItem>
          )}
        </S.FlexBox>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default Category;
