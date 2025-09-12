import { useFetch } from '@/shared/hooks/useFetchHooks';
import * as S from './SelectUser.styled';
import UserCard from '@/pages/SelectUser/ui/UserCard';
import { useDispatch } from 'react-redux';
import { userTokenSlice } from '@/redux';

const SelectUser = () => {
  const [data, isLoading] = useFetch({ query: 'https://dummyjson.com/users' });
  const usersData = data?.users;
  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <S.Main>
        <S.Title>유저 선택</S.Title>
        <S.Bt onClick={() => dispatch(userTokenSlice.actions.clearUser())}>유저 삭제</S.Bt>
        <S.UsersBox>
          {usersData?.map((el) => (
            <UserCard key={el.id} user={el} isLoading={isLoading} />
          ))}
        </S.UsersBox>
      </S.Main>
    </S.Wrapper>
  );
};

export default SelectUser;
