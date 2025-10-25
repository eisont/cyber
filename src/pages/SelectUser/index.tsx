import { useFetch } from '@/shared/hooks/useFetchHooks';
import UserCard from '@/pages/SelectUser/ui/UserCard';
import * as S from '@/pages/SelectUser/SelectUser.styled';
import type { UsersResponse } from '@/shared/types/api/user';

const SelectUser = () => {
  const [usersResponse, isLoading] = useFetch<UsersResponse>({
    resource: 'users',
    enabled: true,
    initialData: { users: [], total: 0, skip: 0, limit: 0 },
  });
  const users = usersResponse.users;

  return (
    <S.Wrapper>
      <S.Main>
        <S.Title>유저 선택</S.Title>
        <S.UsersBox>
          {users.map((user) => (
            <UserCard key={user.id} user={user} isLoading={isLoading} />
          ))}
        </S.UsersBox>
      </S.Main>
    </S.Wrapper>
  );
};

export default SelectUser;
