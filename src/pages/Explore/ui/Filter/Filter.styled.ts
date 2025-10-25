import styled from '@emotion/styled';
import { FlexBetween, FlexColAround, FlexCenter } from '@/shared/assets/styled/CommonStyled';
import { BREAKPOINTS } from '@/shared/assets/styled/breakpoints';

export const Wrapper = styled.div`
  width: 256px;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;

export const CategoryBox = styled.div`
  margin: 0 0 20px 0;
`;

type TitleBoxProps = {
  readonly $isActive?: boolean;
};

export const TitleBox = styled(FlexBetween)<TitleBoxProps>`
  width: 256px;

  border-bottom: 0.5px solid #b5b5b5;
  background: ${({ $isActive }) => ($isActive ? '#e8e8e8' : 'transparent')};

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.044);
  }
`;
export const Title = styled.div`
  margin: 10px 0;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    cursor: default;
  }
`;
export const Arrow = styled(FlexCenter)<{ readonly $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const SearchBox = styled(FlexBetween)`
  margin: 10px 0;
  width: 256px;
  height: 40px;
  border-radius: 8px;

  background: #f5f5f5;
`;
export const SearchIcon = styled(FlexCenter)`
  margin: 0 0 0 15px;
`;

export const Input = styled.input`
  padding: 0 10px;
  width: 197px;
  height: 56px;
  outline: none;
  border: none;
  color: #656565;
  background: rgba(0, 0, 0, 0);
`;

export const BrandBox = styled(FlexColAround)`
  margin: 10px 0;

  width: 256px;
  align-items: start;
`;
export const BrandInBox = styled.div`
  height: 24px;
  margin: 5px 0;

  display: flex;
  justify-content: start;
  align-items: center;
`;
export const Brand = styled.div<{ readonly $isActive: boolean }>`
  font-size: ${({ $isActive }) => ($isActive ? '18px' : '14px')};
  color: ${({ $isActive }) => ($isActive ? '#000' : '#A4A4A4')};
  font-weight: ${({ $isActive }) => ($isActive ? '700' : '500')};

  &:hover {
    cursor: pointer;
    color: #000;
  }
`;
