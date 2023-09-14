import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { useAuth } from 'redux/selectors';
import styles from './App.module.css';
import { Navigation } from 'config/routes';
import UserMenu from './UserMenu/UserMenu';
import { AuthNav } from './AuthNav/AuthNav';

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

