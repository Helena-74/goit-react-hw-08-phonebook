import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CONTACTS_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from 'config/routes';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'redux/auth/useAuth';
import { refreshUser } from 'redux/auth/operations';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path={REGISTER_ROUTE}
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path={LOGIN_ROUTE}
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path={CONTACTS_ROUTE}
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;


