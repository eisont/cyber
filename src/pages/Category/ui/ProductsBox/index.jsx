import { useSelector } from 'react-redux';
import * as S from '@/pages/Category/ui/ProductsBox/ProductsBox.styled';
import ProductItem from '@/shared/ui/ProductItem';
import { useFetch } from '@/shared/hooks/useFetchHooks';

const ProductsBox = () => {
  const productId = useSelector((state) => state.productId);

  const [{ products: ProductListData }, isLoading] = useFetch({ resource: 'products', path: 'category', endPoint: [productId], enabled: true });

  return (
    <S.Wrapper>
      <S.ProductsBox>
        {isLoading ? (
          <>
            {Array(4)
              .fill('')
              .map((_, i) => (
                <ProductItem key={i} isLoading />
              ))}
          </>
        ) : (
          <>
            {ProductListData?.map((el) => (
              <ProductItem key={el.id} {...el} />
            ))}
          </>
        )}
      </S.ProductsBox>
    </S.Wrapper>
  );
};

export default ProductsBox;
