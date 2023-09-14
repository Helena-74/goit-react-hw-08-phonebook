import React, { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HOME_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, appRoutes } from 'config/routes';
import { refreshUser } from 'redux/operations';
import { Layout } from './Layout';
import { useAuth } from 'redux/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
// import styles from './App.module.css';

const NotFound = lazy(() => import('../pages/NotFound'));

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
        <Route index element={<HOME_ROUTE />} />
        <Route
          path="{REGISTER_ROUTE}"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<REGISTER_ROUTE />} />
          }
        />
        <Route
          path="{LOGIN_ROUTE}"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LOGIN_ROUTE />} />
          }
        />
        <Route
          path="{CONTACTS_ROUTE}"
          element={
            <PrivateRoute redirectTo="/login" component={<CONTACTS_ROUTE />} />
          }
        />
        {appRoutes.map(({path, element}) => < Route key={path} path={path} element={element} />)}
        < Route path='*' element={<NotFound/>} /> 
      </Route>
    </Routes>
  );
}

export default App;

// import React, { lazy } from 'react';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import { getError, getIsLoading } from 'redux/selectors';
// import { Route, Routes } from 'react-router-dom';
// import { HOME_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, appRoutes } from 'config/routes';
// import styles from './App.module.css';

// const NotFound = lazy(() => import('../pages/NotFound'));

// function App() {
//   const dispatch = useDispatch();
// const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);


  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // return (
  //   <>
  //   <header>
  //     <nav className={styles.nav} >
  //       <NavLink to={HOME_ROUTE}>Home</NavLink>
  //       <NavLink to={CONTACTS_ROUTE}>Phonebook</NavLink>
  //       <NavLink to={REGISTER_ROUTE}>Register</NavLink>
  //       <NavLink to={LOGIN_ROUTE}>Login</NavLink>
  //     </nav>
  //   </header>
  //   <main>
  //     <Routes>
  //       {appRoutes.map(({path, element}) => < Route key={path} path={path} element={element} />)}
  //       < Route path='*' element={<NotFound/>} /> 
  //     </Routes>
  //     {/* <div>
  //       <h1>Phonebook</h1>
  //       <ContactForm />
  //       <h2>Contacts</h2>
  //       <Filter />
  //       {isLoading && !error && <b>Request in progress...</b>}
  //       <ContactList />
  //     </div>  */}
  //   </main>
  //   </>
  // );