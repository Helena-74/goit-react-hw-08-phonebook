import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserEmail } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/operations';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.user_menu}>
      <p>{userEmail}</p>
      <button className={styles.button_logout} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
