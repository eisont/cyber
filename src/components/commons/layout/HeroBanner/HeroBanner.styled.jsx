import styled from '@emotion/styled';
import { FlexBetween, FlexColBetween } from '../../../../shared/assets/styled/CommonStyled';

export const Wrapper = styled(FlexColBetween)`
  height: 1232px;
`;

export const BannerBox = styled.div`
  width: 100%;
  height: 632px;
  display: flex;
  justify-content: center;
  background: #211c24;
`;

export const SideBannerBox = styled(FlexBetween)`
  width: 1440px;
  height: 600px;
`;
export const SmallBannerBox = styled(FlexColBetween)`
  width: 720px;
  height: 600px;
`;
export const ToSmallBox = styled(FlexBetween)``;
