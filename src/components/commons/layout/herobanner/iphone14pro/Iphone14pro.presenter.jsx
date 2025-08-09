import * as S from './Iphone14pro.styled';

const Iphone14proUI = () => {
  return (
    <S.Iphone14Pro>
      <S.Iphone14ProTextBox>
        <S.HeadText>Pro.Beyond.</S.HeadText>
        <S.TitleText>
          <span style={{ fontWeight: '100' }}>IPhone 14</span> Pro
        </S.TitleText>
        <S.SubText>Created to change everything for the better. For everyone</S.SubText>
        <S.Botton>Shop Now</S.Botton>
      </S.Iphone14ProTextBox>
      <S.Iphone14ProImg src='../../../../../public/HeroBanner/Iphone14pro.png' />
    </S.Iphone14Pro>
  );
};

export default Iphone14proUI;
