import { useState } from 'react';
import * as S from '@/pages/Recipes/Recipes.styled';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import RecipesItem from '@/pages/Recipes/ui/RecipesItem';
import Modal from '@/pages/Recipes/ui/Modal';

const Recipes = () => {
  const [selectId, setSelectId] = useState();

  const [{ recipes: RecipesData }] = useFetch({ resource: 'recipes', query: { limit: 50 }, enabled: true });

  return (
    <S.Wrapper>
      <S.ProductsBox>
        {RecipesData?.map((el) => (
          <RecipesItem key={el.id} {...el} setSelectId={setSelectId} />
        ))}
        {selectId && <Modal data={RecipesData.find((el) => el.id === selectId)} onClose={() => setSelectId(null)} />}
      </S.ProductsBox>
    </S.Wrapper>
  );
};

export default Recipes;
