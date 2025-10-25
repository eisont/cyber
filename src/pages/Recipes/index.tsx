import { useMemo, useState } from 'react';
import * as S from '@/pages/Recipes/Recipes.styled';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import RecipesItem from '@/pages/Recipes/ui/RecipesItem';
import Modal from '@/pages/Recipes/ui/Modal';
import type { Recipe } from '@/shared/types/api/recipe';

const Recipes = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const [recipesResponse] = useFetch<{ recipes: Recipe[]; total: number; skip: number; limit: number }>({
    resource: 'recipes',
    query: { limit: 50 },
    enabled: true,
    initialData: { recipes: [], total: 0, skip: 0, limit: 0 },
  });

  const recipes = recipesResponse.recipes;

  const selectedRecipe = useMemo(
    () => recipes.find((recipe) => recipe.id === selectedId) ?? null,
    [recipes, selectedId]
  );

  return (
    <S.Wrapper>
      <S.ProductsBox>
        {recipes.map((recipe) => (
          <RecipesItem key={recipe.id} recipe={recipe} onSelect={setSelectedId} />
        ))}
        {selectedRecipe && <Modal data={selectedRecipe} onClose={() => setSelectedId(null)} />}
      </S.ProductsBox>
    </S.Wrapper>
  );
};

export default Recipes;
