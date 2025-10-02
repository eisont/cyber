import { useDispatch, useSelector } from 'react-redux';
import { productIdSlice } from '@/redux';
import ProductItem from '@/shared/ui/ProductItem';
import * as S from './ProductGrid.styled';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import { ToUpper } from '@/shared/lib';

const ProductGrid = () => {
  const productId = useSelector((state) => state.productId);

  const [CategoryListData] = useFetch({ resource: 'products', endPoint: 'category-list', suffix: '', enabled: true });
  const [data, ProductListisLoading] = useFetch({ resource: 'products', endPoint: 'category', suffix: '/', params: productId, enabled: true });
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
              <ProductItem key={el.id} ItemData={el} isLoading={ProductListisLoading} />
            ))}
          </S.ProductsItemsBox>
        </S.MainBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default ProductGrid;
