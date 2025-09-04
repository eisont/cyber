import { useState } from 'react';
import { ExpandDownSVG } from '@/shared/assets/SVGicons/24pxIcon';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './Fiter.styled';
import { productIdSlice } from '@/redux/redux';
import { ToUpper } from '@/shared/lib';
import useFetch from '@/shared/hooks/useFetch';

const Filter = () => {
  const [toggle, setToggle] = useState(true);

  const CategoryListData = useFetch({ query: 'https://dummyjson.com/products/category-list' });

  const productId = useSelector((state) => state.productId);

  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <S.CategoryBox>
        <S.TitleBox onClick={() => setToggle((prev) => !prev)}>
          <S.Title>Category</S.Title>
          <S.Arrow toggle={toggle}>{ExpandDownSVG({ color: '#191919' })}</S.Arrow>
        </S.TitleBox>
        {toggle ? (
          <>
            {/* <S.SearchBox>
              <S.SearchIcon>{SearchSVG('#989898')}</S.SearchIcon>
              <S.Input type='text' placeholder='Search'></S.Input>
            </S.SearchBox> */}
            <S.BrandBox>
              {CategoryListData.map((el) => (
                <S.BrandInBox key={Number(new Date()) + el}>
                  <S.Brand onClick={() => dispatch(productIdSlice.actions.getProductId(el))} productId={ToUpper(productId)} name={ToUpper(el)}>
                    {ToUpper(el)}
                  </S.Brand>
                </S.BrandInBox>
              ))}
            </S.BrandBox>
          </>
        ) : (
          <></>
        )}
      </S.CategoryBox>
    </S.Wrapper>
  );
};

export default Filter;
