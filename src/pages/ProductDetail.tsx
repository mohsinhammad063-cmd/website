import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, ShieldAlert, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { products, type Product } from '../data/products';
import SEO from '../components/SEO';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p: Product) => p.slug === slug);

  if (!product) {
    return (
      <div className="py-20 flex flex-col items-center justify-center text-center px-4 min-h-[60vh]">
        <h1 className="text-4xl font-bold text-brand-text mb-4">Product Not Found</h1>
        <p className="text-brand-muted mb-8 max-w-md">
          Oops! It looks like this product doesn't exist or has been moved.
        </p>
        <Link to="/shop" className="btn-primary">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20">
      <SEO
        title={`${product.title} | Shop Master Hammad`}
        description={product.description}
      />
      <div className="container mx-auto px-4 md:px-6">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Image / Icon */}
          <div className="glass-card p-12 flex items-center justify-center border-brand-cta/30 bg-brand-cta/5 min-h-[400px]">
            <ShoppingBag className="w-32 h-32 text-brand-cta opacity-50" />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="px-3 py-1 text-sm font-semibold rounded-full bg-brand-cta/20 text-brand-cta border border-brand-cta/30 w-fit mb-4">
              {product.type}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-4 leading-tight">
              {product.title}
            </h1>
            <p className="text-2xl font-bold text-brand-cta mb-6">${product.price}</p>

            <p className="text-lg text-brand-muted mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-brand-text mb-4">What's Included:</h3>
              <ul className="space-y-3">
                {product.includes.map((item: string, idx: number) => (
                  <li key={idx} className="flex gap-3 text-brand-muted">
                    <CheckCircle2 className="w-5 h-5 text-brand-cta shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
               <h3 className="text-xl font-bold text-brand-text mb-2">Who is it for?</h3>
               <p className="text-brand-muted">{product.audience}</p>
            </div>

            <div className="glass-card p-4 border-brand-secondary/30 bg-brand-secondary/5 mb-8 flex items-start gap-4">
              <ShieldAlert className="w-6 h-6 text-brand-secondary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-brand-text mb-1">Parent-Safe Notice</h4>
                <p className="text-sm text-brand-muted">
                  {product.safetyNote}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Link to="/coming-soon" className="btn-cta text-center flex-1">
                Coming Soon
              </Link>
              <Link to="/contact" className="btn-secondary text-center flex-1">
                Contact for Availability
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
