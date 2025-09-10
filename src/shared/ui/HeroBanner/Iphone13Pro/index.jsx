import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { productIdSlice } from '@/redux';
import { FlexBetween } from '@/shared/assets/styled/CommonStyled';

const Wrapper = styled(FlexBetween)`
  width: 1120px;
  height: 632px;
`;
const Iphone13ProTextBox = styled.div`
  cursor: default;
`;

const HeadText = styled.div`
  font-size: 25px;
  color: rgba(100, 100, 100, 0.4);
`;
const TitleText = styled.div`
  font-size: 96px;
  font-weight: 600;
  color: #fff;
`;
const SubText = styled.div`
  font-size: 18px;
  color: rgba(100, 100, 100, 0.4);
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

  border: 1px solid #fff;
  background: none;
  color: #fff;
  border-radius: 6px;

  :hover {
    cursor: pointer;
    background: rgba(100, 100, 100, 0.4);
  }
`;

const Iphone13ProImg = styled.img`
  width: 406px;
`;

const Iphone13Pro = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Iphone13ProTextBox>
        <HeadText>Pro.Beyond.</HeadText>
        <TitleText>
          <span style={{ fontWeight: '100' }}>IPhone 13</span> Pro
        </TitleText>
        <SubText>Created to change everything for the better. For everyone</SubText>
        <Linkst to='category' onClick={() => dispatch(productIdSlice.actions.getProductId('smartphones'))}>
          <Botton>Shop Now</Botton>
        </Linkst>
      </Iphone13ProTextBox>
      <Iphone13ProImg src='img/HeroBanner/Iphone14pro.webp' alt='Iphone13pro' />
    </Wrapper>
  );
};

export default Iphone13Pro;
