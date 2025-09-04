import { LogoSVG } from '@/shared/assets/SVGicons/logo';
import { FavoritesSVG, UserSVG, CartSVG } from '@/shared/assets/SVGicons/32pxIcon';
import { SearchSVG } from '@/shared/assets/SVGicons/24pxIcon';
import * as S from './Header.styled';

const Header = () => {
  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.FlexBox>
          <S.LinkSt to='/'>
            <S.Icon>{LogoSVG('#000')}</S.Icon>
          </S.LinkSt>
          <S.InputBox>
            <S.SearchIcon>
              <S.Icon>{SearchSVG('#989898')}</S.Icon>
            </S.SearchIcon>
            <S.Input type='text' placeholder='Search'></S.Input>
          </S.InputBox>
        </S.FlexBox>
        <S.IconBox>
          {/* <S.LinkSt to='/favorites'> */}
          <S.Icon>{FavoritesSVG('#191919')}</S.Icon>
          {/* </S.LinkSt> */}
          {/* <S.LinkSt to='/cart'> */}
          <S.Icon>{CartSVG('#191919')}</S.Icon>
          {/* </S.LinkSt> */}
          {/* <S.LinkSt to='/user'> */}
          <S.Icon>{UserSVG('#191919')}</S.Icon>
          {/* </S.LinkSt> */}
        </S.IconBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default Header;
