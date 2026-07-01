import { Link } from 'react-router-dom';
import { Clock, BarChart, ChevronRight } from 'lucide-react';

export interface TipCardProps {
  id?: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Easy' | 'Medium';
  readTime: string;
}

const TipCard = ({ title, description, category, difficulty, readTime }: TipCardProps) => {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-brand-secondary bg-brand-secondary/10 border-brand-secondary/30';
      case 'Easy':
        return 'text-brand-primary bg-brand-primary/10 border-brand-primary/30';
      case 'Medium':
        return 'text-brand-cta bg-brand-cta/10 border-brand-cta/30';
      default:
        return 'text-brand-muted bg-brand-muted/10 border-brand-muted/30';
    }
  };

  return (
    <div className="glass-card p-6 flex flex-col h-full hover-lift group border-brand-primary/10 hover:border-brand-primary/40">
      <div className="flex justify-between items-start mb-4 gap-2">
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-purple/20 text-brand-purple border border-brand-purple/30">
          {category}
        </span>
        <span className={`px-2 py-1 text-xs font-medium rounded-md border flex items-center gap-1 ${getDifficultyColor()}`}>
          <BarChart className="w-3 h-3" />
          {difficulty}
        </span>
      </div>

      <h3 className="text-xl font-bold text-brand-text mb-3 line-clamp-2 group-hover:text-brand-primary transition-colors">
        {title}
      </h3>

      <p className="text-brand-muted text-sm mb-6 line-clamp-3 flex-grow">
        {description}
      </p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
        <div className="flex items-center text-xs text-brand-muted gap-1">
          <Clock className="w-3.5 h-3.5" />
          {readTime} read
        </div>

        {/* Using Link to game-tips as a placeholder for full article view */}
        <Link
          to="/game-tips"
          className="flex items-center gap-1 text-sm font-bold text-brand-primary hover:text-brand-text transition-colors"
        >
          Read more
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default TipCard;