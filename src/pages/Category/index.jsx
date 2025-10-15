import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Arrow24pxSVG } from '@/shared/assets/SVGicons';
import { ToUpper } from '@/shared/lib';
import Filter from '@/pages/Category/ui/Filter';
import ProductsBox from '@/shared/ui/ProductsBox';
import * as S from '@/pages/Category/Category.styled';

const Category = () => {
  const productId = useSelector((state) => state.productId);
  const params = useParams();

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
        </S.Category>

        <S.FlexBox>
          <Filter />
          <ProductsBox />
        </S.FlexBox>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default Category;
