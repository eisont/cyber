import styled from '@emotion/styled';
import { BREAKPOINTS } from '@/shared/assets/styled/breakpoints';

const Wrapper = styled.div`
  width: 360px;
  height: 272px;
  display: flex;
  align-items: center;
  background: #ededed;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 100vw;
    height: 376px;
    flex-direction: column;
    justify-content: center;
  }
`;
const AirpodmaxImg = styled.img`
  width: 104px;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
const MobileAirpodmaxImg = styled.img`
  display: none;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: block;
    width: 192px;
  }
`;

const AirpodmaxTextBox = styled.div`
  margin: 0 0 0 40px;
  width: 160px;
  cursor: default;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 20px 0 0 0;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TitleText = styled.div`
  width: 140px;
  font-size: 28px;
  font-weight: 500;
  color: #000;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 100%;
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
  }
`;
const ThinTitle = styled.div`
  font-weight: 200;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 0 10px 0 0;
  }
`;
const SubText = styled.div`
  margin: 10px 0 0 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(144, 144, 144);
  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 0;
  }
`;

const AirpodMax = () => {
  return (
    <Wrapper>
      <AirpodmaxImg src='img/HeroBanner/airpodmax.webp' alt='airpodmax' />
      <MobileAirpodmaxImg src='img/mobile/airpodmax.webp' alt='airpodmax' />
      <AirpodmaxTextBox>
        <TitleText>
          <ThinTitle>Apple AirPods</ThinTitle> Max
        </TitleText>
        <SubText>Computational audio. Listen, it's powerful</SubText>
      </AirpodmaxTextBox>
    </Wrapper>
  );
};

export default AirpodMax;
