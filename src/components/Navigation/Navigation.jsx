import { NavLink } from "react-router-dom";
import { useAuth } from "redux/auth/useAuth";
import styles from './Navigation.module.css';
import { CONTACTS_ROUTE, HOME_ROUTE } from 'config/routes';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={styles.nav}>
      <NavLink className={styles.link} to={HOME_ROUTE}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={styles.link} to={CONTACTS_ROUTE}>
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};