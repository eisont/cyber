import styled from '@emotion/styled';
import { FlexBetween, FlexCenter } from '../../../../shared/assets/styled/CommonStyled';

export const Wrapper = styled.div`
  width: 831px;
`;
export const FlexBox = styled(FlexBetween)``;

export const ProductsCount = styled.div`
  display: flex;
  align-items: center;
  color: #6c6c6c;

  cursor: default;
`;
export const Count = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #000;
`;

export const SeleteBox = styled.select`
  padding: 8px 16px;
  width: 256px;
  height: 40px;

  border: 0.5px solid #d4d4d4;
  border-radius: 8px;

  :hover {
    cursor: pointer;
  }
`;

export const ProductsBox = styled.div`
  padding: 20px 0;
  width: 831px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const EmptyData = styled(FlexCenter)`
  width: 831px;
  height: 432px;

  color: #afafaf;

  border-radius: 10px;
  background: #f6f6f6;
`;
