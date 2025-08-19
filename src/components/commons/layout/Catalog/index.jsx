import Fiter from '../Fiter';
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

        <Fiter />
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default Catalog;
