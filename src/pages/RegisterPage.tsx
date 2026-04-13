import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const calculatePasswordStrength = () => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/\d/)) strength++;
    if (password.match(/[^a-zA-Z\d]/)) strength++;
    return strength;
  };

  const passwordStrength = calculatePasswordStrength();

  const getStrengthLabel = () => {
    if (passwordStrength <= 1) return { label: 'Weak', color: 'error' };
    if (passwordStrength <= 2) return { label: 'Fair', color: 'yellow-400' };
    if (passwordStrength <= 3) return { label: 'Good', color: 'primary' };
    return { label: 'Optimal', color: 'primary' };
  };

  const strengthInfo = getStrengthLabel();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Tactical Grid Overlay */}
      <div className="absolute inset-0 tactical-overlay pointer-events-none"></div>

      <main className="flex-grow flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-[1100px] grid md:grid-cols-2 bg-surface-container-lowest rounded-xl overflow-hidden shadow-2xl shadow-black/60 border border-outline-variant/10">
          
          {/* Branding/Visual Side */}
          <div className="hidden md:flex flex-col justify-between p-12 bg-surface-container-low relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-primary/20 to-transparent"></div>
            
            <div className="relative z-10">
              <div className="text-2xl font-bold tracking-tighter text-primary">LEXA</div>
              <div className="mt-24">
                <h1 className="text-4xl font-extrabold text-on-surface leading-tight tracking-tighter">
                  THE DIGITAL<br/><span className="text-primary">OBSIDIAN</span> ARCHITECTURE.
                </h1>
                <p className="mt-6 text-secondary leading-relaxed max-w-sm">
                  Deploy the most advanced threat detection system in the ecosystem. Your nodes, protected by the void.
                </p>
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border border-surface bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">JD</div>
                  <div className="w-8 h-8 rounded-full border border-surface bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold">SO</div>
                  <div className="w-8 h-8 rounded-full border border-surface bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">MK</div>
                </div>
                <span className="text-[10px] tracking-[0.05em] uppercase text-secondary font-medium">Joined by 2k+ security analysts</span>
              </div>
            </div>
          </div>

          {/* Registration Form Side */}
          <div className="p-8 md:p-16 flex flex-col justify-center">
            <div className="mb-8">
              <span className="text-[10px] tracking-[0.1em] uppercase text-primary font-bold mb-2 block">Sentinel Oversight Protocol</span>
              <h2 className="text-2xl font-bold text-on-surface tracking-tight">Access Initialization</h2>
              <p className="text-secondary text-sm mt-1">Create your secure identification profile.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username */}
              <div className="space-y-1.5">
                <label className="text-[10px] tracking-wider uppercase text-secondary font-semibold ml-1">Username</label>
                <div className="relative group">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-surface-container-lowest border-none focus:ring-0 text-on-surface placeholder:text-secondary/30 py-3 px-4 rounded-lg transition-all border-b-2 border-transparent focus:border-primary"
                    placeholder="ops_commander"
                  />
                  {username.length > 3 && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-[10px] tracking-wider uppercase text-secondary font-semibold ml-1">Email Node</label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-surface-container-lowest border-none focus:ring-0 text-on-surface placeholder:text-secondary/30 py-3 px-4 rounded-lg transition-all border-b-2 border-transparent focus:border-primary"
                    placeholder="protocol@sentinel.io"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-[10px] tracking-wider uppercase text-secondary font-semibold ml-1">Password (8+ chars)</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-surface-container-lowest border-none focus:ring-0 text-on-surface placeholder:text-secondary/30 py-3 px-4 rounded-lg transition-all border-b-2 border-transparent focus:border-primary"
                    placeholder="••••••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-secondary/50 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>

                {/* Strength Meter */}
                {password && (
                  <div className="pt-2 px-1">
                    <div className="flex gap-1 h-1">
                      {[1, 2, 3, 4].map((level) => (
                        <div
                          key={level}
                          className={`flex-1 rounded-full ${
                            level <= passwordStrength ? `bg-${strengthInfo.color}` : 'bg-surface-container-highest'
                          }`}
                          style={{ backgroundColor: level <= passwordStrength ? '#4edea3' : undefined }}
                        ></div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-1.5">
                      <span className="text-[9px] text-primary uppercase font-bold tracking-tight">Strength: {strengthInfo.label}</span>
                      <span className="text-[9px] text-secondary uppercase font-medium">Entropy: {Math.min(passwordStrength * 21, 84)}%</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <label className="text-[10px] tracking-wider uppercase text-secondary font-semibold ml-1">Confirm Identity Key</label>
                <div className="relative">
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-surface-container-lowest border-none focus:ring-0 text-on-surface placeholder:text-secondary/30 py-3 px-4 rounded-lg transition-all border-b-2 border-transparent focus:border-primary"
                    placeholder="••••••••••••"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                    <span className="material-symbols-outlined text-secondary/30 text-lg">sync</span>
                  </div>
                </div>
              </div>

              {/* Primary Action */}
              <button
                type="submit"
                className="w-full btn-primary text-on-primary-fixed font-bold py-4 rounded-lg mt-6 shadow-xl shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Create Free Account</span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-outline-variant/10 text-center">
              <p className="text-secondary text-xs">
                Already have an account? 
                <Link to="/login" className="text-primary font-bold hover:underline underline-offset-4 ml-1">Log In</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* System Status Footer Decor */}
      <div className="absolute bottom-8 left-0 right-0 px-12 flex justify-between items-center pointer-events-none opacity-40">
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <span className="text-[8px] uppercase tracking-widest text-secondary">System Auth</span>
            <span className="text-[10px] font-mono text-primary">v4.8.2-STABLE</span>
          </div>
          <div className="w-px h-6 bg-outline-variant/30"></div>
          <div className="flex flex-col">
            <span className="text-[8px] uppercase tracking-widest text-secondary">Latency</span>
            <span className="text-[10px] font-mono text-primary">12ms</span>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-[8px] uppercase tracking-widest text-secondary">Global Region</span>
            <span className="text-[10px] font-mono text-primary">US-EAST-1 // ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-12 px-6 bg-surface border-t border-outline-variant/15 flex flex-col md:flex-row justify-between items-center z-20">
        <div className="mb-4 md:mb-0">
          <span className="text-lg font-bold text-primary">LEXA</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-4 md:mb-0">
          <Link to="/privacy" className="font-label text-[10px] tracking-[0.05em] uppercase text-secondary hover:text-primary transition-colors underline decoration-primary decoration-2 underline-offset-4">
            Privacy Protocol
          </Link>
          <Link to="/terms" className="font-label text-[10px] tracking-[0.05em] uppercase text-secondary hover:text-primary transition-colors underline decoration-primary decoration-2 underline-offset-4">
            Service Terms
          </Link>
          <Link to="/status" className="font-label text-[10px] tracking-[0.05em] uppercase text-secondary hover:text-primary transition-colors underline decoration-primary decoration-2 underline-offset-4">
            Node Status
          </Link>
        </div>
        <div className="opacity-80 hover:opacity-100 transition-opacity">
          <span className="font-label text-[10px] tracking-[0.05em] uppercase text-secondary">© 2024 SENTINEL OVERSIGHT. ALL RIGHTS RESERVED.</span>
        </div>
      </footer>
    </div>
  );
}
