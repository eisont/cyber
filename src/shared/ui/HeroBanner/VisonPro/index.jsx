import * as S from './VisionPro.styled';

const VisionPro = () => {
  return (
    <S.Wrapper>
      <S.VisionproImg src='img/HeroBanner/visionpro.webp' alt='visionpro' />
      <S.VisionproTextBox>
        <S.TitleText>
          <span style={{ fontWeight: '200' }}>
            Apple
            <br /> Vision
          </span>{' '}
          Pro
        </S.TitleText>
        <S.SubText>An immersive way to experience entertainment</S.SubText>
      </S.VisionproTextBox>
    </S.Wrapper>
  );
};

export default VisionPro;
