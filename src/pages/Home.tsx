import { Gamepad2, Lightbulb, Trophy, BookOpen, Shield, ArrowRight, Eye, ShoppingCart, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SafetySection from '../components/SafetySection';
import CTASection from '../components/CTASection';
import CategoryCard from '../components/CategoryCard';
import TipCard from '../components/TipCard';

import { articles } from '../data/articles';
import { products } from '../data/products';
import { resources } from '../data/resources';
import SEO from '../components/SEO';

const categories = [
  { title: "Game Tips", icon: Lightbulb, path: "/game-tips", color: "brand-primary" },
  { title: "Tricks & Guides", icon: Gamepad2, path: "/tricks-guides", color: "brand-purple" },
  { title: "Best Games", icon: Trophy, path: "/best-games", color: "brand-cta" },
  { title: "Beginner Guides", icon: BookOpen, path: "/beginner-guides", color: "brand-secondary" },
  { title: "Safe Gaming", icon: Shield, path: "/safe-gaming", color: "brand-secondary" },
  { title: "Free Resources", icon: Download, path: "/free-resources", color: "brand-primary" },
];

const Home = () => {
  return (
    <div>
      <SEO title="Tips & Tricks by Master Hammad | Gaming Tips for Kids and Teens" description="Explore beginner-friendly gaming tips, tricks, safe gaming advice, printable resources, and simple game guides by Master Hammad for young players aged 8–15." />
      <HeroSection />

      {/* Trust/Safety Strip */}
      <section className="border-y border-white/5 bg-brand-card/50 backdrop-blur-sm py-4 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm font-medium text-brand-muted">
            <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-brand-secondary" /> Kid-friendly gaming tips</div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-brand-primary/50"></div>
            <div className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-brand-primary" /> Beginner-friendly guides</div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-brand-primary/50"></div>
            <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-brand-secondary" /> Safe gaming advice</div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-brand-primary/50"></div>
            <div className="flex items-center gap-2"><Eye className="w-4 h-4 text-brand-purple" /> Easy to read</div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Explore by <span className="text-brand-primary">Category</span></h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Find exactly what you need to improve your skills and have more fun.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((cat, index) => (
              <CategoryCard
                key={index}
                title={cat.title}
                icon={cat.icon}
                path={cat.path}
                colorClass={cat.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tips */}
      <section className="py-20 bg-brand-card/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">Featured <span className="text-brand-primary">Tips</span></h2>
              <p className="text-brand-muted">Fresh guides to help you level up today.</p>
            </div>
            <Link to="/game-tips" className="hidden md:flex items-center gap-1 text-sm font-bold text-brand-primary hover:text-brand-text transition-colors">
              View all Tips <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.filter(a => a.type === 'tip').slice(0, 6).map((tip, index) => (
              <TipCard key={index} {...tip} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/game-tips" className="btn-primary inline-flex">
              View all tips
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Tricks */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">Popular <span className="text-brand-purple">Tricks</span></h2>
              <p className="text-brand-muted">Master advanced techniques and find secrets.</p>
            </div>
            <Link to="/tricks-guides" className="hidden md:flex items-center gap-1 text-sm font-bold text-brand-purple hover:text-brand-text transition-colors">
              View all Guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {articles.filter(a => a.type === 'guide').slice(0, 4).map((guide, index) => (
              <TipCard key={index} {...guide} />
            ))}
          </div>
        </div>
      </section>

      {/* Shop Preview */}
      <section className="py-20 bg-brand-card/30 relative border-y border-brand-cta/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-brand-cta/5 rounded-full mix-blend-screen filter blur-[100px] opacity-60"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <ShoppingCart className="w-12 h-12 text-brand-cta mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Helpful Gaming Packs for Kids and Parents</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Simple printable guides, checklists, and practice trackers to help young players learn, stay safe, and build better gaming habits.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="glass-card hover-lift group border-brand-cta/10 hover:border-brand-cta/40 overflow-hidden flex flex-col">
                <div className="h-40 bg-brand-bg/50 p-6 flex items-center justify-center border-b border-white/5">
                  <img src={product.image} alt={product.title} className="w-20 h-20 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-grow text-center">
                  <h3 className="text-lg font-bold text-brand-text mb-2 group-hover:text-brand-cta transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-brand-muted text-sm mb-4 flex-grow line-clamp-2">
                    {product.description}
                  </p>
                  <Link to={`/products/${product.slug}`} className="btn-cta text-sm w-full block">
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/shop" className="btn-cta text-lg inline-flex shadow-[0_0_20px_rgba(250,204,21,0.3)]">
              Visit Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Free Resources Preview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Download className="w-12 h-12 text-brand-secondary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Free Printables & Posters</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Download these free resources to encourage safe gaming and healthy breaks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {resources.slice(0, 3).map((resource) => (
              <div key={resource.id} className="glass-card hover-lift group border-brand-secondary/10 hover:border-brand-secondary/40 overflow-hidden flex flex-col">
                <div className="h-32 bg-brand-bg/50 flex items-center justify-center border-b border-white/5">
                  <img src={resource.image} alt={resource.title} className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-grow text-center">
                  <h3 className="text-lg font-bold text-brand-text mb-2 group-hover:text-brand-secondary transition-colors">
                    {resource.title}
                  </h3>
                  <Link to="/coming-soon" className="btn-secondary text-sm w-full mt-4 block flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" /> Get Resource
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/free-resources" className="btn-secondary text-lg inline-flex shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              Explore Free Resources
            </Link>
          </div>
        </div>
      </section>

      <SafetySection />

      {/* Parent Trust CTA */}
      <section className="py-16 bg-brand-card/50 border-y border-brand-primary/20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <Shield className="w-16 h-16 text-brand-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6 text-brand-text">For Parents</h2>
          <p className="text-lg text-brand-muted leading-relaxed mb-8">
            This website is made for safe, positive, and beginner-friendly gaming learning. Kids should always ask parents before buying, downloading, or sharing information online.
          </p>
          <Link to="/safe-gaming" className="btn-primary inline-flex">
            Read Our Safety Guidelines
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Home;