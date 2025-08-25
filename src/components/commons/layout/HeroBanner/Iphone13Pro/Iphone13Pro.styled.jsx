import styled from '@emotion/styled';
import { FlexBetween } from '../../../../../shared/assets/styled/CommonStyled';
import { Link } from 'react-router-dom';

export const Wrapper = styled(FlexBetween)`
  width: 1120px;
  height: 632px;
`;
export const Iphone14ProTextBox = styled.div`
  cursor: default;
`;

export const HeadText = styled.div`
  font-size: 25px;
  color: rgba(100, 100, 100, 0.4);
`;
export const TitleText = styled.div`
  font-size: 96px;
  font-weight: 600;
  letter-spacing: -3px;
  color: #fff;
`;
export const SubText = styled.div`
  font-size: 18px;
  color: rgba(100, 100, 100, 0.4);
`;
export const Linkst = styled(Link)`
  outline: none;
  text-decoration: none;
  color: #fff;
`;
export const Botton = styled.button`
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

export const Iphone14ProImg = styled.img`
  width: 406px;
`;
