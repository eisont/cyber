import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FlexCenter, FlexColBetween } from '@/shared/assets/styled/CommonStyled';
import { BREAKPOINTS } from '@/shared/assets/styled/breakpoints';

export const Wrapper = styled(FlexCenter)`
  margin: 10px 0;
  width: 266px;
  height: 432px;

  background: #f6f6f6;
  border-radius: 10px;
  text-align: center;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 163px;
    height: 322px;
  }
`;

export const MainBox = styled(FlexColBetween)`
  width: 234px;
  height: 370px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 90%;
    height: 280px;
  }
`;
export const IconBox = styled.div`
  width: 234px;
  height: 32px;
  display: flex;
  justify-content: end;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 90%;
    height: 20px;
  }
`;
export const CartIcon = styled(FlexCenter)`
  transition: 0.3s;

  :hover {
    cursor: pointer;
    scale: 1.2;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
export const MobileCartIcon = styled(CartIcon)`
  display: none;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: inline-block;
  }
`;

export const Img = styled.img`
  height: 160px;
  transition: 0.2s;
  :hover {
    scale: 1.2;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    height: 104px;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  cursor: default;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 12px;
  }
`;
export const Price = styled.div`
  font-weight: 600;
  font-size: 24px;
  cursor: default;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 18px;
  }
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

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 130px;
    height: 38px;
    font-size: 14px;
  }
`;
