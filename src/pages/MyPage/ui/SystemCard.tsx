import * as S from '@/pages/MyPage/MyPage.styled';
import type { User } from '@/shared/types/api/user';

type SystemCardProps = {
  user: Partial<User>;
};

const SystemCard = ({ user }: SystemCardProps) => {
  return (
    <S.Card>
      <S.Title>시스템 정보</S.Title>
      <S.Row>
        <S.Label>IP</S.Label>
        <S.Value>{user.ip ?? '-'}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>MAC</S.Label>
        <S.Value>{user.macAddress ?? '-'}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>SSN</S.Label>
        <S.Value>{user.ssn ?? '-'}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>UserAgent</S.Label>
        <S.Value>{user.userAgent ?? '-'}</S.Value>
      </S.Row>
    </S.Card>
  );
};

export default SystemCard;
