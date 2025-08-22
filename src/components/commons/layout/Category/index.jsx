import { ArrowSVG } from '../../../../shared/assets/SVGicons/24pxIcon';
import Fiter from '../Fiter';
import ProductsBox from '../ProductsBox';
import * as S from './Category.styled';

const Category = (pr) => {
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.Category>
          <S.CategoryMenu to='/'>Home</S.CategoryMenu>
          <S.Arrow>{ArrowSVG('#a4a4a4')}</S.Arrow>
          <S.CategoryMenu>Catalog</S.CategoryMenu>
          <S.Arrow>{ArrowSVG('#a4a4a4')}</S.Arrow>
          <S.CategoryMenu style={{ color: '#000' }}>{pr.productId}</S.CategoryMenu>
        </S.Category>

        <S.FlexBox>
          <Fiter data={pr.data} setProductId={pr.setProductId} productId={pr.productId} />
          <ProductsBox productListData={pr.productListData} />
        </S.FlexBox>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default Category;
