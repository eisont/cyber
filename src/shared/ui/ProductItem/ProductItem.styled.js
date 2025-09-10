import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FlexCenter, FlexColBetween } from '@/shared/assets/styled/CommonStyled';

export const Wrapper = styled(FlexCenter)`
  margin: 10px 0;
  width: 266px;
  height: 432px;

  background: #f6f6f6;
  border-radius: 10px;
  text-align: center;
`;

export const MainBox = styled(FlexColBetween)`
  width: 234px;
  height: 390px;
`;
export const IconBox = styled.div`
  width: 234px;
  height: 32px;
  display: flex;
  justify-content: end;
`;
export const CartIcon = styled(FlexCenter)`
  transition: 0.3s;

  :hover {
    cursor: pointer;
    scale: 1.2;
  }
`;

export const Img = styled.img`
  height: 160px;
  transition: 0.2s;
  :hover {
    scale: 1.2;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  cursor: default;
`;
export const Price = styled.div`
  font-weight: 600;
  font-size: 24px;
  cursor: default;
`;

export const Button = styled(Link)`
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
