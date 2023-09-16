import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserEmail } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>{userEmail}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
