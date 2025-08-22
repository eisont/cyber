import styled from '@emotion/styled';
import { FlexBetween } from '../../../../shared/assets/styled/CommonStyled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainWrapper = styled.div`
  width: 1200px;
`;

export const CategoryList = styled.div`
  width: 100%;
  height: 104px;
  display: flex;
  align-items: center;
`;
export const CategoryMenu = styled.div`
  margin: 0 20px 0 0;
  font-weight: 500;
  cursor: default;

  color: #a4a4a4;
`;
export const Arrow = styled.img`
  margin: 0 20px 0 0;
  width: 24px;
  cursor: default;
`;

export const FlexBox = styled(FlexBetween)`
  align-items: start;
`;
