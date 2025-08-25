import ProductItem from '../../components/ProductItem';
import * as S from './ProductsBox.styled';

const ProductsBox = (pr) => {
  return (
    <S.Wrapper>
      <S.FlexBox>
        <S.ProductsCount>
          Selected Products: <S.Count>{pr.ProductListData ? pr.ProductListData.length : 0}</S.Count>
        </S.ProductsCount>

        <S.SeleteBox name='Dropdown'>
          <option value=''>By rating</option>
        </S.SeleteBox>
      </S.FlexBox>

      <S.ProductsBox>
        {pr.ProductListData ? (
          <>
            {pr.ProductListData.map((el) => (
              <ProductItem key={el.id} product={el} />
            ))}
          </>
        ) : (
          <S.EmptyData>ⓧ</S.EmptyData>
        )}
      </S.ProductsBox>
    </S.Wrapper>
  );
};

export default ProductsBox;
