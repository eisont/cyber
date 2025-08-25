import styled from '@emotion/styled';
import { FlexBetween, FlexCenter, FlexColBetween } from '../../../../shared/assets/styled/CommonStyled';

export const Wrapper = styled(FlexCenter)`
  width: 1440px;
`;

export const MainBox = styled.div`
  padding: 0 0 30px 0;
  width: 1120px;
  flex: display;
  justify-content: start;
  align-items: start;
`;

export const Title = styled.div`
  margin: 0 0 10px 0;
  font-size: 40px;
  font-weight: 600;
`;

export const TagsBox = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;
export const Tags = styled.div`
  margin: 0 10px 0 0;
  border: 1px solid #aeaeae;
  border-radius: 10%;
  padding: 3px 5px;
`;

export const SubTitleBox = styled.div`
  display: flex;
  align-items: center;
`;
export const Text = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
export const SubTitle = styled.div`
  margin: 0 12px 0 0;
`;

export const ContentBox = styled.div`
  display: flex;
  align-items: center;
`;
export const ProductImg = styled.img`
  height: 500px;
`;

// ============================================
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;
export const RBox = styled(FlexColBetween)`
  margin: 0 0 0 20px;
  height: 500px;
  align-items: stretch;
`;
export const Price = styled.div`
  margin: 10px 0;
  font-size: 40px;
  font-weight: 900;
`;

export const Tt = styled.div`
  margin: 10px 10px 10px 0;
`;
export const DiscountPercentage = styled.div`
  color: red;
`;
export const OriginalPrice = styled.div`
  margin: 0 20px 0 0;
  font-size: 25px;
  text-decoration: line-through;
`;

export const Stock = styled.div``;
export const AvailabilityStatus = styled.div``;

export const Rating = styled.div``;

const Bt = styled(FlexCenter)`
  width: 100px;
  height: 50px;

  border: 1px solid black;
  background: none;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    font-weight: 600;
  }
`;
export const SellBt = styled(Bt)`
  margin: 0 10px 0 0;
`;
export const CartBt = styled(Bt)``;

export const Description = styled.div`
  margin: 30px 0;
  font-size: 18px;
`;
