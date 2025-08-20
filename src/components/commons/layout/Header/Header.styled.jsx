import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Wrapper = styled(FlexBox)`
  height: 88px;
  background-color: #fff;
  border-bottom: 1px solid #b5b5b5;

  justify-content: center;
`;
export const TotalBox = styled(FlexBox)`
  width: 1120px;
`;
export const Logo = styled.img`
  width: 96px;
  cursor: pointer;
`;
export const InputBox = styled(FlexBox)`
  margin: 0 20px;
  width: 433px;
  height: 56px;

  border-radius: 10px;
  background: #f5f5f5;
`;
export const SearchIcon = styled.img`
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

export const MenuBox = styled(FlexBox)`
  width: 351px;
`;
export const LinkSt = styled(Link)`
  :hover {
    cursor: pointer;
  }
`;
export const IconBox = styled(FlexBox)`
  width: 144px;
`;
export const Icon = styled.img`
  width: 32px;
  cursor: pointer;
`;
