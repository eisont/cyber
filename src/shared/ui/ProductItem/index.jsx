import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FlexCenter, FlexColBetween } from '@/shared/assets/styled/CommonStyled';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import { AddToCartSVG, EmptyCartSVG } from '@/shared/assets/SVGicons/24pxIcon';
import { useState } from 'react';

const Wrapper = styled(FlexCenter)`
  margin: 10px 0;
  width: 266px;
  height: 432px;

  background: #f6f6f6;
  border-radius: 10px;
  text-align: center;
`;

const MainBox = styled(FlexColBetween)`
  width: 234px;
  height: 390px;
`;
const IconBox = styled.div`
  width: 234px;
  height: 32px;
  display: flex;
  justify-content: end;
`;
const CartIcon = styled(FlexCenter)`
  transition: 0.3s;

  :hover {
    cursor: pointer;
    scale: 1.2;
  }
`;

const Img = styled.img`
  height: 160px;
  transition: 0.2s;
  :hover {
    scale: 1.2;
  }
`;
const Title = styled.div`
  font-weight: 500;
  cursor: default;
`;
const Price = styled.div`
  font-weight: 600;
  font-size: 24px;
  cursor: default;
`;
const Button = styled(Link)`
  width: 188px;
  height: 48px;
  font-size: 14px;

  border-radius: 8px;
  background: #000;
  color: #fff;
  text-decoration: none;
  transition: 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
    background: gray;
  }
`;

const ProductItem = (pr) => {
  const [toggle, setToggle] = useState(false);
  const { ref } = useIntersectionObserver();

  return (
    <Wrapper>
      <MainBox>
        <IconBox>{<CartIcon onClick={() => setToggle((pr) => !pr)}>{toggle ? <>{AddToCartSVG({ color: '#292d32' })} </> : <> {EmptyCartSVG({ color: '#292d32' })} </>}</CartIcon>}</IconBox>
        <Img ref={ref} data-src={pr.product.thumbnail} src='#' alt='thumbnail' />

        <Title>{pr.product.title}</Title>
        <Price>$ {pr.product.price}</Price>
        <Button to={`/category/${pr.product.id}`}>Buy Now</Button>
      </MainBox>
    </Wrapper>
  );
};

export default ProductItem;
