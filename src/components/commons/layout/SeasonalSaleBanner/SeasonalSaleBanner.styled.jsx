import styled from '@emotion/styled';
import { FlexCenter } from '../../../../shared/assets/styled/CommonStyled';

export const Wrapper = styled(FlexCenter)`
  width: 100%;
`;
export const Background = styled(FlexCenter)`
  width: 1440px;
  height: 447px;

  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('../../../../../public/HeroBanner/SeasonalSaleBanner.png');
`;
export const Banner2TextBox = styled.div`
  text-align: center;
  cursor: default;
`;

export const TitleText = styled.div`
  font-size: 72px;
  font-weight: 500;
  letter-spacing: -1px;
  color: #fff;
`;
export const SubText = styled.div`
  font-size: 16px;
  color: rgba(100, 100, 100, 0.4);
`;
export const Botton = styled.button`
  margin: 20px 0 0 0;
  width: 191px;
  height: 56px;

  border: 1px solid #fff;
  background: none;
  font-size: 16px;
  color: #fff;
  border-radius: 6px;
  :hover {
    background: rgba(100, 100, 100, 0.4);
    cursor: pointer;
  }
`;
