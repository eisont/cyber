import { FacebookSVG, InstagramSVG, TitokSVG, TwitterSVG } from '@/shared/assets/SVGicons';
import { LogoSVG } from '@/shared/assets/SVGicons';
import * as S from './Footer.styled';

const Footer = () => {
  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.TextBox>
          <S.Box1>
            <S.Logo>{LogoSVG({ width: '96', height: '32', color: '#fff' })}</S.Logo>
            <S.MobileLogo>{LogoSVG({ width: '54', height: '18', color: '#fff' })}</S.MobileLogo>
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
          <S.Snslogo>{TwitterSVG({ size: '16', color: '#fff' })}</S.Snslogo>
          <S.Snslogo>{FacebookSVG({ size: '16', color: '#fff' })}</S.Snslogo>
          <S.Snslogo>{TitokSVG({ size: '16', color: '#fff' })}</S.Snslogo>
          <S.Snslogo>{InstagramSVG({ size: '16', color: '#fff', color2: '#000' })}</S.Snslogo>
        </S.SnsBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default Footer;
