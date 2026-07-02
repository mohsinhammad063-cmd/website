import { Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const LogoBadge = () => {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative flex items-center justify-center w-14 h-14 bg-brand-card rounded-full border-2 border-brand-primary/50 shadow-[0_0_15px_rgba(56,189,248,0.4),inset_0_0_15px_rgba(34,197,94,0.3)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6),inset_0_0_20px_rgba(56,189,248,0.5)] transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/30 via-brand-secondary/20 to-brand-purple/30 rounded-full" />
        <Gamepad2 className="w-8 h-8 text-brand-primary group-hover:text-brand-text relative z-10 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-colors duration-300" />
        {/* Pixel stars decoration */}
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-cta rounded-sm shadow-[0_0_5px_#FACC15] animate-pulse"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand-secondary rounded-sm shadow-[0_0_5px_#22C55E] animate-pulse delay-150"></div>
        <div className="absolute top-1/2 -right-3 w-1.5 h-1.5 bg-brand-purple rounded-sm shadow-[0_0_5px_#8B5CF6] animate-pulse delay-300"></div>
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