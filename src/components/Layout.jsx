import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import styles from './App.module.css';
import { Navigation } from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import { AuthNav } from './AuthNav/AuthNav';
import { useAuth } from 'redux/auth/useAuth';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  
  return (
    <header className={styles.nav}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

