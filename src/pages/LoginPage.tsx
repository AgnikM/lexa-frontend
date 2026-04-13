import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 cyber-bg overflow-hidden relative">
      {/* Tactical Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#4edea3 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <main className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="mb-2">
            <span className="text-4xl font-black tracking-tighter text-primary">LEXA</span>
          </div>
          <p className="font-label text-[10px] tracking-[0.15em] uppercase text-secondary/60">Sentinel Oversight Protocol</p>
        </div>

        {/* Login Card */}
        <div className="glass-panel p-8 rounded-xl shadow-2xl shadow-surface-container-lowest/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-40"></div>
          
          <header className="mb-8">
            <h1 className="text-2xl font-semibold text-on-surface tracking-tight mb-1">Access Terminal</h1>
            <p className="text-sm text-secondary/70">Secure authentication required for node access.</p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label className="font-label text-[10px] tracking-[0.05em] uppercase text-secondary font-medium ml-1">Identity Vector</label>
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface-container-lowest border-none rounded-lg py-3.5 px-4 text-sm text-on-surface placeholder:text-secondary/30 focus:ring-0 transition-all duration-200"
                  placeholder="operator@lexa.sys"
                />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within:w-full transition-all duration-300"></div>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary/40 text-lg">alternate_email</span>
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="font-label text-[10px] tracking-[0.05em] uppercase text-secondary font-medium">Access Cipher</label>
                <Link to="/forgot-password" className="font-label text-[10px] tracking-[0.05em] uppercase text-primary hover:text-primary-fixed transition-colors">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-surface-container-lowest border-none rounded-lg py-3.5 px-4 text-sm text-on-surface placeholder:text-secondary/30 focus:ring-0 transition-all duration-200"
                  placeholder="••••••••••••"
                />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within:w-full transition-all duration-300"></div>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="material-symbols-outlined text-secondary/40 hover:text-secondary transition-colors text-lg"
                  >
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </button>
                  <span className="material-symbols-outlined text-primary text-lg">verified_user</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="kinetic-trigger w-full py-4 rounded-lg flex items-center justify-center gap-3 active:scale-[0.98] transition-transform duration-200 group"
            >
              {isLoading && <span className="animate-spin h-4 w-4 border-2 border-on-primary border-t-transparent rounded-full"></span>}
              <span className="font-label text-sm font-bold tracking-wider uppercase text-on-primary">Login</span>
            </button>
          </form>

          <footer className="mt-10 pt-6 border-t border-outline-variant/10 text-center">
            <p className="text-sm text-secondary/60">
              Don't have an account? 
              <Link to="/register" className="text-primary font-semibold hover:underline decoration-primary/30 underline-offset-4 ml-1">
                Sign Up
              </Link>
            </p>
          </footer>
        </div>

        {/* System Status */}
        <div className="mt-8 flex justify-center items-center gap-6">
          <div className="flex flex-col items-center">
            <span className="font-label text-[9px] text-secondary/40 tracking-widest uppercase">System Status</span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#4edea3]"></span>
              <span className="font-label text-[10px] text-primary/80 font-semibold uppercase">Operational</span>
            </div>
          </div>
          <div className="h-8 w-px bg-outline-variant/10"></div>
          <div className="flex flex-col items-center">
            <span className="font-label text-[9px] text-secondary/40 tracking-widest uppercase">Encryption</span>
            <span className="font-label text-[10px] text-secondary/80 font-semibold uppercase mt-1">AES-256-GCM</span>
          </div>
        </div>
      </main>

      {/* Decorative Elements */}
      <div className="fixed bottom-6 left-6 pointer-events-none opacity-20">
        <span className="font-label text-[10px] tracking-widest text-secondary block">LATENCY: 12ms</span>
        <span className="font-label text-[10px] tracking-widest text-secondary block">PORT: 8080</span>
      </div>
    </div>
  );
}
