import { useAppSelector } from '@/redux/hooks';
import { useState } from 'react';
import CartCard from '@/pages/MyPage/ui/Cart';
import { ProfileCard, PersonalCard, AddressCard, WorkEduCard, FinanceCard, SystemCard } from '@/pages/MyPage/ui';
import * as S from '@/pages/MyPage/MyPage.styled';
import type { User } from '@/shared/types/api/user';

type UserInfo = Partial<User>;

const MyPage = () => {
  const userInfo: UserInfo = useAppSelector((state) => state.userInfo);
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <S.Wrapper>
      <S.Grid>
        <div>
          <ProfileCard user={userInfo} setToggle={setToggle} />
        </div>
        <div>
          {toggle && (
            <>
              <PersonalCard user={userInfo} />
              <AddressCard user={userInfo} />
              <WorkEduCard user={userInfo} />
              <FinanceCard user={userInfo} />
              <SystemCard user={userInfo} />
            </>
          )}
          {!toggle && <CartCard />}
        </div>
      </S.Grid>
    </S.Wrapper>
  );
};

export default MyPage;
