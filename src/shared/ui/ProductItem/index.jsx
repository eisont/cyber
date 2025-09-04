import { FavoritesSVG } from '@/shared/assets/SVGicons/32pxIcon';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FlexBt, FlexCenter, FlexColBetween } from '@/shared/assets/styled/CommonStyled';

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
const LikeIcon = styled(FlexCenter)``;

const ImgBox = styled.img`
  height: 160px;
`;
const Linkst = styled(Link)`
  :hover {
    cursor: pointer;
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
const Button = styled(FlexBt)`
  width: 188px;
  height: 48px;
  font-size: 14px;

  border-radius: 8px;
  background: #000;
  color: #fff;

  :hover {
    cursor: pointer;
  }
`;

const ProductItem = (pr) => {
  return (
    <Wrapper>
      <MainBox>
        <IconBox>{/* {<LikeIcon>{FavoritesSVG('#919191')}</LikeIcon>} */}</IconBox>
        <Linkst to={`/category/${pr.product.id}`}>
          <ImgBox src={pr.product.thumbnail} alt='thumbnail' />
        </Linkst>

        <Title>{pr.product.title}</Title>
        <Price>$ {pr.product.price}</Price>
        <Button>Buy Now</Button>
      </MainBox>
    </Wrapper>
  );
};

export default ProductItem;
