import { useSelector } from 'react-redux';
import { useState } from 'react';
import CartCard from '@/pages/Mypage/ui/Cart';
import {
  ProfileCard,
  PersonalCard,
  AddressCard,
  WorkEduCard,
  FinanceCard,
  SystemCard,
} from '@/pages/Mypage/ui';
import * as S from '@/pages/Mypage/Mypage.styled';

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
