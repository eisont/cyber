import styled from '@emotion/styled';
import { FlexBetween, FlexColAround, FlexCenter } from '../../../../shared/assets/styled/CommonStyled';

export const Wrapper = styled.div`
  width: 256px;
`;

export const CategoryBox = styled.div`
  margin: 0 0 20px 0;
`;

export const TitleBox = styled(FlexBetween)`
  width: 256px;

  border-bottom: 0.5px solid #b5b5b5;
`;
export const Title = styled.div`
  margin: 10px 0;
  font-size: 18px;
  cursor: default;
`;
export const Arrow = styled(FlexCenter)`
  transform: ${(pr) => pr.toggle && 'rotate(180deg)'};

  :hover {
    cursor: pointer;
  }
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
export const CheckBox = styled.input``;
export const Brand = styled.div`
  font-size: ${(pr) => (pr.name === pr.productId ? '18px' : '14px')};
  color: ${(pr) => (pr.name === pr.productId ? '#000' : '#A4A4A4')};
  font-weight: ${(pr) => pr.name === pr.productId && '900'};

  :hover {
    cursor: pointer;
    color: #000;
  }
`;
export const Number = styled.div``;
