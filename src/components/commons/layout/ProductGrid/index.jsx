import ProductItem from '../../components/ProductItem';
import * as S from './ProductGrid.styled';

const ProductGrid = (pr) => {
  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.MainBox>
          <S.CategoryBox>
            {pr.data.map((el) => (
              <S.Category key={el.slug} id={el.slug} productId={pr.productId} onClick={(e) => pr.setProductId(e.target.id)}>
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
