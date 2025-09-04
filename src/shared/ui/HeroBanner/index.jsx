import Iphone13Pro from './Iphone13Pro';
import PlayStation5 from './PlayStation5';
import AirpodMax from './AirpodMax';
import MacbookPro14 from './MacbookPro14';
import VisionPro from './VisonPro';
import styled from '@emotion/styled';
import { FlexBetween, FlexColBetween } from '@/shared/assets/styled/CommonStyled';

const Wrapper = styled(FlexColBetween)`
  height: 1232px;
`;

const BannerBox = styled.div`
  width: 100%;
  height: 632px;
  display: flex;
  justify-content: center;
  background: #211c24;
`;

const SideBannerBox = styled(FlexBetween)`
  width: 1440px;
  height: 600px;
`;
const SmallBannerBox = styled(FlexColBetween)`
  width: 720px;
  height: 600px;
`;
const ToSmallBox = styled(FlexBetween)``;

const HeroBanner = () => {
  return (
    <Wrapper>
      <BannerBox>
        <Iphone13Pro />
      </BannerBox>
      <SideBannerBox>
        <SmallBannerBox>
          <PlayStation5 />
          <ToSmallBox>
            <AirpodMax />
            <VisionPro />
          </ToSmallBox>
        </SmallBannerBox>
        <MacbookPro14 />
      </SideBannerBox>
    </Wrapper>
  );
};

export default HeroBanner;
