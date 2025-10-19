import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FlexCenter } from '@/shared/assets/styled/CommonStyled';
import { BREAKPOINTS } from '@/shared/assets/styled/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 100vw;
  }
`;

export const MainWrapper = styled.div`
  width: 1120px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 95%;
  }
`;

export const Category = styled.div`
  width: 100%;
  height: 104px;
  display: flex;
  align-items: center;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
export const CategoryMenu = styled(Link)`
  margin: 0 20px 0 0;
  font-weight: 500;
  text-decoration: none;

  color: #a4a4a4;

  &:hover {
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

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
export const FlexColBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
export const ProductsCount = styled.div`
  display: flex;
  align-items: center;
  color: #6c6c6c;

  cursor: default;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 10px 0 0 0;
  }
`;
export const Count = styled.div`
  margin: 0 0 0 5px;
  font-size: 20px;
  font-weight: 400;
  color: #000;
`;

export const SideItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
