import { useAppSelector } from '@/redux/hooks';
import * as S from '@/pages/Explore/ui/ProductsBox/ProductsBox.styled';
import ProductItem from '@/shared/ui/ProductItem';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import type { ProductsResponse } from '@/shared/types/api/product';

const ProductsBox = () => {
  const productId = useAppSelector((state) => state.productId);

  const [productResponse, isLoading] = useFetch<ProductsResponse>({
    resource: 'products',
    path: 'category',
    endPoint: [productId || 'beauty'],
    enabled: true,
    initialData: { products: [], total: 0, skip: 0, limit: 0 },
  });

  const products = productResponse.products;

  return (
    <S.Wrapper>
      <S.ProductsBox>
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => <ProductItem key={index} isLoading />)
          : products.map((product) => <ProductItem key={product.id} {...product} />)}
      </S.ProductsBox>
    </S.Wrapper>
  );
};

export default ProductsBox;
