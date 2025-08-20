import { Link } from 'react-router-dom';
import * as S from './Header.styled';

const Header = () => {
  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.FlexBox>
          <Link to='/'>
            <S.Logo src='../../../../../public/logo/logo.png' />
          </Link>
          <S.InputBox>
            <S.SearchIcon src='../../../../../public/icon/Search.png' />
            <S.Input type='text' placeholder='Search'></S.Input>
          </S.InputBox>
        </S.FlexBox>
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
