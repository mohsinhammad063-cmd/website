import { Link } from 'react-router-dom';
import { Download, ShieldAlert } from 'lucide-react';

const FreeResources = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-secondary/10 border-2 border-brand-secondary/30 mb-6">
            <Download className="w-10 h-10 text-brand-secondary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4">
            Free <span className="text-brand-secondary">Resources</span>
          </h1>
          <p className="text-lg text-brand-muted">
            Helpful downloads to make gaming safer and more fun.
          </p>
        </div>

        <div className="glass-card p-6 border-brand-secondary/30 bg-brand-secondary/5 mb-12 max-w-3xl mx-auto flex items-start gap-4">
          <ShieldAlert className="w-8 h-8 text-brand-secondary shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-brand-text mb-2">Parent-Safe Notice</h3>
            <p className="text-brand-muted leading-relaxed">
              Kids should always ask permission before downloading anything online.
            </p>
          </div>
        </div>

        <div className="text-center">
            <Link to="/shop" className="btn-secondary inline-block">Browse All Resources in Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default FreeResources;
