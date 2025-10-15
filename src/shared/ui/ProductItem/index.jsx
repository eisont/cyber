import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import { AddToCartSVG, EmptyCartSVG } from '@/shared/assets/SVGicons';
import { memo, useState } from 'react';
import * as S from '@/shared/ui/ProductItem/ProductItem.styled';
import { DumImg, DumText } from '@/shared/assets/styled/skelepton';
import { OriginalPrice } from '@/shared/lib';

const ProductItem = memo((pr) => {
  const [toggle, setToggle] = useState(false);
  const { ref } = useIntersectionObserver();

  return (
    <S.Wrapper>
      {pr?.stock === 0 && <S.SoldOutBox>SoldOut</S.SoldOutBox>}
      <S.MainBox>
        <S.IconBox>
          <S.FlexBox>
            <div>⭐️{pr?.rating}</div>
            <div style={{ marginLeft: '10px' }}>({pr?.reviews?.length})</div>
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
            <S.Img ref={ref} data-src={pr?.thumbnail} src={pr?.thumbnail} alt='thumbnail' />
            <S.Title>{pr?.title}</S.Title>
            <S.PriceBox>
              <S.Price>${OriginalPrice({ price: pr?.price, discountPercentage: pr?.discountPercentage })}</S.Price>
              <S.DiscountPercent>{pr?.discountPercentage}%</S.DiscountPercent>
            </S.PriceBox>
            <S.DiscountedPrice>$ {pr?.price}</S.DiscountedPrice>
          </>
        )}

        <S.Button to={`/category/${pr?.id}`}>Detail</S.Button>
      </S.MainBox>
    </S.Wrapper>
  );
});

export default ProductItem;
