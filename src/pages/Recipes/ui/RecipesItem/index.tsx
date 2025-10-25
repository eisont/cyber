import { memo, useCallback } from 'react';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import * as S from '@/pages/Recipes/ui/RecipesItem/RecipesItem.styled';
import type { Recipe } from '@/shared/types/api/recipe';

type RecipesItemProps = {
  recipe: Recipe;
  onSelect: (recipeId: number) => void;
};

const RecipesItemComponent = ({ recipe, onSelect }: RecipesItemProps) => {
  const { ref } = useIntersectionObserver<HTMLImageElement>();

  const handleSelect = useCallback(() => {
    onSelect(recipe.id);
  }, [onSelect, recipe.id]);

  return (
    <S.Wrapper onClick={handleSelect}>
      <S.MainBox>
        <S.Img
          ref={ref}
          data-src={recipe.image}
          src={recipe.image}
          alt={recipe.name}
          loading="lazy"
        />
        <S.RBox>
          <S.Name>{recipe.name}</S.Name>
          <S.Text>⭐️{recipe.rating}</S.Text>
          <S.Text>조리시간: {recipe.cookTimeMinutes}분</S.Text>
          <S.Text>준비시간: {recipe.prepTimeMinutes}분</S.Text>
          <S.Text>{recipe.servings}인분</S.Text>
          <S.Text>나라: {recipe.cuisine}</S.Text>
          <S.Text>난이도: {recipe.difficulty}</S.Text>
          <S.Text>{recipe.caloriesPerServing}cal</S.Text>
        </S.RBox>
      </S.MainBox>
    </S.Wrapper>
  );
};

const RecipesItem = memo(RecipesItemComponent);

export default RecipesItem;
