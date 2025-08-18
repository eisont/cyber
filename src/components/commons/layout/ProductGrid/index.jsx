import { ProductsCategory, ProductsItems } from '../../../../commons/monks/products/Products.monk';

const ProductGrid = () => {
  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.MainBox>
          <S.CategoryBox>
            {ProductsCategory.map((el) => (
              <S.Category key={el.id}>{el.category}</S.Category>
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
