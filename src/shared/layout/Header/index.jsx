import { LogoSVG } from '@/shared/assets/SVGicons/logo';
import { SearchSVG } from '@/shared/assets/SVGicons/24pxIcon';
import * as S from './Header.styled';
import { BagSVG } from '@/shared/assets/SVGicons/32pxIcon';

const Header = () => {
  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.FlexBox>
          <S.LinkSt to='/'>
            <S.Icon>{LogoSVG({ color: '#000' })}</S.Icon>
          </S.LinkSt>
          <S.InputBox>
            <S.SearchIcon>
              <S.Icon>{SearchSVG({ color: '#989898' })}</S.Icon>
            </S.SearchIcon>
            <S.Input type='text' placeholder='Search'></S.Input>
          </S.InputBox>
        </S.FlexBox>
        <S.IconBox>
          {/* <S.LinkSt to='/favorites'> */}
          {/* <S.Icon>{FavoritesSVG({ color: '#191919' })}</S.Icon> */}
          {/* </S.LinkSt> */}
          {/* <S.LinkSt to='/cart'> */}
          <S.Icon>{BagSVG({ color: '#191919' })}</S.Icon>
          {/* </S.LinkSt> */}
          {/* <S.LinkSt to='/user'> */}
          {/* <S.Icon>{UserSVG({ color: '#191919' })}</S.Icon> */}
          {/* </S.LinkSt> */}
        </S.IconBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default Header;
