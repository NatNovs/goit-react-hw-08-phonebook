import { Button } from '@chakra-ui/react';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { selectUser } from 'store/auth/selectors';
import { logoutThunk } from 'store/auth/thunks';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleClick() {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => navigate('/login'))
      .catch(() => toast.error('Something went wrong!'));
  }
  return (
    <>
      <Button onClick={handleClick} variant="outline" p="5" mr="10" type="button">
        Logout
      </Button>
      <p>{user.email}</p>
    </>
  );
};

export default UserMenu;