import Product from '../../components/Product';
import * as S from './Products.styled';

const Products = () => {
  return (
    <S.Wrapper>
      <S.FlexBox>
        <S.ProductsCount>
          Selected Products: <S.Count>85</S.Count>
        </S.ProductsCount>

        <S.SeleteBox name='Dropdown'>
          <option value=''>By rating</option>
        </S.SeleteBox>
      </S.FlexBox>

      <S.ProductsBox>
        <Product />
        <Product />
        <Product />
      </S.ProductsBox>
    </S.Wrapper>
  );
};

export default Products;
