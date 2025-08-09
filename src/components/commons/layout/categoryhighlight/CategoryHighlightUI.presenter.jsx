import CategoryItem from '../../components/categoryitem/CategoryItem';
import * as S from './CategoryHighlightUI.styled';

const CategoryHighlightUI = (pr) => {
  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.MainBox>
          <S.Top>Browse By Category</S.Top>
          <S.Categories>
            {pr.CategoryCard.map((el) => (
              <CategoryItem CategoryCardData={el} />
            ))}
          </S.Categories>
        </S.MainBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default CategoryHighlightUI;
