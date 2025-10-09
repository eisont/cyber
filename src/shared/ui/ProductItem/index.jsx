import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import { AddToCartSVG, EmptyCartSVG } from '@/shared/assets/SVGicons';
import { useState } from 'react';
import * as S from './ProductItem.styled';
import { DumImg, DumText } from '@/shared/assets/styled/skelepton';
import { OriginalPrice } from '@/shared/lib';

const ProductItem = (pr) => {
  const [toggle, setToggle] = useState(false);
  const { ref } = useIntersectionObserver();

  return (
    <S.Wrapper>
      {pr.ItemData?.stock === 0 && <S.SoldOutBox>SoldOut</S.SoldOutBox>}
      <S.MainBox>
        <S.IconBox>
          <S.FlexBox>
            <div>⭐️{pr.ItemData?.rating}</div>
            <div style={{ marginLeft: '10px' }}>({pr.ItemData?.reviews.length})</div>
          </S.FlexBox>
          <S.CartIcon onClick={() => setToggle((pr) => !pr)}>
            {toggle ? <>{AddToCartSVG({ size: '24', color: '#292d32', insideColor: 'yellowgreen' })} </> : <> {EmptyCartSVG({ size: '24', color: '#292d32' })} </>}
          </S.CartIcon>
          <S.MobileCartIcon onClick={() => setToggle((pr) => !pr)}>
            {toggle ? <>{AddToCartSVG({ size: '20', color: '#292d32', insideColor: 'yellowgreen' })} </> : <> {EmptyCartSVG({ size: '20', color: '#292d32' })} </>}
          </S.MobileCartIcon>
        </S.IconBox>
        {pr.isLoading ? (
          <>
            <DumImg width='160px' height='160px' />
            <DumText width='160px' height='15px' />
            <DumText width='100px' height='15px' />
          </>
        ) : (
          <>
            <S.Img ref={ref} data-src={pr.ItemData?.thumbnail} src={pr.ItemData?.thumbnail} alt='thumbnail' />
            <S.Title>{pr.ItemData?.title}</S.Title>
            <S.PriceBox>
              <S.Price>${OriginalPrice({ price: pr.ItemData?.price, discountPercentage: pr.ItemData?.discountPercentage })}</S.Price>
              <S.DiscountPercent>{pr.ItemData?.discountPercentage}%</S.DiscountPercent>
            </S.PriceBox>
            <S.DiscountedPrice>$ {pr.ItemData?.price}</S.DiscountedPrice>
          </>
        )}

        <S.Button to={`/category/${pr.ItemData?.id}`}>Detail</S.Button>
      </S.MainBox>
    </S.Wrapper>
  );
};

export default ProductItem;
