import styled from '@emotion/styled';

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled(FlexBox)``;

export const TotalBox = styled(FlexBox)`
  width: 1440px;
`;
export const MainBox = styled.div`
  margin: 30px 0;
  width: 1120px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const CategoryBox = styled.div`
  width: 100%;
  overflow-x: scroll;

  display: flex;
  align-items: center;

  ::-webkit-scrollbar {
    height: 5px;
  }
`;
export const Category = styled.div`
  margin: 0 20px 0 0;
  font-weight: 500;
  text-align: center;

  font-size: ${(pr) => (pr.id === pr.productId ? '18px' : '14px')};
  color: ${(pr) => (pr.id === pr.productId ? '#000' : '#A4A4A4')};
  font-weight: ${(pr) => pr.id === pr.productId && '900'};

  :hover {
    cursor: pointer;
    color: #000;
  }
`;

export const ProductsItemsBox = styled(FlexBox)`
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
