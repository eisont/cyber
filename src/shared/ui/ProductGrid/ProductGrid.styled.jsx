import { FlexCenter, FlexColAround } from '../../assets/styled/CommonStyled';
import styled from '@emotion/styled';

export const Wrapper = styled(FlexCenter)``;

export const TotalBox = styled(FlexCenter)`
  width: 1440px;
`;
export const MainBox = styled(FlexColAround)`
  margin: 30px 0;
  width: 1120px;
  height: 1000px;

  align-items: start;
`;

export const CategoryBox = styled.div`
  width: 100%;
  overflow-x: scroll;

  display: flex;
  align-items: center;

  ::-webkit-scrollbar-button {
    height: 5px;
  }
`;
export const Category = styled.div`
  margin: 0 20px 0 0;
  font-weight: 500;
  text-align: center;

  font-size: ${(pr) => (pr.id === pr.productId ? '18px' : '14px')};
  color: ${(pr) => (pr.id === pr.productId ? '#000' : '#A4A4A4')};
  font-weight: ${(pr) => pr.id === pr.productId && '700'};

  :hover {
    cursor: pointer;
    color: #000;
  }
`;

export const ProductsItemsBox = styled(FlexCenter)`
  width: 100%;
  height: 900px;
  gap: 0 16px;

  overflow-y: auto;

  align-items: start;
  justify-content: start;

  flex-wrap: wrap;

  ::-webkit-scrollbar {
    width: 5px;
  }
`;
