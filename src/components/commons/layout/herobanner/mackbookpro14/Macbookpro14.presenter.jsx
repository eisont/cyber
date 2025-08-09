import * as S from './Macbookpro14.styled';

const Macbookpro14UI = () => {
  return (
    <S.Macbookpro14>
      <S.Macbookpro14TextBox>
        <S.TitleText>
          <span style={{ fontWeight: '100' }}>Macbook </span> Pro
        </S.TitleText>
        <S.SubText>The new 14‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</S.SubText>
        <S.Botton>Shop Now</S.Botton>
      </S.Macbookpro14TextBox>
      <S.Macbookpro14Img src='../../../../../public/HeroBanner/MacBookPro14.png' />
    </S.Macbookpro14>
  );
};

export default Macbookpro14UI;
