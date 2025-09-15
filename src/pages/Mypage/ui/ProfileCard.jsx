// ProfileCard.jsx
import * as S from '../MyPage.styled';
export default function ProfileCard({ user }) {
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
    </S.Card>
  );
}
