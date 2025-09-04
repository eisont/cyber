import { LogoSVG } from '@/shared/assets/SVGicons/logo';
import { SearchSVG } from '@/shared/assets/SVGicons/24pxIcon';
import * as S from './Header.styled';
import { BagSVG, Search32pxSVG } from '@/shared/assets/SVGicons/32pxIcon';
import { useDispatch } from 'react-redux';
import { searchSlice } from '../../../redux/redux';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.FlexBox>
          <S.Icon to='/'>{LogoSVG({ color: '#000' })}</S.Icon>
          {pathname === '/products' && (
            <S.InputBox>
              <S.SearchIcon>
                <S.Icon>{SearchSVG({ color: '#989898' })}</S.Icon>
              </S.SearchIcon>
              <S.Input placeholder='Search' onChange={(e) => dispatch(searchSlice.actions.setSearchData(e.target.value))} />
            </S.InputBox>
          )}
        </S.FlexBox>
        <S.IconBox>
          {/* <S.LinkSt to='/favorites'> */}
          {/* <S.Icon>{FavoritesSVG({ color: '#191919' })}</S.Icon> */}
          {/* </S.LinkSt> */}
          {/* <S.LinkSt to='/cart'> */}
          <S.Icon to={'./products'}>{Search32pxSVG({ color: '#191919' })}</S.Icon>
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
