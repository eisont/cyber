import * as S from '@/pages/MyPage/MyPage.styled';
import type { User } from '@/shared/types/api/user';

type PersonalCardProps = {
  user: Partial<User>;
};

const PersonalCard = ({ user }: PersonalCardProps) => {
  const hairInfo = user.hair?.color
    ? `${user.hair.color}${user.hair?.type ? `/${user.hair.type}` : ''}`
    : undefined;
  const appearance = [user.eyeColor, hairInfo].filter(Boolean).join(' · ') || '-';
  const bodyMetrics =
    [user.height && `${user.height}cm`, user.weight && `${user.weight}kg`]
      .filter(Boolean)
      .join(' · ') || '-';

  return (
    <S.Card>
      <S.Title>개인 정보</S.Title>
      <S.Row>
        <S.Label>이메일</S.Label>
        <S.Value>{user.email ?? '-'}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>전화</S.Label>
        <S.Value>{user.phone ?? '-'}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>생년월일</S.Label>
        <S.Value>{user.birthDate ?? '-'}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>눈/머리</S.Label>
        <S.Value>{appearance}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>키/몸무게</S.Label>
        <S.Value>{bodyMetrics}</S.Value>
      </S.Row>
    </S.Card>
  );
};

export default PersonalCard;
