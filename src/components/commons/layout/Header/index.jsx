import { Link, useLocation } from 'react-router-dom';
import * as S from './Header.styled';

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <S.Wrapper>
      <S.TotalBox>
        <Link to='/'>
          <S.Logo src='../../../../../public/logo/logo.png' />
        </Link>
        <S.InputBox>
          <S.SearchIcon src='../../../../../public/icon/Search.png' />
          <S.Input type='text' placeholder='Search'></S.Input>
        </S.InputBox>
        <S.MenuBox>
          <S.LinkSt to='/' pathname={pathname === '/'}>
            Home
          </S.LinkSt>
          <S.LinkSt to='/about' pathname={pathname === '/about'}>
            About
          </S.LinkSt>
          <S.LinkSt to='/contact' pathname={pathname === '/contact'}>
            Contact Us
          </S.LinkSt>
          <S.LinkSt to='/blog' pathname={pathname === '/blog'}>
            Blog
          </S.LinkSt>
        </S.MenuBox>
        <S.IconBox>
          <S.LinkSt to='/favorites'>
            <S.Icon src='../../../../../public/icon/Favorites.png' />
          </S.LinkSt>
          <S.LinkSt to='/cart'>
            <S.Icon src='../../../../../public/icon/Cart.png' />
          </S.LinkSt>
          <S.LinkSt to='/user'>
            <S.Icon src='../../../../../public/icon/User.png' />
          </S.LinkSt>
        </S.IconBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default Header;
