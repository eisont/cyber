import styled from '@emotion/styled';
import { useAppDispatch } from '@/redux/hooks';
import { loginDataSlice } from '@/redux';
import type { User } from '@/shared/types/api/user';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;

  &:hover .hiddenBox {
    opacity: 1;
  }
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10%;
  object-fit: cover;
`;

const HiddenBox = styled.button`
  width: 150px;
  height: 150px;
  border-radius: 10%;
  position: absolute;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
  opacity: 0;
  text-decoration: none;
  border: 0;
  cursor: pointer;
`;

type UserCardProps = {
  user: User;
  isLoading: boolean;
};

const UserCard = ({ user, isLoading }: UserCardProps) => {
  const dispatch = useAppDispatch();

  const handleSelectUser = () => {
    if (isLoading) return;

    dispatch(
      loginDataSlice.actions.setLoginData({
        username: user.username,
        password: user.password,
        expiresInMins: 30,
      })
    );
  };

  return (
    <Wrapper>
      <Avatar src={user.image} alt={user.username} loading="lazy" />
      <HiddenBox onClick={handleSelectUser} className="hiddenBox" type="button" aria-label={`${user.username} 선택`}>
        {user.username}
      </HiddenBox>
    </Wrapper>
  );
};

export default UserCard;
