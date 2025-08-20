import { ProductsCategory, ProductsItems } from '../../../../commons/monks/products/Products.monk';
import ProductCard from '../../components/ProductCard';
import * as S from './ProductGrid.styled';

const ProductGrid = (pr) => {
  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.MainBox>
          <S.CategoryBox>
            {pr.data.map((el) => (
              <S.Category key={el.slug} onClick={(e) => pr.setProductId(e.target.value)}>
                {el.name}
              </S.Category>
            ))}
          </S.CategoryBox>
          <S.ProductsItemsBox>
            {ProductsItems.map((el) => (
              <ProductCard key={el.id} item={el} />
            ))}
          </S.ProductsItemsBox>
        </S.MainBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default ProductGrid;
