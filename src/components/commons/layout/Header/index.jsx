import { Link } from 'react-router-dom';
import * as S from './Header.styled';

const Header = () => {
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
          <S.LinkSt to='/'>
            <S.Menu>Home</S.Menu>
          </S.LinkSt>
          <S.LinkSt to='/about'>
            <S.Menu>About</S.Menu>
          </S.LinkSt>
          <S.LinkSt to='/contact'>
            <S.Menu>Contact Us</S.Menu>
          </S.LinkSt>
          <S.LinkSt to='/blog'>
            <S.Menu>Blog</S.Menu>
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
