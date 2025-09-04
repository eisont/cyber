import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { ArrowSVG } from '@/shared/assets/SVGicons/24pxIcon';
import { ToUpper } from '@/shared/lib';
import Filter from '@/shared/ui/Filter';
import * as S from './Category.styled';
import ProductGrid from '@/shared/ui/ProductGrid';
import ProductItemDetail from '@/shared/ui/ProductItemDetail';
import ProductsBox from '@/shared/ui/ProductsBox';
import useFetch from '@/shared/hooks/useFetch';

const Category = () => {
  const params = useParams();
  const Itemdata = useFetch({ query: 'https://dummyjson.com/products/', id: params.id });

  const location = useLocation();
  const pathname = location.pathname;

  const productId = useSelector((state) => state.productId);

  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.Category>
          <S.CategoryMenu to='/'>Home</S.CategoryMenu>
          <S.Arrow>{ArrowSVG({ color: '#a4a4a4' })}</S.Arrow>
          <S.CategoryMenu to='/category'>Category</S.CategoryMenu>
          <S.Arrow>{ArrowSVG({ color: '#a4a4a4' })}</S.Arrow>
          <S.ProductAllMenu to='/category' params={params.id}>
            {!Itemdata.Category && ToUpper(productId)}
          </S.ProductAllMenu>

          {pathname === `/category/${params.id}` && (
            <>
              <S.Arrow>{ArrowSVG('#a4a4a4')}</S.Arrow>
              <S.ProductItemMenu params={params.id}>{Itemdata.title}</S.ProductItemMenu>
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
              <ProductItemDetail data={Itemdata} />
              <ProductGrid />
            </S.SideItem>
          )}
        </S.FlexBox>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default Category;
