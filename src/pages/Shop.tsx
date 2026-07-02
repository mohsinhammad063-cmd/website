import { ShoppingBag, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    title: "Master Hammad Gaming Tips Starter Pack",
    description: "Get our best beginner tips in one easy-to-read guide.",
    price: "$4.99",
  },
  {
    title: "Safe Gaming Checklist for Kids",
    description: "A printable checklist to help keep your gaming sessions safe.",
    price: "Free",
  },
  {
    title: "Gaming Break Planner",
    description: "Plan your gaming time and screen breaks perfectly.",
    price: "Free",
  },
  {
    title: "Master Hammad Pro Tips Bundle",
    description: "Advanced tricks for your favorite games.",
    price: "$9.99",
  }
];

const Shop = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-cta/10 border-2 border-brand-cta/30 mb-6">
            <ShoppingBag className="w-10 h-10 text-brand-cta" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4">
            Official <span className="text-brand-cta">Shop</span>
          </h1>
          <p className="text-lg text-brand-muted">
            Guides, checklists, and helpful resources for young gamers.
          </p>
        </div>

        <div className="glass-card p-6 border-brand-secondary/30 bg-brand-secondary/5 mb-12 max-w-3xl mx-auto flex items-start gap-4">
          <ShieldAlert className="w-8 h-8 text-brand-secondary shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-brand-text mb-2">Parent-Safe Notice</h3>
            <p className="text-brand-muted leading-relaxed">
              Purchases should be made by a parent or guardian. Kids should always ask permission before buying or downloading anything online.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, idx) => (
            <div key={idx} className="glass-card p-8 flex flex-col h-full border-brand-primary/20 hover:border-brand-primary/50 hover-lift group">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-brand-text mb-3 group-hover:text-brand-primary transition-colors">{product.title}</h3>
                <p className="text-brand-muted mb-6 leading-relaxed">{product.description}</p>
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle2 className="w-5 h-5 text-brand-secondary" />
                  <span className="text-sm font-medium text-brand-muted">Instant Digital Download</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                <span className="text-2xl font-bold text-brand-cta">{product.price}</span>
                <Link to="/coming-soon" className="btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Shop;
