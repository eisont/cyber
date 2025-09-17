// PersonalCard.jsx
import * as S from '../MyPage.styled';
export default function PersonalCard({ user }) {
  return (
    <S.Card>
      <S.Title>개인 정보</S.Title>
      <S.Row>
        <S.Label>이메일</S.Label>
        <S.Value>{user.email}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>전화</S.Label>
        <S.Value>{user.phone}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>생년월일</S.Label>
        <S.Value>{user.birthDate}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>눈/머리</S.Label>
        <S.Value>
          {user.eyeColor} · {user.hair?.color}/{user.hair?.type}
        </S.Value>
      </S.Row>
      <S.Row>
        <S.Label>키/몸무게</S.Label>
        <S.Value>
          {user.height}cm · {user.weight}kg
        </S.Value>
      </S.Row>
    </S.Card>
  );
}
