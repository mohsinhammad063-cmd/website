import { Link } from 'react-router-dom';
import { Download, ShieldAlert } from 'lucide-react';
import { resources } from '../data/resources';
import SEO from '../components/SEO';

const FreeResources = () => {
  return (
    <div className="py-12 md:py-20">
      <SEO title="Free Gaming Resources | Tips & Tricks by Master Hammad" description="Download free gaming checklists, rules posters, and practice sheets for safe and balanced gaming." />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-20 h-20 bg-brand-secondary/20 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-brand-secondary/30">
            <Download className="w-10 h-10 text-brand-secondary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4">
            Free <span className="text-brand-secondary">Resources</span>
          </h1>
          <p className="text-lg text-brand-muted mb-8">
            Helpful, free printables and guides to encourage safe gaming habits and better practice.
          </p>

          <div className="bg-brand-primary/10 border border-brand-primary/30 p-4 rounded-xl flex items-start gap-4 text-left inline-block">
            <ShieldAlert className="w-8 h-8 text-brand-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-brand-text">Safety First</h3>
              <p className="text-sm text-brand-muted">
                Always ask a parent or guardian before downloading files or printing documents.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div key={resource.id} className="glass-card hover-lift group border-brand-secondary/10 hover:border-brand-secondary/40 overflow-hidden flex flex-col h-full">
              <div className="h-40 bg-brand-bg/50 p-6 flex items-center justify-center border-b border-white/5">
                <img src={resource.image} alt={resource.title} className="w-20 h-20 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-2">
                  <span className="px-2 py-1 text-xs font-semibold rounded-md bg-brand-purple/20 text-brand-purple border border-brand-purple/30">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-secondary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-brand-muted text-sm mb-6 flex-grow">
                  {resource.description}
                </p>
                <Link to="/coming-soon" className="btn-secondary text-center w-full block flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  View Resource
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreeResources;
