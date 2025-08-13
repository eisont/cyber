import { CategoryCards } from '../../../../commons/monks/categories/CategoryCards.monk';
import CategoryItem from '../../components/CategoryItem';
import * as S from './CategoryHighlight.styled';

const CategoryHighlight = () => {
  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.MainBox>
          <S.Top>Browse By Category</S.Top>
          <S.Categories>
            {CategoryCards.map((el) => (
              <CategoryItem key={el.id} CategoryCardData={el} />
            ))}
          </S.Categories>
        </S.MainBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default CategoryHighlight;
