import Airpodmax from './airpodsmax/Airpodmax.container';
import Iphone14pro from './iphone14Pro/Iphone14Pro.container';
import Macbookpro14 from './mackbookpro14/Macbookpro14.container';
import Playstation5 from './playstation5/Playstation5.container';
import Visionpro from './visionpro/Visonpro.container';
import * as S from './HeroBanner.styled';

const HeroBannerUI = () => {
  return (
    <S.Wrapper>
      <S.BannerBox>
        <Iphone14pro />
      </S.BannerBox>
      <S.SideBannerBox>
        <S.SmallBannerBox>
          <Playstation5 />
          <S.ToSmallBox>
            <Airpodmax />
            <Visionpro />
          </S.ToSmallBox>
        </S.SmallBannerBox>
        <Macbookpro14 />
      </S.SideBannerBox>
    </S.Wrapper>
  );
};

export default HeroBannerUI;
