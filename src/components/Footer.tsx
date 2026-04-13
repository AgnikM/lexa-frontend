import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 bg-surface border-t border-outline-variant/15 flex flex-col md:flex-row justify-between items-center font-label text-[10px] tracking-[0.05em] uppercase text-secondary">
      <div className="mb-6 md:mb-0">
        <span className="text-lg font-bold text-primary">LEXA</span>
        <p className="mt-2">© 2024 SENTINEL OVERSIGHT. ALL RIGHTS RESERVED.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <Link to="/privacy" className="text-secondary hover:text-primary transition-colors underline decoration-primary decoration-2 underline-offset-4">
          Privacy Protocol
        </Link>
        <Link to="/terms" className="text-secondary hover:text-primary transition-colors underline decoration-primary decoration-2 underline-offset-4">
          Service Terms
        </Link>
        <Link to="/status" className="text-secondary hover:text-primary transition-colors underline decoration-primary decoration-2 underline-offset-4">
          Node Status
        </Link>
      </div>
    </footer>
  );
}
