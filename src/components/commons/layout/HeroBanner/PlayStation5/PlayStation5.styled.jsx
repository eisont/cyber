import styled from '@emotion/styled';
import { FlexBetween } from '../../../../../shared/assets/styled/CommonStyled';

export const Wrapper = styled(FlexBetween)`
  position: relative;
  width: 720px;
  height: 328px;
  background: #fff;
`;

export const Playstation5TextBox = styled.div`
  position: absolute;
  width: 338px;
  height: 128px;
  left: 330px;
  cursor: default;
`;

export const TitleText = styled.div`
  font-size: 49px;
  font-weight: 500;
  color: #000;
`;
export const SubText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(144, 144, 144);
`;

export const Playstation5Img = styled.img`
  width: 360px;
`;
