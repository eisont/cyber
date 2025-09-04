import { useDispatch, useSelector } from 'react-redux';
import { productIdSlice } from '@/redux/redux';
import ProductItem from '@/shared/ui/ProductItem';
import * as S from './ProductGrid.styled';
import useFetch from '@/shared/hooks/useFetch';

const ProductGrid = () => {
  const CategoriesData = useFetch({ query: 'https://dummyjson.com/products/categories' });

  const productId = useSelector((state) => state.productId);
  const data = useFetch({ query: 'https://dummyjson.com/products/category/', id: productId });
  const ProductListData = data.products;

  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.MainBox>
          <S.CategoryBox>
            {CategoriesData.map((el) => (
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
