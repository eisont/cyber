import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import { memo, useState } from 'react';
import * as S from './RecipesItem.styled';
import { CloseSVG } from '@/shared/assets/SVGicons';

const RecipesItem = memo((pr) => {
  const { ref } = useIntersectionObserver();
  const [toggle, setToggle] = useState(true);

  console.log('RecipesItem', pr);
  return (
    <>
      <S.Wrapper onClick={() => setToggle(false)}>
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

      {!toggle && (
        <S.Modal>
          <S.Icon onClick={() => setToggle(true)}>{CloseSVG({ size: '50px', color: '#000' })}</S.Icon>

          <S.FlexBox>
            <S.ModalImg src={pr?.image} alt='image' />
            <S.ColFlexBox>
              <S.MText style={{ fontSize: '35px' }}>요리 순서</S.MText>
              {pr.instructions.map((el, i) => (
                <S.MText>{`${i + 1}. ${el}`}</S.MText>
              ))}
            </S.ColFlexBox>
          </S.FlexBox>

          <S.MText style={{ fontSize: '35px' }}>재료 리스트</S.MText>
          <S.FlexBox>
            {pr.ingredients.map((el) => (
              <S.MText style={{ fontSize: '16px' }}>{`* ${el}`}</S.MText>
            ))}
          </S.FlexBox>
        </S.Modal>
      )}
    </>
  );
});

export default RecipesItem;
