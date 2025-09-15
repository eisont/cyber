import * as S from './MyPage.styled';
import ProfileCard from '@/pages/Mypage/ui/ProfileCard';
import PersonalCard from '@/pages/Mypage/ui/PersonalCard';
import AddressCard from '@/pages/Mypage/ui/AddressCard';
import WorkEduCard from '@/pages/Mypage/ui/WorkEduCard';
import FinanceCard from '@/pages/Mypage/ui/FinanceCard';
import SystemCard from '@/pages/Mypage/ui/SystemCard';
import { useSelector } from 'react-redux';
import CartCard from '@/pages/Mypage/ui/Cart';

// props로 user 주입 or 전역(store)에서 select
const MyPage = () => {
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <S.Wrapper>
      <S.Grid>
        <div>
          <ProfileCard user={userInfo} />
        </div>
        <div>
          <PersonalCard user={userInfo} />
          <AddressCard user={userInfo} />
          <WorkEduCard user={userInfo} />
          <FinanceCard user={userInfo} />
          <SystemCard user={userInfo} />
          <CartCard />
        </div>
      </S.Grid>
    </S.Wrapper>
  );
};

export default MyPage;
