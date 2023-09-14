import { lazy } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../components/App.module.css';
import { useAuth } from 'redux/useAuth';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export const HOME_ROUTE = "/";
export const CONTACTS_ROUTE = "/contacts";
export const LOGIN_ROUTE = "/login";
export const REGISTER_ROUTE = "/register";

export const appRoutes = [
  {
    path: HOME_ROUTE,
    element: <HomePage/>,
  },
  {
    path: CONTACTS_ROUTE,
    element: <ContactsPage/>,
  },
  {
    path: LOGIN_ROUTE,
    element: <LoginPage/>,
  },
  {
    path: REGISTER_ROUTE,
    element: <RegisterPage/>,
  },
];

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

