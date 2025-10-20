import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import * as S from '@/pages/Category/Category.styled';
import { Arrow24pxSVG } from '@/shared/assets/SVGicons';
import { ToUpper } from '@/shared/lib';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import { DumText } from '@/shared/assets/styled/skeleton';

const Breadcrumb = () => {
  const params = useParams();
  const location = useLocation();
  const productId = useSelector((state) => state.productId);

  const [ItemTitleData, isLoading] = useFetch({ resource: 'products', endPoint: [params.id], query: { select: 'title' }, enabled: true });

  return (
    <S.Category>
      <S.CategoryMenu to='/'>Home</S.CategoryMenu>
      <S.Arrow>{Arrow24pxSVG({ size: '24', color: '#a4a4a4' })}</S.Arrow>
      {location.pathname === '/recipes' ? (
        <S.ProductItemMenu params={'true'}>Recipes</S.ProductItemMenu>
      ) : (
        <>
          <S.CategoryMenu to='/category'>Category</S.CategoryMenu>
          <S.Arrow>{Arrow24pxSVG({ size: '24', color: '#a4a4a4' })}</S.Arrow>
          <S.ProductAllMenu to='/category' params={params.id}>
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
    </S.Category>
  );
};

export default Breadcrumb;
