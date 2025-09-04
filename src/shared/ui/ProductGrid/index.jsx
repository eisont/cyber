import { useDispatch, useSelector } from 'react-redux';
import { useCategroy, useFilterOptions } from '@/shared/hooks/useApiHooks';
import { productIdSlice } from '@/redux/redux';
import ProductItem from '@/shared/ui/ProductItem';
import * as S from './ProductGrid.styled';

const ProductGrid = () => {
  const CategoryData = useCategroy()[0][0];

  const productId = useSelector((state) => state.productId);
  const ProductListData = useFilterOptions(`https://dummyjson.com/products/category/${productId}`)[0].products;

  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.MainBox>
          <S.CategoryBox>
            {CategoryData.map((el) => (
              <S.Category key={el.slug} id={el.slug} productId={productId} onClick={(e) => dispatch(productIdSlice.actions.getProductId(e.target.id))}>
                {el.name}
              </S.Category>
            ))}
          </S.CategoryBox>

          <S.ProductsItemsBox>
            {ProductListData?.map((el) => (
              <ProductItem key={el.id} product={el} />
            ))}
          </S.ProductsItemsBox>
        </S.MainBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default ProductGrid;
