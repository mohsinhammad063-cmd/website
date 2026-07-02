import { Link } from 'react-router-dom';
import { Clock, ArrowLeft } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="py-20 md:py-32 flex items-center justify-center min-h-[60vh]">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto glass-card p-12 border-brand-primary/30 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-brand-bg flex items-center justify-center border-4 border-brand-primary/30 mb-8 animate-pulse">
            <Clock className="w-12 h-12 text-brand-primary" />
          </div>

          <h1 className="text-4xl font-extrabold text-brand-text mb-6">
            Coming <span className="text-brand-primary">Soon</span>
          </h1>

          <p className="text-xl text-brand-muted mb-10 leading-relaxed">
            We are working hard to bring you this feature. Check back later for updates!
          </p>

          <Link to="/" className="btn-primary flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
