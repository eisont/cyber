import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FlexCenter } from '../../../../shared/assets/styled/CommonStyled';

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

export const CategoryImg = styled(FlexCenter)``;

export const Title = styled.div`
  margin: 10px 0 0 0;
  font-weight: 500;
  font-size: 18px;
`;
