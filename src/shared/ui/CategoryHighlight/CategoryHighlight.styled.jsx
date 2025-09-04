import styled from '@emotion/styled';
import { FlexBetween, FlexColBetween, FlexCenter } from '@/shared/assets/styled/CommonStyled';
import { Link } from 'react-router-dom';

export const Wrapper = styled(FlexCenter)`
  height: 352px;
`;

export const TotalBox = styled(FlexCenter)`
  width: 1440px;
  height: 352px;

  background: #fafafa;
`;

export const MainBox = styled(FlexColBetween)`
  width: 1120px;
  height: 190px;

  align-items: start;
`;
export const Top = styled.div`
  cursor: default;
  font-weight: 500;
  font-size: 24px;
`;
export const Categories = styled(FlexBetween)`
  width: 1120px;
  height: 128px;
`;

export const ItemBox = styled(Link)`
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
export const CategoryImg = styled.div``;

export const Title = styled.div`
  margin: 10px 0 0 0;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;
