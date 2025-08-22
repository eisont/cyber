import styled from '@emotion/styled';
import { FlexColBetween, FlexDiv } from '../../../../shared/assets/styled/CommonStyled';

export const Wrapper = styled(FlexDiv)`
  width: 360px;
  height: 552px;
  cursor: default;

  background: ${({ background }) => background};
`;

export const MainBox = styled(FlexColBetween)`
  width: 297px;
  height: 485px;
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
