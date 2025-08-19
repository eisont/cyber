import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 256px;
`;

export const CategoryBox = styled.div`
  margin: 0 0 20px 0;
`;

export const TitleBox = styled.div`
  width: 256px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #b5b5b5;
`;
export const Title = styled.div`
  margin: 10px 0;
  font-size: 18px;
`;
export const Arrow = styled.img`
  transform: ${(pr) => pr.toggle && 'rotate(180deg)'};
  :hover {
    cursor: pointer;
  }
`;

export const SearchBox = styled.div`
  margin: 10px 0;
  width: 256px;
  height: 40px;
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #f5f5f5;
`;
export const SearchIcon = styled.img`
  margin: 0 0 0 15px;
  width: 24px;
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

export const BrandBox = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  :hover {
    cursor: pointer;
    color: #aeaeae;
  }
`;
export const Number = styled.div``;
