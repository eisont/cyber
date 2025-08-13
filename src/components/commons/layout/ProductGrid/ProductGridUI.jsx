import ProductCard from '../../components/ProductCard';
import * as S from './ProductGrid.styled';

const ProductGridUI = (pr) => {
  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.MainBox>
          <S.CategoryBox>
            {pr.ProductsCategoryData.map((el) => (
              <S.Category key={el.id}>{el.category}</S.Category>
            ))}
          </S.CategoryBox>
          <S.ProductsItemsBox>
            {pr.ProductsItemsData.map((el) => (
              <ProductCard key={el.id} item={el} />
            ))}
          </S.ProductsItemsBox>
        </S.MainBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default ProductGridUI;
