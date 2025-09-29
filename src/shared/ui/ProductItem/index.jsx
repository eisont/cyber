import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import { AddToCartSVG, EmptyCartSVG } from '@/shared/assets/SVGicons';
import { useState } from 'react';
import * as S from './ProductItem.styled';
import { DumImg, DumText } from '@/shared/assets/styled/skelepton';

const ProductItem = (pr) => {
  const [toggle, setToggle] = useState(false);
  const { ref } = useIntersectionObserver();

  return (
    <S.Wrapper>
      {pr.itemData.stock === 0 && <S.SoldOutBox>SoldOut</S.SoldOutBox>}
      <S.MainBox>
        <S.IconBox>
          <S.CartIcon onClick={() => setToggle((pr) => !pr)}>
            {toggle ? <>{AddToCartSVG({ size: '24', color: '#292d32', insideColor: 'yellowgreen' })} </> : <> {EmptyCartSVG({ size: '24', color: '#292d32' })} </>}
          </S.CartIcon>
          <S.MobileCartIcon onClick={() => setToggle((pr) => !pr)}>
            {toggle ? <>{AddToCartSVG({ size: '20', color: '#292d32', insideColor: 'yellowgreen' })} </> : <> {EmptyCartSVG({ size: '20', color: '#292d32' })} </>}
          </S.MobileCartIcon>
        </S.IconBox>
        {pr.isLoading ? (
          <>
            <DumImg />
            <DumText />
            <DumText style={{ width: '100px' }} />
          </>
        ) : (
          <>
            <S.Img ref={ref} data-src={pr.itemData?.thumbnail} src={pr.itemData?.thumbnail} alt='thumbnail' />
            <S.Title>{pr.itemData.title}</S.Title>
            <S.Price>$ {pr.itemData.price}</S.Price>
          </>
        )}

        <S.Button to={`/category/${pr.itemData?.id}`}>Detail</S.Button>
      </S.MainBox>
    </S.Wrapper>
  );
};

export default ProductItem;
