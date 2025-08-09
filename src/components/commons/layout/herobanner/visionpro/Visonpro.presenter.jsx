import * as S from './Visonpro.styled';

const VisionproUI = () => {
  return (
    <S.Visionpro>
      <S.VisionproImg src='../../../../../public/HeroBanner/Visionpro.png' />
      <S.VisionproTextBox>
        <S.TitleText>
          <span style={{ fontWeight: '300' }}>
            Apple
            <br /> Vision
          </span>{' '}
          Pro
        </S.TitleText>
        <S.SubText>An immersive way to experience entertainment</S.SubText>
      </S.VisionproTextBox>
    </S.Visionpro>
  );
};

export default VisionproUI;
