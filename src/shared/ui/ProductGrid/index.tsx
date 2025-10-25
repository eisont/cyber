import { productIdSlice } from '@/redux';
import ProductItem from '@/shared/ui/ProductItem';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import { ToUpper } from '@/shared/lib';
import * as S from '@/shared/ui/ProductGrid/ProductGrid.styled';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import type { Product } from '@/shared/types/api/product';

type ProductsResponse = {
  products: Product[];
  total?: number;
  skip?: number;
  limit?: number;
};

const ProductGrid = () => {
  const productId = useAppSelector((state) => state.productId);
  const dispatch = useAppDispatch();

  const [categoryList, categoriesLoading] = useFetch<string[]>({
    resource: 'products',
    path: 'category-list',
    enabled: true,
    initialData: [],
  });

  const [productResponse, productsLoading] = useFetch<ProductsResponse>({
    resource: 'products',
    path: 'category',
    endPoint: [productId || 'beauty'],
    enabled: true,
    initialData: { products: [] },
  });

  const products = productResponse.products;

  const handleCategorySelect = (category: string) => {
    dispatch(productIdSlice.actions.getProductId(category));
  };

  return (
    <S.Wrapper>
      <S.TotalBox>
        {categoriesLoading ? (
          Array.from({ length: 4 }).map((_, index) => <ProductItem key={index} isLoading />)
        ) : (
          <S.MainBox>
            <S.CategoryBox>
              {categoryList.map((category) => (
                <S.Explore
                  key={category}
                  id={category}
                  $isActive={productId === category}
                  onClick={() => handleCategorySelect(category)}
                >
                  {ToUpper(category)}
                </S.Explore>
              ))}
            </S.CategoryBox>

            <S.ProductsItemsBox>
              {productsLoading
                ? Array.from({ length: 8 }).map((_, index) => <ProductItem key={index} isLoading />)
                : products.map((product) => <ProductItem key={product.id} {...product} />)}
            </S.ProductsItemsBox>
          </S.MainBox>
        )}
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default ProductGrid;
