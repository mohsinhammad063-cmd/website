import { Gamepad2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface GameCardProps {
  title: string;
  category: string;
  description: string;
  isPopular?: boolean;
}

const GameCard = ({ title, category, description, isPopular }: GameCardProps) => {
  return (
    <Link
      to="/best-games"
      className="glass-card p-5 group hover-lift flex flex-col relative overflow-hidden border-brand-secondary/10 hover:border-brand-secondary/40 w-full md:w-auto"
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-brand-cta text-brand-bg text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl flex items-center gap-1 z-10 shadow-[0_0_10px_rgba(250,204,21,0.5)]">
          <Star className="w-3 h-3 fill-brand-bg" /> Popular
        </div>
      )}

      <div className="w-14 h-14 rounded-2xl bg-brand-bg flex items-center justify-center mb-4 border border-brand-secondary/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
        <Gamepad2 className="w-7 h-7 text-brand-secondary group-hover:text-brand-cta transition-colors duration-300" />
      </div>

      <h3 className="text-lg font-bold text-brand-text mb-1 group-hover:text-brand-secondary transition-colors">
        {title}
      </h3>
      <p className="text-xs font-semibold text-brand-purple mb-3 uppercase tracking-wider">
        {category}
      </p>

      <p className="text-brand-muted text-sm line-clamp-2">
        {description}
      </p>
    </Link>
  );
};

export default GameCard;