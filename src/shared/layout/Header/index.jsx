import { LogoSVG } from '@/shared/assets/SVGicons';
import { SearchSVG, CloseSVG } from '@/shared/assets/SVGicons';
import { BagSVG } from '@/shared/assets/SVGicons';
import { useDispatch, useSelector } from 'react-redux';
import { searchSlice } from '@/redux';
import { Link, useLocation } from 'react-router-dom';
import { MenuSVG } from '@/shared/assets/SVGicons';
import * as S from '@/shared/layout/Header/Header.styled';

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.FlexBox>
          <S.Icon to='/'>{LogoSVG({ width: '96', height: '32', color: '#000' })}</S.Icon>
          <S.MobileIcon to='/'>{LogoSVG({ width: '54', height: '18', color: '#000' })}</S.MobileIcon>

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
          {pathname === '/products' ? <S.Icon to={'/'}>{CloseSVG({ size: '34', color: '#191919' })}</S.Icon> : <S.Icon to={'/products'}>{SearchSVG({ size: '32', color: '#191919' })}</S.Icon>}

          {!userInfo ? (
            <S.Bt to={'/selectUser'}>유저 선택</S.Bt>
          ) : (
            <>
              <Link to={'/selectUser'}>
                <S.Img src={userInfo.image} alt={userInfo.username} />
              </Link>

              <S.Icon to={`/${userInfo.username}`}>{BagSVG({ size: '32', color: '#191919' })}</S.Icon>
            </>
          )}
          <S.MobileIcon>{MenuSVG({ size: '20', color: '#191919' })}</S.MobileIcon>
        </S.IconBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default Header;
