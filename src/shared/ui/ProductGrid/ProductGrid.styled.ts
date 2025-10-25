import { FlexCenter, FlexColAround } from '@/shared/assets/styled/CommonStyled';
import styled from '@emotion/styled';
import { BREAKPOINTS } from '@/shared/assets/styled/breakpoints';

export const Wrapper = styled(FlexCenter)``;

export const TotalBox = styled(FlexCenter)`
  width: 1440px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 100vw;
  }
`;
export const MainBox = styled(FlexColAround)`
  margin: 30px 0;
  width: 1120px;
  height: 1000px;

  align-items: start;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 10px 0;
    width: 100vw;
  }
`;

export const CategoryBox = styled.div`
  width: 100%;
  overflow-x: scroll;

  display: flex;
  align-items: center;

  ::-webkit-scrollbar-button {
    height: 5px;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 100vw;
    height: 40px;
  }
`;
type ExploreProps = {
  readonly $isActive: boolean;
};

export const Explore = styled.div<ExploreProps>`
  margin: 0 20px 0 0;
  font-weight: 500;
  text-align: center;

  font-size: ${({ $isActive }) => ($isActive ? '18px' : '14px')};
  color: ${({ $isActive }) => ($isActive ? '#000' : '#A4A4A4')};
  font-weight: ${({ $isActive }) => ($isActive ? '700' : '500')};

  &:hover {
    cursor: pointer;
    color: #000;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 5px 7px;
    font-size: ${({ $isActive }) => ($isActive ? '14px' : '10px')};
  }
`;

export const ProductsItemsBox = styled(FlexCenter)`
  width: 100%;
  height: 950px;
  gap: 0 16px;

  overflow-y: auto;

  align-items: start;
  justify-content: start;

  flex-wrap: wrap;

  ::-webkit-scrollbar {
    width: 5px;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    gap: 6px;

    justify-content: center;
    align-items: center;
  }
`;
