import styled from '@emotion/styled';
import { FlexBt, FlexColBetween, FlexDiv } from '../../../../shared/assets/styled/CommonStyled';

export const Wrapper = styled(FlexDiv)`
  margin: 10px 0;
  width: 266px;
  height: 432px;

  background: #f6f6f6;
  border-radius: 10px;
  cursor: default;
`;

export const MainBox = styled(FlexColBetween)`
  width: 234px;
  height: 390px;
`;
export const IconBox = styled.div`
  width: 234px;
  display: flex;
  justify-content: end;
`;
export const LikeIcon = styled(FlexDiv)`
  :hover {
    cursor: pointer;
  }
`;
export const ImgBox = styled.img`
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
export const Button = styled(FlexBt)`
  width: 188px;
  height: 48px;
  font-size: 14px;

  border-radius: 8px;
  background: #000;
  color: #fff;

  :hover {
    cursor: pointer;
  }
`;
