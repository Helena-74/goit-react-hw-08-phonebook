import { NavLink } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';

export const AuthNav = () => {
  return (
    <div className={styles.nav}>
      <NavLink className={styles.link} to="/register">
        Register
      </NavLink>
      <NavLink className={styles.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};



