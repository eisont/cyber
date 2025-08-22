import Iphone13Pro from './Iphone13Pro';
import PlayStation5 from './PlayStation5';
import AirpodMax from './AirpodMax';
import MacbookPro14 from './MacbookPro14';
import VisionPro from './VisonPro';
import * as S from './HeroBanner.styled';

const HeroBanner = () => {
  return (
    <S.Wrapper>
      <S.BannerBox>
        <Iphone13Pro />
      </S.BannerBox>
      <S.SideBannerBox>
        <S.SmallBannerBox>
          <PlayStation5 />
          <S.ToSmallBox>
            <AirpodMax />
            <VisionPro />
          </S.ToSmallBox>
        </S.SmallBannerBox>
        <MacbookPro14 />
      </S.SideBannerBox>
    </S.Wrapper>
  );
};

export default HeroBanner;
