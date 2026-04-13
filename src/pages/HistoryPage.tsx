import { useState } from 'react';

const incidents = [
  {
    id: '#INC-88291-A',
    date: 'Oct 24, 2024 · 14:22:01',
    category: 'Credential Phishing',
    severity: 'Critical',
    status: 'Mitigated'
  },
  {
    id: '#INC-88285-B',
    date: 'Oct 23, 2024 · 09:12:44',
    category: 'Trojan Payload',
    severity: 'High',
    status: 'Isolated'
  },
  {
    id: '#INC-88270-Z',
    date: 'Oct 22, 2024 · 21:55:18',
    category: 'DDoS Anomaly',
    severity: 'Medium',
    status: 'Blocked'
  },
  {
    id: '#INC-88102-Y',
    date: 'Oct 20, 2024 · 04:30:12',
    category: 'Unauthorized Access',
    severity: 'Critical',
    status: 'Neutralized'
  }
];

const getSeverityStyles = (severity: string) => {
  switch (severity) {
    case 'Critical':
      return 'bg-error/10 text-error border border-error/20';
    case 'High':
      return 'bg-orange-500/10 text-orange-400 border border-orange-500/20';
    case 'Medium':
      return 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20';
    default:
      return 'bg-primary/10 text-primary border border-primary/20';
  }
};

