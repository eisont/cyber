<<<<<<<< HEAD:src/components/commons/layout/ProductGrid/index.jsx
import { ProductsCategory, ProductsItems } from '../../../../commons/monks/products/Products.monk';
========
import ProductCard from '../../components/ProductCard';
import * as S from './ProductGrid.styled';
>>>>>>>> dfd1c05555481934f9da5cfff6d499603c729237:src/components/commons/layout/ProductGrid/ProductGridUI.jsx

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
