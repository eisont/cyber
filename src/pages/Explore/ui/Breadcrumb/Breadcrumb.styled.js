import styled from '@emotion/styled';
import { BREAKPOINTS } from '@/shared/assets/styled/breakpoints';
import { Link } from 'react-router-dom';
import { FlexCenter } from '@/shared/assets/styled/CommonStyled';

export const Wrapper = styled.div`
  width: 100%;
  height: 104px;
  display: flex;
  align-items: center;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
export const Menu = styled(Link)`
  margin: 0 20px 0 0;
  font-weight: 500;
  text-decoration: none;

  color: #a4a4a4;

  &:hover {
    cursor: pointer;
    color: #000;
  }
`;
export const Arrow = styled(FlexCenter)`
  margin: 0 20px 0 0;
  width: 24px;
  cursor: default;
`;

export const ProductItemMenu = styled(Menu)`
  color: ${(pr) => pr.params && '#000'};
  font-weight: 900;
`;
export const ProductAllMenu = styled(Menu)`
  color: ${(pr) => !pr.params && '#000'};
  font-weight: ${(pr) => (pr.params ? '500' : '900')};
`;
