import * as S from '@/pages/MyPage/MyPage.styled';
import type { User } from '@/shared/types/api/user';

type WorkEduCardProps = {
  user: Partial<User>;
};

const WorkEduCard = ({ user }: WorkEduCardProps) => {
  const company = user.company;

  return (
    <S.Card>
      <S.Title>직장 · 학력</S.Title>
      <S.Row>
        <S.Label>회사</S.Label>
        <S.Value>{company?.name ?? '-'}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>부서/직함</S.Label>
        <S.Value>
          {[company?.department, company?.title].filter(Boolean).join(' · ') || '-'}
        </S.Value>
      </S.Row>
      <S.Row>
        <S.Label>대학교</S.Label>
        <S.Value>{user.university ?? '-'}</S.Value>
      </S.Row>
    </S.Card>
  );
};

export default WorkEduCard;
