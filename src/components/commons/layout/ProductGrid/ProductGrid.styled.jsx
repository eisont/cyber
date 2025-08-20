import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TotalBox = styled.div`
  width: 1440px;
  height: 1056px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;
`;
export const MainBox = styled.div`
  width: 1120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CategoryBox = styled.div`
  width: 100%;
  overflow-x: scroll;

  margin: 0 0 25px 0;
  display: flex;
  align-items: center;
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
export const ProductsItemsBox = styled.div`
  height: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;
`;
