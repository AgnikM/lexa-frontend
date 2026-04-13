import { Link } from 'react-router-dom';

const features = [
  {
    icon: 'phishing',
    title: 'Phishing Defense',
    description: 'Advanced heuristic analysis to identify deceptive social engineering attempts.'
  },
  {
    icon: 'bug_report',
    title: 'Malware Scan',
    description: 'Signature and behavior-based detection for malicious executable payloads.'
  },
  {
    icon: 'lan',
    title: 'Network Sniffing',
    description: 'Identifying unauthorized packet capture tools within your local environment.'
  },
  {
    icon: 'key',
    title: 'Credential Leak',
    description: 'Cross-referencing dark web databases for exposed user credentials.'
  },
  {
    icon: 'dns',
    title: 'DNS Hijacking',
    description: 'Real-time monitoring of domain resolution paths for malicious redirection.'
  },
  {
    icon: 'shield_person',
    title: 'Identity Theft',
    description: 'AI-driven analysis of behavioral patterns to flag suspicious impersonation.'
  },
  {
    icon: 'router',
    title: 'IOT Vulnerability',
    description: 'Deep inspection of connected device firmware for common entry points.'
  }
];

export default function LandingPage() {
  return (
    <div className="relative">
      {/* Tactical Overlay Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#4edea3 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Hero Section */}
      <section className="hero-split grid grid-cols-1 md:grid-cols-2 container mx-auto px-6 gap-12 items-center py-12">
        {/* Left: Hero Visual */}
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
          <div className="relative glass-panel rounded-xl border border-outline-variant/15 overflow-hidden shadow-2xl">
            <div className="p-1 bg-surface-container-highest flex items-center gap-2 border-b border-outline-variant/10">
              <div className="flex gap-1.5 ml-2">
                <div className="w-2.5 h-2.5 rounded-full bg-error/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-primary/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-secondary/20"></div>
              </div>
              <div className="mx-auto text-[10px] tracking-widest text-secondary/40 font-mono uppercase">System_Analyzer_v2.0</div>
            </div>
            <div className="aspect-video bg-surface-container-lowest flex items-center justify-center p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
              {/* Simulated UI Elements */}
              <div className="relative z-10 w-full max-w-sm space-y-6">
                {/* Analysis Flow Visual */}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full bg-surface-container p-3 rounded border border-primary/20 font-mono text-xs text-primary/80">
                    &gt; Scanning entry_point_01...
                  </div>
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle className="text-surface-container-highest" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="4"></circle>
                      <circle className="text-primary" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364" strokeDashoffset="120" strokeWidth="4"></circle>
                    </svg>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">High</div>
                      <div className="text-[8px] uppercase tracking-tighter text-secondary">Threat Level</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 w-full">
                    <div className="h-1 bg-primary/20 rounded"></div>
                    <div className="h-1 bg-primary/60 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Messaging */}
        <div className="order-1 md:order-2 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full">
            <span className="material-symbols-outlined text-[14px] text-primary">verified_user</span>
            <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-primary">Enterprise Grade Protection</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-tight">
            LEXA: Spot dangers, <span className="text-primary">get plain steps.</span>
          </h1>
          <p className="text-lg text-secondary leading-relaxed max-w-lg">
            Free cyber threat analyzer – no signup needed for quick scans. Secure your digital perimeter with professional-grade intelligence in seconds.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/dashboard" className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-bold rounded-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all text-lg">
              Continue as Guest
            </Link>
            <button className="px-8 py-4 bg-surface-container-highest border border-primary/20 text-on-surface font-semibold rounded-lg hover:bg-surface-container-high transition-all text-lg">
              Watch Demo
            </button>
          </div>
          <div className="flex items-center gap-6 pt-8 border-t border-outline-variant/10">
            <div>
              <div className="text-2xl font-bold text-on-surface">0.85</div>
              <div className="text-[10px] uppercase tracking-widest text-secondary font-medium">Detection Accuracy</div>
            </div>
            <div className="h-10 w-px bg-outline-variant/20"></div>
            <div>
              <div className="text-2xl font-bold text-on-surface">&lt;2s</div>
              <div className="text-[10px] uppercase tracking-widest text-secondary font-medium">Analysis Speed</div>
            </div>
            <div className="h-10 w-px bg-outline-variant/20"></div>
            <div>
              <div className="text-2xl font-bold text-on-surface">24/7</div>
              <div className="text-[10px] uppercase tracking-widest text-secondary font-medium">Node Status</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Carousel Section */}
      <section className="py-24 bg-surface-container-lowest/50 relative">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Comprehensive Coverage</h2>
              <p className="text-secondary">Detecting the 7 most critical digital threats in real-time.</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 border border-outline-variant/20 rounded-full hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="p-2 border border-outline-variant/20 rounded-full hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 -mx-6 px-6">
            {features.map((feature, index) => (
              <div key={index} className="min-w-[300px] bg-surface-container-low p-8 rounded-xl border-l-2 border-primary group hover:bg-surface-container transition-all">
                <span className="material-symbols-outlined text-primary mb-4 text-3xl">{feature.icon}</span>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 cyber-gradient relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="container mx-auto px-6 text-center max-w-2xl relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to secure your digital footprint?</h2>
          <p className="text-secondary mb-10">Experience the power of LEXA without the friction of long sign-up forms. Start your first analysis in under 30 seconds.</p>
          <Link to="/dashboard" className="px-10 py-5 bg-primary text-on-primary font-black rounded-lg shadow-2xl shadow-primary/30 hover:scale-105 transition-transform inline-block">
            START SCAN NOW
          </Link>
        </div>
      </section>
    </div>
  );
}
