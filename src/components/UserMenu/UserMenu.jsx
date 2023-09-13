import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, selectUserEmail } from 'redux/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <p>{userEmail}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;