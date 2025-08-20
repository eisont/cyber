import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 10px 0;
  width: 266px;
  height: 432px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #f6f6f6;
  border-radius: 10px;
  cursor: default;
`;

export const MainBox = styled.div`
  width: 234px;
  height: 390px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const IconBox = styled.div`
  width: 234px;
  display: flex;
  justify-content: end;
`;
export const LikeIcon = styled.img`
  :hover {
    cursor: pointer;
  }
`;
export const ImgBox = styled.img`
  width: 160px;
  height: 160px;
`;
export const Title = styled.div`
  font-weight: 500;
  cursor: default;
`;
export const Price = styled.div`
  font-weight: 600;
  font-size: 24px;
  cursor: default;
`;
export const Button = styled.button`
  width: 188px;
  height: 48px;
  font-size: 14px;

  border-radius: 8px;
  background: #000;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;
