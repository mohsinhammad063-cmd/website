import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ShieldAlert, CheckCircle2, ChevronLeft } from 'lucide-react';
import SEO from '../components/SEO';

const Products = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="py-20 text-center container mx-auto px-4">
        <SEO title="Product Not Found | Tips & Tricks by Master Hammad" description="The requested product could not be found." />
        <h1 className="text-4xl font-bold text-brand-text mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-primary">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20">
      <SEO title={`${product.title} | Tips & Tricks by Master Hammad`} description={product.description} />
      <div className="container mx-auto px-4 md:px-6">
        <Link to="/shop" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors mb-8 group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Shop
        </Link>

        <div className="glass-card p-8 md:p-12 border-brand-cta/20 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center p-12 bg-brand-bg rounded-2xl border border-white/5 relative">
              <div className="absolute inset-0 bg-brand-cta/10 rounded-2xl blur-xl"></div>
              <img src={product.image} alt={product.title} className="w-48 h-48 relative z-10" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-sm font-semibold rounded-md bg-brand-purple/20 text-brand-purple border border-brand-purple/30">
                  {product.type}
                </span>
                <span className="px-3 py-1 text-sm font-semibold rounded-md bg-brand-bg border border-white/10 text-brand-text">
                  For: {product.audience}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-brand-text mb-2">
                {product.title}
              </h1>
              <p className="text-2xl font-bold text-brand-cta mb-6">${product.price}</p>

              <p className="text-lg text-brand-muted mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-8">
                <h3 className="font-bold text-brand-text mb-3">What's included:</h3>
                <ul className="space-y-2">
                  {product.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-brand-muted">
                      <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-primary/10 border border-brand-primary/30 p-4 rounded-xl flex gap-4 mb-8">
                <ShieldAlert className="w-6 h-6 text-brand-primary shrink-0" />
                <p className="text-sm text-brand-text">{product.safetyNote}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/coming-soon" className="btn-cta text-center text-lg w-full sm:w-auto px-8">
                  Coming Soon
                </Link>
                <Link to="/contact" className="btn-primary text-center text-lg w-full sm:w-auto px-8">
                  Contact for Availability
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
