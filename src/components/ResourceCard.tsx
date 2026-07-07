import { Link } from 'react-router-dom';
import { Download, ArrowRight } from 'lucide-react';
import type { Resource } from '../data/resources';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <div className="glass-card p-6 flex flex-col h-full border-brand-secondary/20 hover:border-brand-secondary/50 hover-lift group">
      <div className="flex-grow">
        <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center mb-4 border border-brand-secondary/30">
          <Download className="w-6 h-6 text-brand-secondary" />
        </div>
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-secondary/20 text-brand-secondary border border-brand-secondary/30 mb-4 inline-block">
          {resource.type}
        </span>
        <h3 className="text-xl font-bold text-brand-text mb-3 group-hover:text-brand-secondary transition-colors">{resource.title}</h3>
        <p className="text-brand-muted mb-4 text-sm">{resource.description}</p>
      </div>
      <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
        <span className="text-sm font-bold text-brand-secondary">Free</span>
        <Link to={`/free-resources/${resource.slug}`} className="text-brand-secondary font-medium text-sm flex items-center hover:text-brand-text transition-colors">
          Download <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ResourceCard;
