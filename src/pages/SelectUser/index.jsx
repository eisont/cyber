import { useFetch } from '@/shared/hooks/useFetchHooks';
import * as S from './SelectUser.styled';
import UserCard from '@/pages/SelectUser/ui/UserCard';

const SelectUser = () => {
  const [data, isLoading] = useFetch({ resource: 'users', enabled: true });
  const usersData = data?.users;

  return (
    <S.Wrapper>
      <S.Main>
        <S.Title>유저 선택</S.Title>
        {/* <S.Bt>유저 삭제</S.Bt> */}
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
