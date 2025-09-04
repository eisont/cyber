import * as S from './AirpodMax.styled';

const AirpodMax = () => {
  return (
    <S.Wrapper>
      <S.AirpodmaxImg src='img/HeroBanner/airpodmax.webp' alt='airpodmax' />
      <S.AirpodmaxTextBox>
        <S.TitleText>
          <span style={{ fontWeight: '200' }}>Apple AirPods</span> Max
        </S.TitleText>
        <S.SubText>Computational audio. Listen, it's powerful</S.SubText>
      </S.AirpodmaxTextBox>
    </S.Wrapper>
  );
};

export default AirpodMax;
