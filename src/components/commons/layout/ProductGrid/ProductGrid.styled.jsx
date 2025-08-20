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
  margin: 0 0 25px 0;
  display: flex;
  align-items: center;
`;
export const Category = styled.div`
  margin: 0 20px 0 0;
  font-weight: 500;
  font-size: 18px;

  :hover {
    cursor: pointer;
  }
`;
export const ProductsItemsBox = styled.div`
  height: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;
`;
