import styled from '@emotion/styled';
import { FlexBetween, FlexColBetween, FlexDiv } from '../../../../shared/assets/styled/CommonStyled';

export const Wrapper = styled(FlexDiv)`
  height: 352px;
`;

export const TotalBox = styled(FlexDiv)`
  width: 1440px;
  height: 352px;

  background: #fafafa;
`;

export const MainBox = styled(FlexColBetween)`
  width: 1120px;
  height: 190px;

  align-items: start;
`;
export const Top = styled.div`
  cursor: default;
  font-weight: 500;
  font-size: 24px;
`;
export const Categories = styled(FlexBetween)`
  width: 1120px;
  height: 128px;
`;
