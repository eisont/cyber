import { useAppSelector } from '@/redux/hooks';
import { useLocation, useParams } from 'react-router-dom';
import * as S from '@/pages/Explore/ui/Breadcrumb/Breadcrumb.styled';
import { Arrow24pxSVG } from '@/shared/assets/SVGicons';
import { ToUpper } from '@/shared/lib';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import { DumText } from '@/shared/assets/styled/skeleton';

type ProductTitleResponse = {
  title: string;
};

const Breadcrumb = () => {
  const params = useParams<{ id?: string }>();
  const location = useLocation();
  const selectedCategory = useAppSelector((state) => state.productId);

  const productIdFromParams = params.id ?? '';
  const isProductDetail = Boolean(productIdFromParams);
  const isRecipesPage = location.pathname === '/recipes';

  const [productTitleResponse, isLoading] = useFetch<ProductTitleResponse>({
    resource: 'products',
    endPoint: productIdFromParams ? [productIdFromParams] : [],
    query: { select: 'title' },
    enabled: isProductDetail,
    initialData: { title: '' },
  });

  const productTitle = productTitleResponse.title;
  const categoryLabel = ToUpper(selectedCategory);

  return (
    <S.Wrapper>
      <S.Menu to="/">Home</S.Menu>
      <S.Arrow>{Arrow24pxSVG({ size: '24', color: '#a4a4a4' })}</S.Arrow>
      {isRecipesPage ? (
        <S.ProductItemMenu to="/recipes" $isActive>
          Recipes
        </S.ProductItemMenu>
      ) : (
        <>
          <S.Menu to="/Explore">Products</S.Menu>
          <S.Arrow>{Arrow24pxSVG({ size: '24', color: '#a4a4a4' })}</S.Arrow>
          <S.ProductAllMenu to="/Explore" $isActive={!isProductDetail}>
            {categoryLabel || 'All'}
          </S.ProductAllMenu>

          {isProductDetail && (
            <>
              <S.Arrow>{Arrow24pxSVG({ size: '24', color: '#a4a4a4' })}</S.Arrow>
              {isLoading ? (
                <DumText width="160px" height="10px" />
              ) : (
                <S.ProductItemMenu to={`/Explore/${productIdFromParams}`} $isActive>
                  {productTitle}
                </S.ProductItemMenu>
              )}
            </>
          )}
        </>
      )}
    </S.Wrapper>
  );
};

export default Breadcrumb;
