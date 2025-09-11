import Iphone13Pro from './Iphone13Pro';
import PlayStation5 from './PlayStation5';
import AirpodMax from './AirpodMax';
import MacbookPro14 from './MacbookPro14';
import VisionPro from './VisonPro';
import styled from '@emotion/styled';
import { FlexBetween, FlexColBetween } from '@/shared/assets/styled/CommonStyled';
import { BREAKPOINTS } from '@/shared/assets/styled/breakpoints';

const Wrapper = styled(FlexColBetween)`
  height: 1232px;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 100vw;
    height: auto;
  }
`;

const BannerBox = styled.div`
  width: 100%;
  height: 632px;
  display: flex;
  justify-content: center;
  background: #211c24;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;

const SideBannerBox = styled(FlexBetween)`
  width: 1440px;
  height: 600px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
const SmallBannerBox = styled(FlexColBetween)`
  width: 720px;
  height: 600px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
const ToSmallBox = styled(FlexBetween)`
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
const MobileBox = styled(FlexColBetween)`
  display: none;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: block;
  }
`;
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

      <MobileBox>
        <Iphone13Pro />
        {/* <PlayStation5 /> */}
        {/* <AirpodMax /> */}
        {/* <VisionPro /> */}
        {/* <MacbookPro14 /> */}
      </MobileBox>
    </Wrapper>
  );
};

export default HeroBanner;
