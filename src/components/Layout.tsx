import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  isLoggedIn?: boolean;
  username?: string;
  onLogout?: () => void;
  showNav?: boolean;
  showFooter?: boolean;
}

export default function Layout({ isLoggedIn = false, username = 'User', onLogout, showNav = true, showFooter = true }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      {showNav && <Navbar isLoggedIn={isLoggedIn} username={username} onLogout={onLogout} />}
      <main className="flex-1">
        <Outlet />
      </main>
      {showFooter && <Footer />}
    </div>
  );
}
