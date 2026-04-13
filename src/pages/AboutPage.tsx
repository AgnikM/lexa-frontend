import { useState } from 'react';

const teamMembers = [
  {
    name: 'Alex Rivera',
    role: 'Lead Architect',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face'
  },
  {
    name: 'Sarah Chen',
    role: 'ML Specialist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop&crop=face'
  },
  {
    name: 'Marcus Thorne',
    role: 'DevOps Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face'
  },
  {
    name: 'Elena Vance',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face'
  },
  {
    name: 'Jordan Wu',
    role: 'Security Analyst',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face'
  }
];

const techLayers = [
  { layer: 'Layer 05 — Infrastructure', tech: 'Docker • Kubernetes • AWS', opacity: 100 },
  { layer: 'Layer 04 — Data & Intelligence', tech: 'PostgreSQL • Redis • VectorDB', opacity: 80 },
  { layer: 'Layer 03 — ML Engine', tech: 'TensorFlow • Scikit-Learn • CICIDS', opacity: 60 },
  { layer: 'Layer 02 — API & Logic', tech: 'FastAPI • Python • WebSockets', opacity: 40 },
  { layer: 'Layer 01 — Frontend', tech: 'React • Tailwind • D3.js', opacity: 20 }
];

export default function AboutPage() {
  const [rating, setRating] = useState(4);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    setFeedback('');
  };

  return (
    <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Tactical Grid */}
      <div className="fixed inset-0 tactical-grid pointer-events-none"></div>

      {/* Hero Section */}
      <header className="relative mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-on-surface">
          The Intelligence <span className="text-gradient">Engine.</span>
        </h1>
        <p className="text-secondary max-w-2xl mx-auto text-lg">
          LEXA combines cutting-edge machine learning with industry-standard threat frameworks to deliver impenetrable network oversight.
        </p>
      </header>

      {/* Bento Grid: Tech Stack & Data */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
        {/* 5-Layer Tech Stack Infographic */}
        <div className="md:col-span-8 glass-panel p-8 rounded-xl relative overflow-hidden group">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">Technical Architecture</h2>
              <p className="text-sm text-secondary">A unified 5-layer sovereign security stack.</p>
            </div>
            <span className="material-symbols-outlined text-primary text-4xl">architecture</span>
          </div>
          <div className="space-y-4">
            {techLayers.map((item, index) => (
              <div
                key={index}
                className={`relative p-4 bg-surface-container-highest/40 border-l-4 border-primary rounded-r-lg group-hover:translate-x-${index + 2} transition-transform duration-300`}
                style={{ transform: `translateX(${index * 8}px)` }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-label text-[10px] text-primary tracking-widest font-bold uppercase">{item.layer}</span>
                  <span className="text-xs text-secondary opacity-60">{item.tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Datasets */}
        <div className="md:col-span-4 space-y-6">
          <div className="glass-panel p-6 rounded-xl border border-outline-variant/10 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg mb-2">MITRE ATT&CK®</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Framework mapping for behavioral analysis and tactic classification across all detected anomalies.
              </p>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-tighter rounded">Enterprise</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-tighter rounded">Matrix v14</span>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-outline-variant/10 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg mb-2">CICIDS Datasets</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Trained on Canadian Institute for Cybersecurity datasets for robust DDoS and brute-force detection.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[10px] text-secondary/50 uppercase tracking-widest">Accuracy Rating</span>
              <span className="text-primary font-bold">99.4%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tighter mb-4">The Architect Syndicate</h2>
            <p className="text-secondary">Five visionaries bridging the gap between academic research and defensive technology.</p>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-0.5 bg-primary/20 mb-2"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-surface-container">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">{member.role}</p>
                <h4 className="font-bold text-lg">{member.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="mb-8">
            <h2 className="text-4xl font-bold tracking-tighter mb-4">
              Refine the <span className="text-primary">Sentinel.</span>
            </h2>
            <p className="text-secondary">
              Your field reports directly influence the evolution of LEXA's neural pathways. Help us strengthen the network.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-secondary ml-1">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="material-symbols-outlined text-primary transition-all"
                    style={{ fontVariationSettings: star <= rating ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    star
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-secondary ml-1">Feedback Report</label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-0 text-on-surface placeholder:text-secondary/40 text-sm p-4"
                placeholder="Describe your experience or suggest a feature..."
                rows={4}
              ></textarea>
              <div className="h-0.5 w-full bg-surface-container-highest relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-primary transition-all duration-300"
                  style={{ width: `${(feedback.length / 500) * 100}%` }}
                ></div>
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-4 rounded-lg font-bold text-on-primary-fixed uppercase tracking-widest text-xs active:scale-95 transition-transform"
            >
              Transmit Feedback
            </button>
          </form>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative glass-panel rounded-2xl p-8 border border-outline-variant/10 aspect-square flex flex-col justify-center text-center">
              <span 
                className="material-symbols-outlined text-8xl text-primary/40 mb-6 mx-auto" 
                style={{ fontVariationSettings: "'wght' 200" }}
              >
                shield_with_heart
              </span>
              <h3 className="text-2xl font-bold mb-4">User Centric Security</h3>
              <p className="text-secondary max-w-sm mx-auto">
                We prioritize human intuition combined with machine speed. Your feedback is our most valuable dataset.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
