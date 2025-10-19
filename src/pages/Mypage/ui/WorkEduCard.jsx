import * as S from '@/pages/Mypage/MyPage.styled';

const WorkEduCard = ({ user }) => {
  const c = user.company || {};

  return (
    <S.Card>
      <S.Title>직장 · 학력</S.Title>
      <S.Row>
        <S.Label>회사</S.Label>
        <S.Value>{c.name}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>부서/직함</S.Label>
        <S.Value>
          {c.department} · {c.title}
        </S.Value>
      </S.Row>
      <S.Row>
        <S.Label>대학교</S.Label>
        <S.Value>{user.university}</S.Value>
      </S.Row>
    </S.Card>
  );
};

export default WorkEduCard;
