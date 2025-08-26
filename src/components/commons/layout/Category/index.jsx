import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { ToUpper } from '../../../../shared/lib';
import Fiter from '../Fiter';
import ProductsBox from '../ProductsBox';
import ProductItemDetail from '../ProductItemDetail';
import { ArrowSVG } from '../../../../shared/assets/SVGicons/24pxIcon';
import { useFilterOptions } from '../../../../commons/api/filterApi';
import ProductGrid from '../ProductGrid';
import * as S from './Category.styled';

const Category = (pr) => {
  const params = useParams();
  const data = useFilterOptions(`https://dummyjson.com/products/${params.id}`);

  const location = useLocation();
  const pathname = location.pathname;

  const productId = useSelector((state) => state.productId);

  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.Category>
          <S.CategoryMenu to='/'>Home</S.CategoryMenu>
          <S.Arrow>{ArrowSVG('#a4a4a4')}</S.Arrow>
          <S.CategoryMenu to='/category'>Category</S.CategoryMenu>
          <S.Arrow>{ArrowSVG('#a4a4a4')}</S.Arrow>
          <S.ProductAllMenu to='/category' params={params.id}>
            {!data[0].Category && ToUpper(productId)}
          </S.ProductAllMenu>

          {pathname === `/category/${params.id}` && (
            <>
              <S.Arrow>{ArrowSVG('#a4a4a4')}</S.Arrow>
              <S.ProductItemMenu params={params.id}>{data[0].title}</S.ProductItemMenu>
            </>
          )}
        </S.Category>

        <S.FlexBox>
          {pathname === '/category' && (
            <>
              <Fiter />
              <ProductsBox ProductListData={pr.ProductListData} />
            </>
          )}

          {pathname === `/category/${params.id}` && (
            <S.SideItem>
              <ProductItemDetail data={data[0]} />
              <ProductGrid ProductListData={pr.ProductListData} />
            </S.SideItem>
          )}
        </S.FlexBox>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default Category;
