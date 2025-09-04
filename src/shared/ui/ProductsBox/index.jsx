import { useSelector } from 'react-redux';
import { useFilterOptions } from '@/shared/hooks/useApiHooks';
import ProductItem from '@/shared/ui/ProductItem';
import * as S from './ProductsBox.styled';

const ProductsBox = () => {
  const productId = useSelector((state) => state.productId);
  const ProductListData = useFilterOptions(`https://dummyjson.com/products/category/${productId}`)[0].products;

  return (
    <S.Wrapper>
      <S.FlexBox>
        <S.ProductsCount>
          Selected Products: <S.Count>{ProductListData ? ProductListData.length : 0}</S.Count>
        </S.ProductsCount>

        {/* <S.SeleteBox name='Dropdown'>
          <option value=''>By rating</option>
        </S.SeleteBox> */}
      </S.FlexBox>

      <S.ProductsBox>
        {ProductListData ? (
          <>
            {ProductListData.map((el) => (
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
