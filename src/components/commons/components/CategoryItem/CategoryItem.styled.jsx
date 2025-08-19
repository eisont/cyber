import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
  width: 160px;
  height: 128px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  background: rgb(0, 0, 0, 0.08);

  text-decoration: none;
  color: #000;
  :hover {
    cursor: pointer;
    background: rgb(0, 0, 0, 0.2);
  }
`;

export const CategoryImg = styled.img`
  width: 48px;
`;
export const Title = styled.div`
  font-family: 'Inter', sans-serif;
  margin: 10px 0 0 0;
  font-weight: 500;
  font-size: 18px;
`;
