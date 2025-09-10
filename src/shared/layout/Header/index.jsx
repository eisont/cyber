import { LogoSVG } from '@/shared/assets/SVGicons';
import { SearchSVG, CloseSVG } from '@/shared/assets/SVGicons';
import * as S from './Header.styled';
import { BagSVG } from '@/shared/assets/SVGicons';
import { useDispatch } from 'react-redux';
import { searchSlice } from '@/redux';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.FlexBox>
          <S.Icon to='/'>{LogoSVG({ width: '96', height: '32', color: '#000' })}</S.Icon>
          {pathname === '/products' && (
            <S.InputBox>
              <S.SearchIcon>
                <S.Icon>{SearchSVG({ size: '24', color: '#989898' })}</S.Icon>
              </S.SearchIcon>
              <S.Input placeholder='Search' onChange={(e) => dispatch(searchSlice.actions.setSearchData(e.target.value))} />
            </S.InputBox>
          )}
        </S.FlexBox>
        <S.IconBox>
          {/* <S.LinkSt to='/favorites'> */}
          {/* <S.Icon>{FavoritesSVG({ size: '32', color: '#191919' })}</S.Icon> */}
          {/* </S.LinkSt> */}
          {/* <S.LinkSt to='/cart'> */}

          {pathname === '/products' ? <S.Icon to={'./'}>{CloseSVG({ size: '34', color: '#191919' })}</S.Icon> : <S.Icon to={'./products'}>{SearchSVG({ size: '32', color: '#191919' })}</S.Icon>}
          <S.Icon>{BagSVG({ size: '32', color: '#191919' })}</S.Icon>
          {/* </S.LinkSt> */}
          {/* <S.LinkSt to='/user'> */}
          {/* <S.Icon>{UserSVG({ size: '32', color: '#191919' })}</S.Icon> */}
          {/* </S.LinkSt> */}
        </S.IconBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default Header;
