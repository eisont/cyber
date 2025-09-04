import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FlexBetween, FlexCenter } from '../../shared/assets/styled/CommonStyled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainWrapper = styled.div`
  width: 1120px;
`;

export const Category = styled.div`
  width: 100%;
  height: 104px;
  display: flex;
  align-items: center;
`;
export const CategoryMenu = styled(Link)`
  margin: 0 20px 0 0;
  font-weight: 500;
  text-decoration: none;

  color: #a4a4a4;

  :hover {
    cursor: pointer;
    color: #000;
  }
`;
export const ProductAllMenu = styled(CategoryMenu)`
  color: ${(pr) => !pr.params && '#000'};
  font-weight: ${(pr) => (pr.params ? '500' : '900')};
`;
export const ProductItemMenu = styled(CategoryMenu)`
  color: ${(pr) => pr.params && '#000'};
  font-weight: 900;
`;
export const Arrow = styled(FlexCenter)`
  margin: 0 20px 0 0;
  width: 24px;
  cursor: default;
`;

export const FlexBox = styled(FlexBetween)`
  align-items: start;
`;

export const SideItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
