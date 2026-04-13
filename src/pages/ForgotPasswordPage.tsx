import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Tactical Grid Overlay */}
      <div className="absolute inset-0 tactical-grid pointer-events-none opacity-40"></div>
      
      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-container/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary-container/5 rounded-full blur-[120px]"></div>

      <main className="relative z-10 w-full max-w-[420px] px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-black tracking-tighter text-primary mb-2">LEXA</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low rounded-lg border-l-2 border-primary">
            <span className="material-symbols-outlined text-[14px] text-primary">lock_reset</span>
            <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-secondary">Security Protocol / Recovery</span>
          </div>
        </div>

        {/* Card */}
        <div className="glass-card p-8 rounded-xl border border-outline-variant/10 shadow-2xl shadow-surface-container-lowest/50">
          {!isSubmitted ? (
            <>
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-on-surface mb-2">Reset Password</h2>
                <p className="text-sm text-secondary leading-relaxed">Enter your email to reset your password.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary/80 block ml-1" htmlFor="email">
                    Terminal ID (Email)
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-surface-container-lowest border-0 border-b-2 border-surface-container-highest focus:border-primary focus:ring-0 text-on-surface placeholder:text-on-secondary-fixed-variant py-4 px-4 transition-all duration-300"
                      placeholder="admin@sentinel.oversight"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-bold text-sm tracking-wide rounded-md active:scale-[0.98] transition-all shadow-lg shadow-primary/10 flex items-center justify-center gap-2"
                >
                  Send Reset Link
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <span className="material-symbols-outlined text-6xl text-primary mb-4">mark_email_read</span>
              <h2 className="text-xl font-semibold text-on-surface mb-2">Check Your Email</h2>
              <p className="text-sm text-secondary leading-relaxed">
                We've sent a password reset link to <span className="text-primary font-medium">{email}</span>
              </p>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-outline-variant/10 text-center">
            <Link to="/login" className="text-xs font-medium text-secondary hover:text-primary transition-colors flex items-center justify-center gap-2 group">
              <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">chevron_left</span>
              Back to Login
            </Link>
          </div>
        </div>

        {/* System Encryption Status */}
        <div className="mt-12 flex justify-between items-center opacity-40">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-outline-variant"></div>
          <div className="mx-4 text-[9px] font-bold tracking-[0.2em] uppercase text-secondary">System Encryption Active</div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-outline-variant"></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full p-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-primary font-bold text-lg tracking-tight">LEXA</div>
        <div className="text-[10px] tracking-[0.05em] uppercase text-secondary/60 font-medium">
          © 2024 SENTINEL OVERSIGHT. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6">
          <Link to="/status" className="text-[10px] tracking-[0.05em] uppercase text-secondary/60 hover:text-primary transition-colors">
            Node Status
          </Link>
          <Link to="/privacy" className="text-[10px] tracking-[0.05em] uppercase text-secondary/60 hover:text-primary transition-colors">
            Privacy Protocol
          </Link>
        </div>
      </footer>
    </div>
  );
}
