import { LogoSVG } from '@/shared/assets/SVGicons';
import { SearchSVG, CloseSVG } from '@/shared/assets/SVGicons';
import { BagSVG } from '@/shared/assets/SVGicons';
import { searchSlice } from '@/redux';
import { Link, useLocation } from 'react-router-dom';
import { MenuSVG } from '@/shared/assets/SVGicons';
import * as S from '@/shared/layout/Header/Header.styled';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const Header = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const pathname = location.pathname;
  const userInfo = useAppSelector((state) => state.userInfo);

  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.FlexBox>
          <S.IconLink to='/'>{LogoSVG({ width: '96', height: '32', color: '#000' })}</S.IconLink>
          <S.MobileIconLink to='/'>{LogoSVG({ width: '54', height: '18', color: '#000' })}</S.MobileIconLink>

          {pathname === '/search' && (
            <S.InputBox>
              <S.SearchIcon>
                <S.Icon>{SearchSVG({ size: '24', color: '#989898' })}</S.Icon>
              </S.SearchIcon>
              <S.Input placeholder='Search' onChange={(e) => dispatch(searchSlice.actions.setSearchData(e.target.value))} />
            </S.InputBox>
          )}
        </S.FlexBox>

        <S.IconBox>
          {pathname === '/search' ? (
            <S.IconLink to={'/'}>{CloseSVG({ size: '34', color: '#191919' })}</S.IconLink>
          ) : (
            <S.IconLink to={'/search'}>{SearchSVG({ size: '32', color: '#191919' })}</S.IconLink>
          )}

          {!userInfo.username ? (
            <S.Bt to={'/selectUser'}>유저 선택</S.Bt>
          ) : (
            <>
              <Link to={'/selectUser'}>
                <S.Img src={userInfo?.image} alt={userInfo?.username} />
              </Link>

              <S.IconLink to={`/${userInfo.username}`}>{BagSVG({ size: '32', color: '#191919' })}</S.IconLink>
            </>
          )}
          <S.MobileIcon>{MenuSVG({ size: '20', color: '#191919' })}</S.MobileIcon>
        </S.IconBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default Header;
