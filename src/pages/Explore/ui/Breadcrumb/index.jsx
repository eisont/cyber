import { useAppSelector } from '@/redux/hooks';
import { useLocation, useParams } from 'react-router-dom';
import * as S from '@/pages/Explore/ui/Breadcrumb/Breadcrumb.styled';
import { Arrow24pxSVG } from '@/shared/assets/SVGicons';
import { ToUpper } from '@/shared/lib';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import { DumText } from '@/shared/assets/styled/skeleton';

const Breadcrumb = () => {
  const params = useParams();
  const location = useLocation();
  const productId = useAppSelector((state) => state.productId);

  const [ItemTitleData, isLoading] = useFetch({ resource: 'products', endPoint: [params.id], query: { select: 'title' }, enabled: true });

  return (
    <S.Wrapper>
      <S.Menu to='/'>Home</S.Menu>
      <S.Arrow>{Arrow24pxSVG({ size: '24', color: '#a4a4a4' })}</S.Arrow>
      {location.pathname === '/recipes' ? (
        <S.ProductItemMenu params={'true'}>Recipes</S.ProductItemMenu>
      ) : (
        <>
          <S.Menu to='/Explore'>Products</S.Menu>
          <S.Arrow>{Arrow24pxSVG({ size: '24', color: '#a4a4a4' })}</S.Arrow>
          <S.ProductAllMenu to='/Explore' params={params.id}>
            {ToUpper(productId)}
          </S.ProductAllMenu>

          {params.id && (
            <>
              <S.Arrow>{Arrow24pxSVG({ size: '24', color: '#a4a4a4' })}</S.Arrow>
              {isLoading ? <DumText width='160px' height='10px' /> : <S.ProductItemMenu params={params.id}>{ItemTitleData.title}</S.ProductItemMenu>}
            </>
          )}
        </>
      )}
    </S.Wrapper>
  );
};

export default Breadcrumb;
