import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 360px;
  height: 552px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;

  background: ${({ background }) => background};
`;

export const MainBox = styled.div`
  width: 297px;
  height: 485px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ItemImg = styled.img`
  width: 297px;
`;
export const ItemText = styled.div`
  font-size: 33px;
  font-weight: 300;
  color: ${({ color }) => color};
`;
export const ItemBt = styled.button`
  width: 191px;
  height: 56px;

  font-size: 16px;
  font-weight: 500;

  border-radius: 6px;
  border: 1px solid ${({ color }) => color};
  color: ${({ color }) => color};
  background: ${({ background }) => background};

  :hover {
    cursor: pointer;
    background: ${({ hover }) => hover};
  }
`;
