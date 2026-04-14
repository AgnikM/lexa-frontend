import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function DashboardPage() {
  const [inputText, setInputText] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  //  FIXED FUNCTION
  const handleScan = async () => {
    if (!inputText.trim()) return;

    try {
      setIsScanning(true);

      const res = await fetch("https://lexa-backend-ivhg.onrender.com/api/v1/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: inputText,
        }),
      });

      const data = await res.json();

      console.log(data);
      alert(data.message);

    } catch (error) {
      console.error(error);
      alert("Error connecting to backend");
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="flex flex-1 overflow-hidden">
      <aside className="hidden lg:flex flex-col h-full w-64 sticky bg-surface-container-low border-l-2 border-primary shadow-xl shadow-black/50 py-8">
        <div className="px-6 mb-8">
          <div className="text-xl font-black text-primary">LEXA Oversight</div>
          <div className="text-[10px] tracking-[0.05em] uppercase text-secondary mt-1 font-medium">Threat Level: Optimal</div>
        </div>
        <nav className="flex-1 space-y-1">
          <Link to="#" className="flex items-center py-3 text-secondary pl-4 hover:bg-surface-container text-sm uppercase font-medium">
            Threat Feed
          </Link>
          <Link to="/history" className="flex items-center py-3 text-primary font-bold border-l-4 border-primary bg-surface-container-low pl-4 text-sm uppercase">
            Scan History
          </Link>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto bg-surface relative">
        <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">
         Hello, <span className="text-primary">Admin 🚀</span>
      </h1>

          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter threat..."
            className="w-full p-4 mb-4 border rounded"
          />

          <button
            onClick={handleScan}
            disabled={isScanning}
            className="px-6 py-3 bg-green-500 text-white rounded"
          >
            {isScanning ? "Scanning..." : "Run Deep Scan"}
          </button>

        </div>
      </main>
    </div>
  );
}