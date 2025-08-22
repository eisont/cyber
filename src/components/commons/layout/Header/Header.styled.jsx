import { Link } from 'react-router-dom';
import { FlexBetween, FlexDiv } from '../../../../shared/assets/styled/CommonStyled';
import styled from '@emotion/styled';

export const FlexBox = styled(FlexBetween)``;

export const Wrapper = styled(FlexBetween)`
  width: 100vw;
  height: 88px;
  background-color: #fff;
  border-bottom: 1px solid #b5b5b5;

  justify-content: center;
`;
export const TotalBox = styled(FlexBetween)`
  width: 1120px;
`;
export const InputBox = styled(FlexBetween)`
  margin: 0 20px;
  width: 433px;
  height: 56px;

  border-radius: 10px;
  background: #f5f5f5;
`;
export const SearchIcon = styled.div`
  margin: 0 0 0 15px;
  width: 24px;
`;
export const Input = styled.input`
  padding: 0 10px;
  width: 384px;
  height: 56px;
  outline: none;
  border: none;
  color: #656565;
  background: rgba(0, 0, 0, 0);
`;

export const MenuBox = styled(FlexBetween)`
  width: 351px;
`;
export const LinkSt = styled(Link)`
  :hover {
    cursor: pointer;
  }
`;
export const IconBox = styled(FlexBetween)`
  width: 144px;
`;
export const Icon = styled(FlexDiv)`
  :hover {
    cursor: pointer;
  }
`;
