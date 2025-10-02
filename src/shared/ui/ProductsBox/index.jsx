import { useSelector } from 'react-redux';
import ProductItem from '@/shared/ui/ProductItem';
import * as S from './ProductsBox.styled';
import { useFetch } from '@/shared/hooks/useFetchHooks';

const ProductsBox = () => {
  const productId = useSelector((state) => state.productId);
  const [data] = useFetch({ resource: 'products', endPoint: 'category', suffix: '/', params: productId, enabled: true });
  const ProductListData = data.products;

  return (
    <S.Wrapper>
      <S.FlexBox>
        <S.ProductsCount>
          Selected Products: <S.Count>{ProductListData ? ProductListData.length : 0}</S.Count>
        </S.ProductsCount>
      </S.FlexBox>

      <S.ProductsBox>
        {ProductListData && (
          <>
            {ProductListData.map((el) => (
              <ProductItem key={el.id} ItemData={el} />
            ))}
          </>
        )}
      </S.ProductsBox>
    </S.Wrapper>
  );
};

export default ProductsBox;
