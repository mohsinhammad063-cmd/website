import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="glass-card p-6 flex flex-col h-full border-brand-cta/20 hover:border-brand-cta/50 hover-lift group">
      <div className="flex-grow">
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-cta/20 text-brand-cta border border-brand-cta/30 mb-4 inline-block">
          {product.type}
        </span>
        <h3 className="text-xl font-bold text-brand-text mb-3 group-hover:text-brand-cta transition-colors">{product.title}</h3>
        <p className="text-brand-muted mb-6 text-sm">{product.description}</p>

        <div className="space-y-2 mb-6">
          {product.includes.slice(0, 2).map((item: string, idx: number) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-cta shrink-0" />
              <span className="text-xs text-brand-muted">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
        <span className="text-xl font-bold text-brand-cta">${product.price}</span>
        <Link to={`/products/${product.slug}`} className="text-brand-cta font-medium text-sm flex items-center hover:text-brand-text transition-colors">
          View Details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
