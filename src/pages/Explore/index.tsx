import { Outlet, useLocation, useParams } from 'react-router-dom';
import Filter from '@/pages/Explore/ui/Filter';
import ProductsBox from '@/pages/Explore/ui/ProductsBox';
import Breadcrumb from '@/pages/Explore/ui/Breadcrumb';
import * as S from '@/pages/Explore/Explore.styled';
import Recipes from '@/pages/Recipes';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import { useAppSelector } from '@/redux/hooks';
import type { ProductsResponse } from '@/shared/types/api/product';
import type { Recipe } from '@/shared/types/api/recipe';

type RecipesResponse = {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
};

const Explore = () => {
  const params = useParams();
  const location = useLocation();
  const productId = useAppSelector((state) => state.productId);

  const [productResponse] = useFetch<ProductsResponse>({
    resource: 'products',
    path: 'category',
    endPoint: [productId || 'beauty'],
    query: { select: 'id' },
    enabled: true,
    initialData: { products: [], total: 0, skip: 0, limit: 0 },
  });

  const [recipesResponse] = useFetch<RecipesResponse>({
    resource: 'recipes',
    query: { limit: 50 },
    enabled: true,
    initialData: { recipes: [], total: 0, skip: 0, limit: 0 },
  });

  const productCount = productResponse.products.length;
  const recipesCount = recipesResponse.recipes.length;
  const isRecipesPage = location.pathname === '/recipes';

  return (
    <S.Wrapper>
      <S.MainBox>
        <Breadcrumb />
        {!params.id ? (
          <S.FlexBox>
            <Filter />
            <S.FlexColBox>
              <S.ProductsCount>
                Selected Products: <S.Count>{isRecipesPage ? recipesCount : productCount}</S.Count>
              </S.ProductsCount>

              {!isRecipesPage ? <ProductsBox /> : <Recipes />}
            </S.FlexColBox>
          </S.FlexBox>
        ) : (
          <Outlet />
        )}
      </S.MainBox>
    </S.Wrapper>
  );
};

export default Explore;
