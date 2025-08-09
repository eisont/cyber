import * as S from './Footer.styled';

const FooterUI = () => {
  return (
    <>
      <S.Wrapper>
        <S.TotalBox>
          <S.TextBox>
            <S.Box1>
              <S.Logo src='../../../../../public/logo/Color=White.png' />
              <S.Stext>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</S.Stext>
            </S.Box1>
            <S.Box2>
              <S.Stitle>Services</S.Stitle>
              <S.Stext>Bonus program</S.Stext>
              <S.Stext>Gift cards</S.Stext>
              <S.Stext>Credit and payment</S.Stext>
              <S.Stext>Service contracts</S.Stext>
              <S.Stext>Non-cash account</S.Stext>
              <S.Stext>Payment</S.Stext>
            </S.Box2>
            <S.Box3>
              <S.Stitle>Assistance to the buyer</S.Stitle>
              <S.Stext>Find an order</S.Stext>
              <S.Stext>Terms of delivery</S.Stext>
              <S.Stext>Exchange and return of goods</S.Stext>
              <S.Stext>Guarantee</S.Stext>
              <S.Stext>Frequently asked questions</S.Stext>
              <S.Stext>Terms of use of the site</S.Stext>
            </S.Box3>
          </S.TextBox>
          <S.SnsBox>
            <S.Snslogo src='../../../../../public/icon/Twitter.png' />
            <S.Snslogo src='../../../../../public/icon/Facebook.png' />
            <S.Snslogo src='../../../../../public/icon/Tiktok.png' />
            <S.Snslogo src='../../../../../public/icon/Instagram.png' />
          </S.SnsBox>
        </S.TotalBox>
      </S.Wrapper>
    </>
  );
};

export default FooterUI;
