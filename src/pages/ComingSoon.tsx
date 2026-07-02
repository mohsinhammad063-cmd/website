import { Link } from 'react-router-dom';
import { Clock, Home, Lightbulb, ShoppingCart } from 'lucide-react';
import SEO from '../components/SEO';

const ComingSoon = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center text-center px-4 min-h-[70vh]">
      <SEO title="Coming Soon | Tips & Tricks by Master Hammad" description="This feature is being prepared. Check back later for more updates." />
      <div className="w-24 h-24 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 border border-brand-primary/20">
        <Clock className="w-12 h-12 text-brand-primary" />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4">Coming Soon</h1>

      <p className="text-lg text-brand-muted mb-12 max-w-lg">
        This feature is being prepared. Please check back later for more gaming tips, printable guides, and helpful resources.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link to="/" className="btn-secondary flex items-center justify-center gap-2">
          <Home className="w-5 h-5" />
          Back Home
        </Link>
        <Link to="/game-tips" className="btn-primary flex items-center justify-center gap-2">
          <Lightbulb className="w-5 h-5" />
          Explore Game Tips
        </Link>
        <Link to="/shop" className="btn-cta flex items-center justify-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Visit Shop
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
