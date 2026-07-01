import { Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const LogoBadge = () => {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative flex items-center justify-center w-12 h-12 bg-brand-card rounded-xl border border-brand-primary/30 shadow-[0_0_15px_rgba(56,189,248,0.2)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-purple/20 rounded-xl" />
        <Gamepad2 className="w-7 h-7 text-brand-primary relative z-10" />
        {/* Pixel stars decoration */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-brand-cta rounded-sm animate-pulse"></div>
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-brand-secondary rounded-sm animate-pulse delay-150"></div>
      </div>

      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight text-brand-text group-hover:neon-text transition-all duration-300">
          Tips & Tricks
        </span>
        <span className="text-xs font-medium text-brand-primary tracking-wider uppercase">
          by Master Hammad
        </span>
      </div>
    </Link>
  );
};

export default LogoBadge;