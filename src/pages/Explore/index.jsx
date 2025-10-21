import { Outlet, useLocation, useParams } from 'react-router-dom';
import Filter from '@/pages/Explore/ui/Filter';
import ProductsBox from '@/pages/Explore/ui/ProductsBox';
import Breadcrumb from '@/pages/Explore/ui/Breadcrumb';
import * as S from '@/pages/Explore/Explore.styled';
import Recipes from '@/pages/Recipes';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import { useSelector } from 'react-redux';

const Explore = () => {
  const params = useParams();
  const location = useLocation();
  const productId = useSelector((state) => state.productId);

  const [{ products: ProductListData }] = useFetch({ resource: 'products', path: 'category', endPoint: [productId || 'beauty'], query: { select: 'id' }, enabled: true });

  const [{ recipes: RecipesData }] = useFetch({ resource: 'recipes', query: { limit: 50 }, enabled: true });

  return (
    <S.Wrapper>
      <S.MainBox>
        <Breadcrumb />
        {!params.id ? (
          <S.FlexBox>
            <Filter />
            <S.FlexColBox>
              <S.ProductsCount>
                Selected Products: <S.Count>{location.pathname === '/recipes' ? RecipesData?.length || 0 : ProductListData?.length || 0}</S.Count>
              </S.ProductsCount>

              {location.pathname !== '/recipes' ? <ProductsBox /> : <Recipes />}
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