export default function HistoryPage() {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="tactical-overlay min-h-screen">
      <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-on-surface mb-2">Security History</h1>
            <p className="text-secondary max-w-2xl">
              Archived threat intelligence and personal mitigation logs. Monitor systemic patterns across global and local environments.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-surface-container-highest px-4 py-2.5 rounded-lg flex items-center gap-2 text-primary border border-primary/20 hover:bg-primary/10 transition-all duration-200 group">
              <span className="material-symbols-outlined text-xl">download</span>
              <span className="font-medium text-sm">Export CSV</span>
            </button>
          </div>
        </header>

        {/* Tactical Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-surface-container-low p-5 rounded-lg border-l-4 border-primary">
            <p className="text-xs font-bold tracking-widest text-secondary uppercase mb-1">Total Incidents</p>
            <p className="text-3xl font-bold text-on-surface">1,284</p>
          </div>
          <div className="bg-surface-container-low p-5 rounded-lg border-l-4 border-tertiary-container">
            <p className="text-xs font-bold tracking-widest text-secondary uppercase mb-1">Critical Threats</p>
            <p className="text-3xl font-bold text-on-surface">12</p>
          </div>
          <div className="bg-surface-container-low p-5 rounded-lg border-l-4 border-secondary-container">
            <p className="text-xs font-bold tracking-widest text-secondary uppercase mb-1">Resolved</p>
            <p className="text-3xl font-bold text-on-surface">99.2%</p>
          </div>
          <div className="bg-surface-container-low p-5 rounded-lg border-l-4 border-outline">
            <p className="text-xs font-bold tracking-widest text-secondary uppercase mb-1">System Health</p>
            <p className="text-3xl font-bold text-primary">OPTIMAL</p>
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="flex gap-8 mb-6 border-b border-outline-variant/10">
          <button
            onClick={() => setActiveTab('personal')}
            className={`pb-4 tracking-wide text-sm uppercase ${activeTab === 'personal' ? 'text-primary font-bold border-b-2 border-primary' : 'text-secondary font-medium hover:text-on-surface transition-colors'}`}
          >
            Personal History
          </button>
          <button
            onClick={() => setActiveTab('public')}
            className={`pb-4 tracking-wide text-sm uppercase ${activeTab === 'public' ? 'text-primary font-bold border-b-2 border-primary' : 'text-secondary font-medium hover:text-on-surface transition-colors'}`}
          >
            Public Examples
          </button>
        </div>

        {/* Filters & Table Container */}
        <section className="bg-surface-container-low rounded-xl overflow-hidden shadow-2xl">
          {/* Filters Bar */}
          <div className="p-4 bg-surface-container flex flex-wrap items-center gap-4 border-b border-outline-variant/5">
            <div className="relative flex-grow md:flex-grow-0 md:w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-lg">search</span>
              <input
                type="text"
                className="w-full bg-surface-container-lowest border-none rounded-lg py-2 pl-10 pr-4 text-sm text-on-surface placeholder:text-secondary/50 focus:ring-1 focus:ring-primary/50"
                placeholder="Search Incident ID..."
              />
            </div>
            <select className="bg-surface-container-lowest border-none rounded-lg py-2 px-4 text-sm text-on-surface focus:ring-1 focus:ring-primary/50">
              <option>All Threat Types</option>
              <option>Phishing</option>
              <option>Malware</option>
              <option>DDoS</option>
              <option>SQL Injection</option>
            </select>
            <select className="bg-surface-container-lowest border-none rounded-lg py-2 px-4 text-sm text-on-surface focus:ring-1 focus:ring-primary/50">
              <option>Any Severity</option>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <button className="ml-auto text-secondary hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
              <span className="material-symbols-outlined text-lg">filter_list</span>
              Advanced Filters
            </button>
          </div>

          {/* Incident Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-highest/30">
                  <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-secondary uppercase">Incident ID</th>
                  <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-secondary uppercase">Detection Date</th>
                  <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-secondary uppercase">Threat Category</th>
                  <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-secondary uppercase">Severity</th>
                  <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-secondary uppercase">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-secondary uppercase text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                {incidents.map((incident, index) => (
                  <tr key={index} className="hover:bg-surface-container-high/40 transition-colors group">
                    <td className="px-6 py-4 font-mono text-sm text-primary">{incident.id}</td>
                    <td className="px-6 py-4 text-sm text-on-surface">{incident.date}</td>
                    <td className="px-6 py-4 text-sm font-medium">{incident.category}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${getSeverityStyles(incident.severity)}`}>
                        {incident.severity}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-primary animate-pulse' : 'bg-primary'}`}></div>
                        <span className="text-xs text-secondary">{incident.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="bg-surface-container-highest px-3 py-1.5 rounded text-xs font-bold text-on-surface hover:bg-primary hover:text-on-primary transition-all active:scale-95">
                        Quick View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="p-4 bg-surface-container flex items-center justify-between border-t border-outline-variant/5">
            <p className="text-xs text-secondary">
              Showing <span className="text-on-surface font-semibold">1 to 4</span> of <span className="text-on-surface font-semibold">1,284</span> entries
            </p>
            <div className="flex gap-2">
              <button className="p-2 text-secondary hover:text-primary disabled:opacity-30" disabled>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <div className="flex gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary text-xs font-bold">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-highest text-secondary text-xs">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-highest text-secondary text-xs">3</button>
                <span className="w-8 h-8 flex items-center justify-center text-secondary">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-highest text-secondary text-xs">321</button>
              </div>
              <button className="p-2 text-secondary hover:text-primary">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </section>

        {/* Visual Layering (Bento Style Extras) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass-card p-8 rounded-xl border border-primary/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-9xl text-primary">security_update_good</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-2">Deep Intelligence Scan</h3>
            <p className="text-secondary mb-6 max-w-lg">
              Lexa uses proprietary neural patterns to analyze past incidents and predict future attack vectors targeting your specific node configuration.
            </p>
            <div className="flex gap-4">
              <div className="bg-surface-container-highest/40 px-4 py-3 rounded-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">query_stats</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Confidence</p>
                  <p className="text-lg font-bold text-on-surface">99.8%</p>
                </div>
              </div>
              <div className="bg-surface-container-highest/40 px-4 py-3 rounded-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">history_edu</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Logs Analyzed</p>
                  <p className="text-lg font-bold text-on-surface">4.2M</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between border border-outline-variant/5">
            <div>
              <h3 className="text-xl font-bold text-on-surface mb-4">Historical Trends</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-secondary">Phishing</span>
                    <span className="text-xs font-bold text-primary">+12%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[65%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-secondary">Malware</span>
                    <span className="text-xs font-bold text-error">-4%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                    <div className="bg-tertiary-container h-full w-[40%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-secondary">Unauthorized Logins</span>
                    <span className="text-xs font-bold text-primary">+2%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[25%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <button className="mt-8 text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group">
              View Detailed Trends
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
