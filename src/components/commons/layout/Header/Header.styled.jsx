import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 88px;
  background-color: #fff;
  border-bottom: 1px solid #b5b5b5;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TotalBox = styled.div`
  width: 1120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.img`
  width: 96px;
  cursor: pointer;
`;
export const InputBox = styled.div`
  width: 433px;
  height: 56px;

  display: flex;
  justify-content: space-between;
  align-items: center;

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

export const MenuBox = styled.div`
  width: 351px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LinkSt = styled(Link)`
  text-decoration: none;
  color: ${(pr) => (pr.pathname ? '#000' : '#aeaeae')};

  :hover {
    cursor: pointer;
  }
`;
export const IconBox = styled.div`
  width: 144px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Icon = styled.img`
  width: 32px;
  cursor: pointer;
`;
