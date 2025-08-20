import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 268px;
  height: 432px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  background: #f6f6f6;
  cursor: default;
`;
export const MainBox = styled.div`
  width: 188px;
  height: 385px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const IconBox = styled.div`
  width: 188px;
  display: flex;
  justify-content: end;
  align-items: center;
`;
export const LikeIcon = styled.img`
  width: 32px;
  :hover {
    cursor: pointer;
  }
`;
export const ItemImg = styled.img`
  width: 160px;
`;
export const ItemContents = styled.div`
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  line-height: 24px;
`;
export const ItemPrice = styled.div`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1px;
`;
export const BuyBt = styled.button`
  width: 188px;
  height: 48px;
  outline: none;

  font-size: 14px;
  border-radius: 8px;
  color: #fff;
  background: rgb(0, 0, 0);

  :hover {
    cursor: pointer;
    background: rgb(0, 0, 0, 0.8);
  }
`;
