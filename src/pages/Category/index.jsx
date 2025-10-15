import Filter from '@/pages/Category/ui/Filter';
import ProductsBox from '@/pages/Category/ui/ProductsBox';
import Breadcrumb from '@/pages/Category/ui/Breadcrumb';
import * as S from '@/pages/Category/Category.styled';

const Category = () => {
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <Breadcrumb />
        <S.FlexBox>
          <Filter />
          <ProductsBox />
        </S.FlexBox>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default Category;
