import * as S from '@/pages/Mypage/MyPage.styled';
import {
  AddressCard,
  FinanceCard,
  PersonalCard,
  ProfileCard,
  SystemCard,
  WorkEduCard,
} from '@/pages/Mypage/ui';
import CartCard from '@/pages/Mypage/ui/Cart';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const MyPage = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const [toggle, setToggle] = useState(false);

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
          {!toggle && <CartCard user={userInfo} />}
        </div>
      </S.Grid>
    </S.Wrapper>
  );
};

export default MyPage;
