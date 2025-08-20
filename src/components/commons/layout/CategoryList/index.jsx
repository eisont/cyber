import { useState } from 'react';
import { useCategroy } from '../../../../commons/api/filterApi';
import { useFilterOptions } from '../../../../commons/api/filterApi';
import Fiter from '../Fiter';
import * as S from './CategoryList.styled';
import ProductsBox from '../ProductsBox';

const CategoryList = () => {
  const [productId, setProductId] = useState('beauty');

  const ProductsData = useFilterOptions(`https://dummyjson.com/products/category/${productId}`);

  const data = useCategroy();

  const ToUpper = (word) => {
    const first = word.split('')[0].toUpperCase();
    const rest = word.split('').slice(1, word.length).join('');
    return first + rest;
  };

  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.CategoryList>
          <S.CategoryMenu>Home</S.CategoryMenu>
          <S.Arrow src='../../../../../public/filter/Arrow.png' />
          <S.CategoryMenu>Category</S.CategoryMenu>
          <S.Arrow src='../../../../../public/filter/Arrow.png' />
          <S.CategoryMenu style={{ color: '#000' }}>{ToUpper(productId)}</S.CategoryMenu>
        </S.CategoryList>

        <S.FlexBox>
          <Fiter data={data[0][0]} setProductId={setProductId} productId={ToUpper(productId)} />
          <ProductsBox product={ProductsData[0].products} />
        </S.FlexBox>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default CategoryList;
