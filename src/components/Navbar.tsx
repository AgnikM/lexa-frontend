import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isLoggedIn?: boolean;
  username?: string;
  onLogout?: () => void;
}

export default function Navbar({ isLoggedIn = false, username = 'User', onLogout }: NavbarProps) {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="w-full sticky top-0 z-50 bg-surface-container-low border-none shadow-2xl shadow-surface/40 flex justify-between items-center px-6 py-4 font-semibold tracking-tight">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-primary">LEXA</Link>
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to={isLoggedIn ? "/dashboard" : "/"} 
            className={`transition-colors ${isActive('/dashboard') || isActive('/') ? 'text-primary' : 'text-secondary hover:text-primary'}`}
          >
            Analyze
          </Link>
          <Link 
            to="/history" 
            className={`transition-colors ${isActive('/history') ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary hover:text-primary'}`}
          >
            History
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors ${isActive('/about') ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary hover:text-primary'}`}
          >
            About
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <div className="relative group">
            <button className="flex items-center space-x-3 p-1 rounded-full hover:bg-surface-container-highest/50 transition-all duration-200 active:scale-95">
              <div className="w-10 h-10 rounded-full border-2 border-primary/30 bg-surface-container-highest flex items-center justify-center text-sm font-bold text-primary">
                {username.charAt(0).toUpperCase()}
              </div>
              <span className="material-symbols-outlined text-secondary">expand_more</span>
            </button>
            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 glass-panel rounded-xl shadow-2xl shadow-black/50 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-outline-variant/15">
              <div className="py-2">
                <Link to="/history" className="flex items-center px-4 py-3 text-sm text-secondary hover:bg-primary/10 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined mr-3 text-sm">history</span> History
                </Link>
                <Link to="/settings" className="flex items-center px-4 py-3 text-sm text-secondary hover:bg-primary/10 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined mr-3 text-sm">settings</span> Settings
                </Link>
                <div className="h-px bg-outline-variant/20 my-1"></div>
                <button onClick={onLogout} className="flex items-center px-4 py-3 text-sm text-error hover:bg-error/10 transition-colors w-full">
                  <span className="material-symbols-outlined mr-3 text-sm">logout</span> Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Link to="/login" className="px-5 py-2 text-secondary hover:bg-surface-container-highest/50 transition-all duration-200 active:scale-95">
              Login
            </Link>
            <Link to="/register" className="px-5 py-2 bg-primary-container text-on-primary rounded-lg font-bold hover:opacity-90 transition-all active:scale-95">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
