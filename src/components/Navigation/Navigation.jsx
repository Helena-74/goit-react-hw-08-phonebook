import { NavLink } from "react-router-dom";
import { useAuth } from "redux/auth/useAuth";
import styles from '../App.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={styles.link} to="{HOME_ROUTE}">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={styles.link} to="{CONTACTS_ROUTE}">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};