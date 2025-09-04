import styled from '@emotion/styled';
import { FlexBetween, FlexColBetween, FlexCenter } from '../../assets/styled/CommonStyled';

export const Wrapper = styled(FlexCenter)`
  width: 100vw;
  height: 504px;

  background-color: #000;
`;

export const TextBox = styled(FlexBetween)`
  width: 1120px;
  height: 216px;
  position: relative;
`;

export const Box1 = styled.div`
  width: 384px;
  height: 100%;
  color: #fff;
`;

export const Logo = styled(FlexCenter)`
  margin: 0 0 15px 0;
  justify-content: start;

  cursor: default;
`;

export const Box2 = styled(FlexColBetween)`
  width: 300px;
  height: 100%;

  align-items: start;

  color: #fff;
`;
export const Box3 = styled(FlexColBetween)`
  width: 300px;
  height: 100%;

  align-items: start;

  color: #fff;
`;
export const Stitle = styled.div`
  cursor: default;
  font-size: 16px;
`;
export const Stext = styled.li`
  font-weight: 100;
  font-size: 14px;
  list-style: none;
  cursor: default;
`;

export const SnsBox = styled(FlexBetween)`
  margin: 30px 0 0 0;
  width: 173px;
`;

export const Snslogo = styled(FlexCenter)`
  :hover {
    cursor: pointer;
  }
`;
