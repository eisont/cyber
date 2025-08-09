import * as S from './CategoryItem.styled';

const CategoryItem = (pr) => {
  return (
    <S.Wrapper>
      <S.CategoryImg src={`../../../../../public/category/${pr.CategoryCardData.img}`} />
      <S.Title>{pr.CategoryCardData.title}</S.Title>
    </S.Wrapper>
  );
};

export default CategoryItem;
