import styled from '@emotion/styled';
import { FlexBetween } from '../../../../../shared/assets/styled/CommonStyled';
import { Link } from 'react-router-dom';

export const Wrapper = styled(FlexBetween)`
  width: 720px;
  height: 600px;
  background: #ededed;
`;
export const Macbookpro14TextBox = styled.div`
  margin: 0 0 0 50px;
  width: 341px;
  height: 272px;
  cursor: default;
`;

export const TitleText = styled.div`
  font-size: 64px;
  font-weight: 100;
  line-height: 64px;

  color: #000;
`;
export const SubText = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: #909090;
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

  border: 1px solid #000;
  background: none;
  color: #000;
  border-radius: 6px;

  :hover {
    background: rgba(100, 100, 100, 0.2);
    cursor: pointer;
  }
`;

export const Macbookpro14Img = styled.img`
  width: 292px;
`;
