import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userTokenSlice } from '@/redux';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;

  &:hover .hiddenbox {
    opacity: 1;
  }
`;
const Img = styled.img`
  width: 150px;
  height: 150px;
`;
const HiddenBox = styled(Link)`
  width: 150px;
  height: 150px;
  border-radius: 10%;
  position: absolute;
  top: 0;

  background: rgb(0, 0, 0, 0.5);
  color: #fff;
  font-size: 30px;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  opacity: 0;
  transition: opacity 0.3s ease;
  text-decoration: none;
`;
const UserCard = (pr) => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState();

  const fetchUserAndNavigate = () => {
    getUserData({ username: pr.user.username, password: pr.user.password, expiresInMins: 30 });
  };
  const getUserData = (value) => {
    setLoginData(value);
  };
  useEffect(() => {
    if (!loginData) return;
    try {
      const login = async () => {
        const res = await axios.post('https://dummyjson.com/user/login', loginData);
        dispatch(userTokenSlice.actions.setUser(res.data));
      };
      login();
    } catch (err) {
      console.error(err);
    }
  }, [dispatch, loginData]);

  return (
    <Wrapper>
      <Img src={pr.user.image} />
      <HiddenBox onClick={() => fetchUserAndNavigate()} className='hiddenbox'>
        {pr.user.username}
      </HiddenBox>
    </Wrapper>
  );
};

export default UserCard;
