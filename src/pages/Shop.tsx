import { Link } from 'react-router-dom';
import { ShoppingCart, ShieldAlert } from 'lucide-react';
import { products } from '../data/products';
import SEO from '../components/SEO';

const Shop = () => {
  return (
    <div className="py-12 md:py-20">
      <SEO
        title="Gaming Guides and Printables for Kids | Master Hammad Shop"
        description="Explore parent-approved gaming tips packs, safe gaming checklists, practice trackers, and printable resources for young players."
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-20 h-20 bg-brand-cta/20 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-brand-cta/30">
            <ShoppingCart className="w-10 h-10 text-brand-cta" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4">
            Official <span className="text-brand-cta">Shop</span>
          </h1>
          <p className="text-lg text-brand-muted mb-8">
            Helpful Gaming Packs for Kids and Parents. Simple printable guides, checklists, and practice trackers to help young players learn, stay safe, and build better gaming habits.
          </p>

          <div className="bg-brand-primary/10 border border-brand-primary/30 p-4 rounded-xl flex items-start gap-4 text-left inline-block">
            <ShieldAlert className="w-8 h-8 text-brand-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-brand-text">Parental Notice</h3>
              <p className="text-sm text-brand-muted">
                Purchases should be made by a parent or guardian. Kids should always ask permission before buying or downloading anything online.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="glass-card hover-lift group border-brand-cta/10 hover:border-brand-cta/40 overflow-hidden flex flex-col h-full">
              <div className="h-48 bg-brand-bg/50 p-6 flex items-center justify-center border-b border-white/5">
                <img src={product.image} alt={product.title} className="w-24 h-24 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2 py-1 text-xs font-semibold rounded-md bg-brand-purple/20 text-brand-purple border border-brand-purple/30">
                    {product.type}
                  </span>
                  <span className="font-bold text-brand-cta text-lg">${product.price}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-cta transition-colors">
                  {product.title}
                </h3>
                <p className="text-brand-muted text-sm mb-6 flex-grow">
                  {product.description}
                </p>
                <Link to={`/products/${product.slug}`} className="btn-cta text-center w-full block">
                  View Product
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
