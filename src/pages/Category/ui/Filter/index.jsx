import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from '@/pages/Category/ui/Filter/Filter.styled';
import { productIdSlice } from '@/redux';
import { ToUpper } from '@/shared/lib';
import { ExpandDownSVG } from '@/shared/assets/SVGicons';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import { DumText } from '@/shared/assets/styled/skelepton';

const Filter = () => {
  const productId = useSelector((state) => state.productId);
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);

  const [ProductsCategoryListData, isLoading] = useFetch({ resource: 'products', endPoint: 'category-list', suffix: '', enabled: true });

  return (
    <S.Wrapper>
      <S.CategoryBox>
        <S.TitleBox productId={productId} onClick={() => dispatch(productIdSlice.actions.getProductId('recipes'))}>
          <S.Title>Recipes</S.Title>
        </S.TitleBox>
        <S.TitleBox onClick={() => setToggle((prev) => !prev)}>
          <S.Title>Category</S.Title>
          <S.Arrow toggle={toggle}>{ExpandDownSVG({ size: '24', color: '#191919' })}</S.Arrow>
        </S.TitleBox>

        {toggle && (
          <S.BrandBox>
            {isLoading ? (
              <>
                {Array(20)
                  .fill('')
                  .map((_, i) => (
                    <S.BrandInBox key={Number(new Date() * i)}>
                      <DumText width='160px' height='15px' />
                    </S.BrandInBox>
                  ))}
              </>
            ) : (
              <>
                {ProductsCategoryListData.map((el) => (
                  <S.BrandInBox key={Number(new Date()) + el}>
                    <S.Brand onClick={() => dispatch(productIdSlice.actions.getProductId(el))} productId={ToUpper(productId)} name={ToUpper(el)}>
                      {ToUpper(el)}
                    </S.Brand>
                  </S.BrandInBox>
                ))}
              </>
            )}
          </S.BrandBox>
        )}
      </S.CategoryBox>
    </S.Wrapper>
  );
};

export default Filter;
