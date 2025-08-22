import * as S from './CategoryItem.styled';

const CategoryItem = (pr) => {
  return (
    <S.Wrapper to='/category'>
      <S.CategoryImg>{pr.img}</S.CategoryImg>
      <S.Title>{pr.title}</S.Title>
    </S.Wrapper>
  );
};

export default CategoryItem;
