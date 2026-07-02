import { Link } from 'react-router-dom';
import { type LucideIcon, ArrowRight } from 'lucide-react';

export interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  path: string;
  colorClass: string;
}

const CategoryCard = ({ title, icon: Icon, path, colorClass }: CategoryCardProps) => {
  const safePath = path === "/" ? "/game-tips" : path;
  return (
    <Link
      to={safePath}
      className={`glass-card p-6 flex flex-col items-center justify-center text-center gap-4 hover-lift group border-transparent hover:border-${colorClass}/30 transition-all duration-300 w-full md:w-auto`}
    >
      <div className={`p-4 rounded-full bg-brand-bg shadow-inner border border-${colorClass}/20 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-8 h-8 text-${colorClass} drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`} />
      </div>

      <div className="flex flex-col items-center gap-2">
        <h3 className="font-bold text-lg text-brand-text group-hover:text-brand-primary transition-colors">
          {title}
        </h3>

        <div className="flex items-center text-xs font-medium text-brand-muted group-hover:text-brand-text transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
          Explore <ArrowRight className="w-3 h-3 ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;