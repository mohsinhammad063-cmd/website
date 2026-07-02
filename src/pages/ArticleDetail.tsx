import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Shield, Gamepad2, AlertCircle, ChevronLeft, ChevronRight, Hash } from 'lucide-react';
import { articles } from '../data/articles';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find article from both tips and guides based on slug
  const article = articles.find((a) => a.slug === slug);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Master Hammad`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.description);
      }
    } else {
      document.title = 'Article Not Found | Master Hammad';
    }
  }, [article]);

  if (!article) {
    return (
      <div className="py-20 flex flex-col items-center justify-center text-center px-4 min-h-[60vh]">
        <div className="w-24 h-24 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 border border-brand-primary/20">
          <AlertCircle className="w-12 h-12 text-brand-primary" />
        </div>
        <h1 className="text-4xl font-bold text-brand-text mb-4">Article Not Found</h1>
        <p className="text-brand-muted mb-8 max-w-md">
          Oops! It looks like the tip or guide you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/game-tips" className="btn-primary">
          Back to Game Tips
        </Link>
      </div>
    );
  }

  const getDifficultyColor = () => {
    switch (article.difficulty) {
      case 'Beginner': return 'text-brand-secondary bg-brand-secondary/10 border-brand-secondary/30';
      case 'Easy': return 'text-brand-primary bg-brand-primary/10 border-brand-primary/30';
      case 'Medium': return 'text-brand-cta bg-brand-cta/10 border-brand-cta/30';
      case 'Hard': return 'text-brand-purple bg-brand-purple/10 border-brand-purple/30';
      default: return 'text-brand-muted bg-brand-muted/10 border-brand-muted/30';
    }
  };

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">

        {/* Back Button */}
        <Link
          to={article.type === 'tip' ? '/game-tips' : '/tricks-guides'}
          className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to {article.type === 'tip' ? 'Game Tips' : 'Guides'}
        </Link>

        {/* Hero Section */}
        <div className="glass-card p-8 md:p-12 mb-12 relative overflow-hidden border-brand-primary/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>

          <div className="flex flex-wrap gap-3 mb-6 relative z-10">
            <span className="px-3 py-1 text-sm font-semibold rounded-full bg-brand-purple/20 text-brand-purple border border-brand-purple/30">
              {article.category}
            </span>
            <span className={`px-3 py-1 text-sm font-medium rounded-full border ${getDifficultyColor()}`}>
              {article.difficulty}
            </span>
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-brand-card border border-white/10 text-brand-text flex items-center gap-1">
              <Clock className="w-4 h-4 text-brand-muted" />
              {article.readTime}
            </span>
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-brand-card border border-white/10 text-brand-text">
              Ages {article.ageRange}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6 leading-tight relative z-10">
            {article.title}
          </h1>

          <p className="text-xl text-brand-muted max-w-3xl relative z-10 leading-relaxed">
            {article.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Table of Contents Box */}
            <div className="glass-card p-6 border-brand-secondary/20">
              <h3 className="text-xl font-bold text-brand-text mb-4 flex items-center gap-2">
                <Hash className="w-5 h-5 text-brand-secondary" />
                In this {article.type}
              </h3>
              <ul className="space-y-3">
                {article.sections.map((section, idx) => (
                  <li key={idx}>
                    <a href={`#section-${idx}`} className="text-brand-muted hover:text-brand-secondary transition-colors flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" />
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Sections */}
            <div className="space-y-8">
              {article.sections.map((section, idx) => (
                <section key={idx} id={`section-${idx}`} className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-brand-text mb-4">
                    {section.heading}
                  </h2>
                  <div className="prose prose-invert prose-lg max-w-none text-brand-muted">
                    <p>{section.body}</p>
                  </div>
                </section>
              ))}
            </div>

            {/* Safety Reminder */}
            {article.safetyNote && (
              <div className="p-6 rounded-2xl bg-brand-primary/10 border border-brand-primary/30 flex gap-4 mt-12">
                <Shield className="w-8 h-8 text-brand-primary shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-brand-text mb-1">Safety First!</h4>
                  <p className="text-brand-muted">{article.safetyNote}</p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Tips Box */}
            <div className="glass-card p-6 border-brand-cta/20 sticky top-24">
              <h3 className="text-xl font-bold text-brand-text mb-4 flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-brand-cta" />
                Quick Tips Summary
              </h3>
              <ul className="space-y-3">
                {article.tips.map((tip, idx) => (
                  <li key={idx} className="flex gap-3 text-brand-muted">
                    <span className="text-brand-cta font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center glass-card p-12 border-brand-secondary/30 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-brand-secondary/10 rounded-full mix-blend-screen filter blur-[100px] opacity-60"></div>
          <h2 className="text-3xl font-bold text-brand-text mb-4 relative z-10">Want more simple gaming tips?</h2>
          <p className="text-lg text-brand-muted mb-8 max-w-xl mx-auto relative z-10">
            Keep learning and improving your skills with our easy-to-follow guides and tricks.
          </p>
          <Link to="/game-tips" className="btn-secondary relative z-10 text-lg shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            Explore More Game Tips
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ArticleDetail;
