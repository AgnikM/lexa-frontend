import { useState } from 'react';
import { Link } from 'react-router-dom';

const historyItems = [
  {
    name: 'MAL_DOC_INVOICE.vbs',
    status: 'CLEAN',
    time: '2 mins ago',
    hash: 'SHA-256: 4A8E...',
    isThreat: false
  },
  {
    name: 'UNKNOWN_PAYLOAD_88.bin',
    status: 'THREAT',
    time: '1 hour ago',
    hash: 'IP: 192.168.1.1',
    isThreat: true
  },
  {
    name: 'update_service_config.exe',
    status: 'CLEAN',
    time: 'Yesterday',
    hash: 'System Scan',
    isThreat: false
  },
  {
    name: 'login_handler.php',
    status: 'CLEAN',
    time: 'Yesterday',
    hash: 'Web Audit',
    isThreat: false
  }
];

export default function DashboardPage() {
  const [inputText, setInputText] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = async () => {
  if (!inputText.trim()) return;

  try {
    setIsScanning(true);

    const res = await fetch("https://lexa-backend-ivhg.onrender.com");
    const data = await res.json();

    console.log(data);
    alert(data.message); // test ke liye

  } catch (error) {
    console.error(error);
    alert("Error connecting to backend");
  } finally {
    setIsScanning(false);
  }
};

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <aside className="hidden lg:flex flex-col h-full w-64 sticky bg-surface-container-low border-l-2 border-primary shadow-xl shadow-black/50 py-8">
        <div className="px-6 mb-8">
          <div className="text-xl font-black text-primary">LEXA Oversight</div>
          <div className="text-[10px] tracking-[0.05em] uppercase text-secondary mt-1 font-medium">Threat Level: Optimal</div>
        </div>
        <nav className="flex-1 space-y-1">
          <Link to="#" className="flex items-center py-3 text-secondary pl-4 hover:bg-surface-container transition-all hover:translate-x-1 duration-200 text-sm tracking-wide uppercase font-medium">
            <span className="material-symbols-outlined mr-3">security</span> Threat Feed
          </Link>
          <Link to="/history" className="flex items-center py-3 text-primary font-bold border-l-4 border-primary bg-surface-container-low pl-4 transition-all hover:translate-x-1 duration-200 text-sm tracking-wide uppercase">
            <span className="material-symbols-outlined mr-3">history</span> Scan History
          </Link>
          <Link to="#" className="flex items-center py-3 text-secondary pl-4 hover:bg-surface-container transition-all hover:translate-x-1 duration-200 text-sm tracking-wide uppercase font-medium">
            <span className="material-symbols-outlined mr-3">description</span> Saved Reports
          </Link>
          <Link to="#" className="flex items-center py-3 text-secondary pl-4 hover:bg-surface-container transition-all hover:translate-x-1 duration-200 text-sm tracking-wide uppercase font-medium">
            <span className="material-symbols-outlined mr-3">settings</span> Settings
          </Link>
        </nav>
        <div className="px-4 mt-auto">
          <button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-bold rounded-lg transition-transform active:scale-95 shadow-lg shadow-primary/20 uppercase text-xs tracking-widest">
            New Analysis
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-surface relative">
        {/* Tactical Overlay Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4edea3 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-6xl mx-auto p-8 relative z-10">
          {/* Welcome Header */}
          <header className="mb-12">
            <div className="flex items-baseline space-x-2">
              <span className="text-secondary-fixed text-sm font-label tracking-widest uppercase">System Session</span>
              <div className="h-1 w-1 bg-primary rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface mt-2 tracking-tight">
              Hello, <span className="text-primary">Admin_Alpha</span>
            </h1>
            <p className="text-secondary mt-2 max-w-2xl font-light">
              Welcome back to the command center. System status is nominal. Ready for deep-packet inspection and threat vector mapping.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Analysis Input Section */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-surface-container-low rounded-xl p-8 border-l-2 border-primary/40 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-on-surface">Main Analysis Screen</h2>
                  <span className="bg-primary/10 text-primary text-[10px] px-2 py-1 rounded-sm uppercase tracking-tighter font-bold border border-primary/20">Active Engine: V4.2</span>
                </div>
                <div className="space-y-6">
                  <div className="relative">
                    <label className="block text-[10px] uppercase tracking-widest text-secondary-fixed mb-2 font-bold">
                      Input Threat Vector / Hash / URL
                    </label>
                    <textarea
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      className="w-full bg-surface-container-lowest border-none rounded-lg p-4 text-on-surface placeholder:text-outline-variant focus:ring-0 focus:outline-none transition-all resize-none font-mono text-sm border-b-2 border-transparent focus:border-primary"
                      placeholder="Paste suspicious script, file hash (SHA-256), or domain for immediate analysis..."
                      rows={6}
                    ></textarea>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    <button
                      onClick={handleScan}
                      disabled={isScanning}
                      className="w-full md:w-auto px-10 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-bold rounded-lg transition-transform active:scale-95 shadow-lg shadow-primary/20 flex items-center justify-center disabled:opacity-50"
                    >
                      {isScanning ? (
                        <>
                          <span className="animate-spin h-5 w-5 border-2 border-on-primary-fixed border-t-transparent rounded-full mr-2"></span>
                          Scanning...
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-outlined mr-2">analytics</span> Run Deep Scan
                        </>
                      )}
                    </button>
                    <button className="w-full md:w-auto px-6 py-4 bg-surface-container-highest border border-primary/20 text-primary font-bold rounded-lg transition-all hover:bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined mr-2">save</span> Save Analysis
                    </button>
                  </div>
                </div>
              </div>

              {/* Results Preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface-container-high rounded-xl p-6 border-t-2 border-primary/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="material-symbols-outlined text-primary">biotech</span>
                    <h3 className="font-bold text-sm uppercase tracking-wider">Detection Engine</h3>
                  </div>
                  <div className="text-4xl font-black text-primary mb-1">98%</div>
                  <div className="text-xs text-secondary-fixed uppercase tracking-tighter">Confidence Score</div>
                  <div className="mt-6 h-1 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[98%] shadow-[0_0_10px_rgba(78,222,163,0.5)]"></div>
                  </div>
                </div>

                <div className="bg-surface-container-highest rounded-xl p-6 relative overflow-hidden">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="material-symbols-outlined text-tertiary">warning</span>
                    <h3 className="font-bold text-sm uppercase tracking-wider text-tertiary">Anomalies Detected</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-on-surface">Buffer Overflow</span>
                      <span className="text-[10px] text-tertiary font-bold">CRITICAL</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-on-surface">Registry Injection</span>
                      <span className="text-[10px] text-primary font-bold">PATCHED</span>
                    </div>
                  </div>
                  {/* Decorative grid in corner */}
                  <div className="absolute -right-4 -bottom-4 opacity-10">
                    <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'wght' 100" }}>grid_view</span>
                  </div>
                </div>
              </div>
            </div>

            {/* History Sidebar */}
            <div className="lg:col-span-4">
              <section className="bg-surface-container-low rounded-xl h-full flex flex-col shadow-xl">
                <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
                  <h3 className="font-bold text-on-surface">
                    Personal History <span className="text-primary font-normal ml-1">(12 items)</span>
                  </h3>
                  <button className="text-primary p-2 hover:bg-primary/10 rounded-full transition-colors">
                    <span className="material-symbols-outlined">filter_list</span>
                  </button>
                </div>
                <div className="flex-1 p-2 space-y-2 overflow-y-auto max-h-[600px]">
                  {historyItems.map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg hover:bg-surface-container-highest transition-all group cursor-pointer border-l-2 border-transparent hover:${item.isThreat ? 'border-error/50' : 'border-primary/50'}`}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-xs font-bold text-on-surface truncate pr-2">{item.name}</span>
                        <span className={`text-[10px] font-mono ${item.isThreat ? 'text-error' : 'text-primary'}`}>{item.status}</span>
                      </div>
                      <div className="flex items-center text-[10px] text-secondary-fixed uppercase tracking-tighter">
                        <span>{item.time}</span>
                        <span className="mx-2">•</span>
                        <span>{item.hash}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/history" className="m-6 p-4 border border-outline-variant/20 rounded-lg text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary hover:border-primary/50 transition-all text-center block">
                  View Full Audit Log
                </Link>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
