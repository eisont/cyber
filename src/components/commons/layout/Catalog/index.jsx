import { useState } from 'react';
import { useCategroy } from '../../../../commons/api/filterApi';
import Fiter from '../Fiter';
import Products from '../Products';
import * as S from './Catalog.styled';
import { useFilterOptions } from '../../../../commons/api/filterApi';

const Catalog = () => {
  const [productsData, setProductsData] = useState([]);

  const pData = useFilterOptions(`https://dummyjson.com/products/category/${productsData}`);

  const data = useCategroy();

  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.Category>
          <S.CategoryMenu>Home</S.CategoryMenu>
          <S.Arrow src='../../../../../public/filter/Arrow.png' />
          <S.CategoryMenu>Catalog</S.CategoryMenu>
          <S.Arrow src='../../../../../public/filter/Arrow.png' />
          <S.CategoryMenu>Smartphones</S.CategoryMenu>
        </S.Category>

        <S.FlexBox>
          <Fiter data={data[0][0]} setProductsData={setProductsData} />
          <Products product={pData[0].products} />
        </S.FlexBox>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default Catalog;
