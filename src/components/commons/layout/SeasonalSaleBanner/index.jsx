import * as S from './SeasonalSaleBanner.styled';

const SeasonalSaleBanner = () => {
  return (
    <S.Wrapper>
      <S.Background>
        <S.Banner2TextBox>
          <S.TitleText>
            <span style={{ fontWeight: '100' }}>Big Summer </span> Sale
          </S.TitleText>
          <S.SubText>Commodo fames vitae vitae leo mauris in. Eu consequat.</S.SubText>
          <S.Botton>Shop Now</S.Botton>
        </S.Banner2TextBox>
      </S.Background>
    </S.Wrapper>
  );
};

export default SeasonalSaleBanner;
