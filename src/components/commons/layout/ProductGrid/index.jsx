import { useDispatch, useSelector } from 'react-redux';
import { useCategroy } from '../../../../commons/api/filterApi';
import ProductItem from '../../components/ProductItem';
import * as S from './ProductGrid.styled';
import { productIdSlice } from '../../../../redux/redux';

const ProductGrid = (pr) => {
  const data = useCategroy();
  const CategoryData = data[0][0];

  const productId = useSelector((state) => state.productId);
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
            {pr.ProductListData?.map((el) => (
              <ProductItem key={el.id} product={el} />
            ))}
          </S.ProductsItemsBox>
        </S.MainBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default ProductGrid;
