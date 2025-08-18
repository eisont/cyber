import * as S from './AirpodMax.styled';

const AirpodMax = () => {
  return (
    <S.Wrapper>
      <S.AirpodmaxImg src='../../../../../public/HeroBanner/airpodmax.png' />
      <S.AirpodmaxTextBox>
        <S.TitleText>
          <span style={{ fontWeight: '300' }}>Apple AirPods</span> Max
        </S.TitleText>
        <S.SubText>Computational audio. Listen, it's powerful</S.SubText>
      </S.AirpodmaxTextBox>
    </S.Wrapper>
  );
};

export default AirpodMax;
