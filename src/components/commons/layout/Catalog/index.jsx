import Fiter from '../Fiter';
import Products from '../Products';
import * as S from './Catalog.styled';

const Catalog = () => {
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.Category>
          <S.CategoryMenu>Home</S.CategoryMenu>
          <S.Arrow src='../../../../../public/filter/Arrow.png' />
          <S.CategoryMenu>Catalog</S.CategoryMenu>
          <S.Arrow src='../../../../../public/filter/Arrow.png' />
          <S.CategoryMenu>Smartphones</S.CategoryMenu>
        </S.Category>

        <S.FlexBox>
          <Fiter />
          <Products />
        </S.FlexBox>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default Catalog;
