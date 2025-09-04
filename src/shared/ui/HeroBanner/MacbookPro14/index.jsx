import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { productIdSlice } from '../../../../redux/redux';
import styled from '@emotion/styled';
import { FlexBetween } from '../../../assets/styled/CommonStyled';

const Wrapper = styled(FlexBetween)`
  width: 720px;
  height: 600px;
  background: #ededed;
`;
const Macbookpro14TextBox = styled.div`
  margin: 0 0 0 50px;
  width: 341px;
  height: 272px;
  cursor: default;
`;

const TitleText = styled.div`
  font-size: 64px;
  font-weight: 100;
  line-height: 64px;

  color: #000;
`;
const SubText = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: #909090;
`;
const Linkst = styled(Link)`
  outline: none;
  text-decoration: none;
  color: #fff;
`;
const Botton = styled.button`
  margin: 20px 0 0 0;
  width: 191px;
  height: 56px;

  border: 1px solid #000;
  background: none;
  color: #000;
  border-radius: 6px;

  :hover {
    background: rgba(100, 100, 100, 0.2);
    cursor: pointer;
  }
`;

const Macbookpro14Img = styled.img`
  width: 292px;
`;

const MacbookPro14 = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Macbookpro14TextBox>
        <TitleText>
          Macbook<span style={{ fontWeight: '600' }}> Pro</span> 14
        </TitleText>
        <SubText>The new 14‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</SubText>
        <Linkst to='category' onClick={() => dispatch(productIdSlice.actions.getProductId('laptops'))}>
          <Botton>Shop Now</Botton>
        </Linkst>
      </Macbookpro14TextBox>
      <Macbookpro14Img src='../../../../../public/img/HeroBanner/MacBookPro14.webp' alt='MacBookPro14' />
    </Wrapper>
  );
};

export default MacbookPro14;
