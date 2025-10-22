import * as S from '@/pages/MyPage/MyPage.styled';

const ProfileCard = ({ user, setToggle }) => {
  return (
    <S.Card>
      <S.Stack>
        <S.Avatar src={user.image} alt={user.username} />
        <div>
          <div style={{ fontSize: 20, fontWeight: 700 }}>
            {user.firstName} {user.lastName}
            {user.role && <S.Badge>{user.role}</S.Badge>}
          </div>
          <div>@{user.username}</div>
          <div>
            {user.age} · {user.gender} · {user.bloodGroup}
          </div>
        </div>
      </S.Stack>

      <S.NavButtons>
        <S.Button onClick={() => setToggle(true)}>마이페이지</S.Button>
        <S.Button onClick={() => setToggle(false)}>장바구니</S.Button>
      </S.NavButtons>
    </S.Card>
  );
};

export default ProfileCard;
