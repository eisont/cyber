import { Outlet, useLocation, useParams } from 'react-router-dom';
import Filter from '@/pages/Category/ui/Filter';
import ProductsBox from '@/pages/Category/ui/ProductsBox';
import Breadcrumb from '@/pages/Category/ui/Breadcrumb';
import * as S from '@/pages/Category/Category.styled';
import Recipes from '@/pages/Recipes';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import { useSelector } from 'react-redux';

const Category = () => {
  const params = useParams();
  const location = useLocation();
  const productId = useSelector((state) => state.productId);

  const [Pdata] = useFetch({ resource: 'products', endPoint: 'category/', suffix: productId || 'beauty', params: '?&select=id', enabled: true });
  const ProductListData = Pdata.products;

  const [Rdata] = useFetch({ resource: 'recipes', endPoint: '?limit=50', suffix: '&select=id', enabled: true });
  const RecipesData = Rdata.recipes;

  return (
    <S.Wrapper>
      <S.MainWrapper>
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
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default Category;
