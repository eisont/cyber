import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import { memo } from 'react';
import * as S from '@/pages/Category/ui/RecipesItem/RecipesItem.styled';

const RecipesItem = memo((pr) => {
  const { ref } = useIntersectionObserver();

  return (
    <S.Wrapper onClick={() => pr.setSelectId(pr.id)}>
      <S.MainBox>
        <S.Img ref={ref} data-src={pr?.image} src={pr?.image} alt='image' />
        <S.RBox>
          <S.Name>{pr?.name}</S.Name>
          <S.Text>⭐️{pr.rating}</S.Text>
          <S.Text>조리시간: {pr.cookTimeMinutes}분</S.Text>
          <S.Text>준비시간: {pr.prepTimeMinutes}분</S.Text>
          <S.Text>{pr.servings}인분</S.Text>
          <S.Text>나라: {pr.cuisine}</S.Text>
          <S.Text>난이도: {pr.difficulty}</S.Text>
          <S.Text>{pr.caloriesPerServing}cal</S.Text>
        </S.RBox>
      </S.MainBox>
    </S.Wrapper>
  );
});

export default RecipesItem;
