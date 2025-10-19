import { useFetch } from '@/shared/hooks/useFetchHooks';
import UserCard from '@/pages/SelectUser/ui/UserCard';
import * as S from '@/pages/SelectUser/SelectUser.styled';

const SelectUser = () => {
  const [data, isLoading] = useFetch({ resource: 'users', enabled: true });
  const usersData = data?.users;

  return (
    <S.Wrapper>
      <S.Main>
        <S.Title>유저 선택</S.Title>
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
