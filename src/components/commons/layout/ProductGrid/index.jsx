import { useCategroy } from '../../../../commons/api/filterApi';
import { useProductId } from '../../../../context/productIdContext';
import ProductItem from '../../components/ProductItem';
import * as S from './ProductGrid.styled';

const ProductGrid = (pr) => {
  const data = useCategroy();
  const CategoryData = data[0][0];

  const [productId, setProductId] = useProductId();

  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.MainBox>
          <S.CategoryBox>
            {CategoryData.map((el) => (
              <S.Category key={el.slug} id={el.slug} productId={productId} onClick={(e) => setProductId(e.target.id)}>
                {el.name}
              </S.Category>
            ))}
          </S.CategoryBox>

          <S.ProductsItemsBox>
            {pr.productListData?.map((el) => (
              <ProductItem key={el.id} product={el} />
            ))}
          </S.ProductsItemsBox>
        </S.MainBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default ProductGrid;
