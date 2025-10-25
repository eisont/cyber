import { type Dispatch, type SetStateAction, useMemo } from 'react';
import * as S from '@/pages/MyPage/MyPage.styled';
import type { User } from '@/shared/types/api/user';

type ProfileCardProps = {
  user: Partial<User>;
  setToggle: Dispatch<SetStateAction<boolean>>;
};

const ProfileCard = ({ user, setToggle }: ProfileCardProps) => {
  const { firstName, lastName, age, gender, bloodGroup } = user;
  const fullName = useMemo(() => {
    const safeFirstName = firstName ?? '';
    const safeLastName = lastName ?? '';
    return `${safeFirstName} ${safeLastName}`.trim();
  }, [firstName, lastName]);

  const profileMeta = useMemo(
    () => [age, gender, bloodGroup].filter(Boolean).join(' · '),
    [age, gender, bloodGroup]
  );

  return (
    <S.Card>
      <S.Stack>
        <S.Avatar src={user.image ?? ''} alt={user.username ?? 'user-avatar'} />
        <div>
          <div style={{ fontSize: 20, fontWeight: 700 }}>
            {fullName || '로그인이 필요합니다'}
            {user.role && <S.Badge>{user.role}</S.Badge>}
          </div>
          {user.username && <div>@{user.username}</div>}
          <div>{profileMeta || '-'}</div>
        </div>
      </S.Stack>

      <S.NavButtons>
        <S.Button type="button" onClick={() => setToggle(true)}>
          마이페이지
        </S.Button>
        <S.Button type="button" onClick={() => setToggle(false)}>
          장바구니
        </S.Button>
      </S.NavButtons>
    </S.Card>
  );
};

export default ProfileCard;
