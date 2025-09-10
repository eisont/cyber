import { useState } from 'react';
import useFetch from '@/shared/hooks/useFetch';
import { ExpandDownSVG } from '@/shared/assets/SVGicons';
import { productIdSlice } from '@/redux';
import { ToUpper } from '@/shared/lib';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './Fiter.styled';
import { DumText } from '@/shared/assets/styled/skelepton';

const Filter = () => {
  const [toggle, setToggle] = useState(true);

  const [CategoryListData, isLoading] = useFetch({ query: 'https://dummyjson.com/products/category-list' });

  const productId = useSelector((state) => state.productId);

  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <S.CategoryBox>
        <S.TitleBox onClick={() => setToggle((prev) => !prev)}>
          <S.Title>Category</S.Title>
          <S.Arrow toggle={toggle}>{ExpandDownSVG({ size: '24', color: '#191919' })}</S.Arrow>
        </S.TitleBox>
        {toggle && (
          <>
            <S.BrandBox>
              {isLoading ? (
                <>
                  {Array(20)
                    .fill('')
                    .map((_, i) => (
                      <S.BrandInBox key={Number(new Date() * i)}>
                        <DumText />
                      </S.BrandInBox>
                    ))}
                </>
              ) : (
                <>
                  {CategoryListData.map((el) => (
                    <S.BrandInBox key={Number(new Date()) + el}>
                      <S.Brand onClick={() => dispatch(productIdSlice.actions.getProductId(el))} productId={ToUpper(productId)} name={ToUpper(el)}>
                        {ToUpper(el)}
                      </S.Brand>
                    </S.BrandInBox>
                  ))}
                </>
              )}
            </S.BrandBox>
          </>
        )}
      </S.CategoryBox>
    </S.Wrapper>
  );
};

export default Filter;
