import { useDispatch, useSelector } from 'react-redux';
import { productIdSlice } from '@/redux';
import ProductItem from '@/shared/ui/ProductItem';
import * as S from './ProductGrid.styled';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import { ToUpper } from '@/shared/lib';

const ProductGrid = () => {
  const [CategoryListData] = useFetch({ query: 'https://dummyjson.com/products/category-list' });

  const productId = useSelector((state) => state.productId);
  const [data, ProductListisLoading] = useFetch({ query: 'https://dummyjson.com/products/category/', id: productId });
  const ProductListData = data.products;

  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.MainBox>
          <S.CategoryBox>
            {CategoryListData?.map((el) => (
              <S.Category key={Number(new Date()) + el} id={el} productId={productId} onClick={() => dispatch(productIdSlice.actions.getProductId(el))}>
                {ToUpper(el)}
              </S.Category>
            ))}
          </S.CategoryBox>

          <S.ProductsItemsBox>
            {ProductListData?.map((el) => (
              <ProductItem key={el.id} itemData={el} isLoading={ProductListisLoading} />
            ))}
          </S.ProductsItemsBox>
        </S.MainBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default ProductGrid;
