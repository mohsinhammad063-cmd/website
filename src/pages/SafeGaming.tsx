import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { articles } from '../data/articles';
import TipCard from '../components/TipCard';
import SEO from '../components/SEO';

const SafeGaming = () => {
  const safetyArticles = articles.filter(article => article.category === 'Safety' || article.slug.includes('safe'));

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO
        title="Safe Gaming Rules for Kids | Tips & Tricks by Master Hammad"
        description="Learn how to stay safe online, keep your information private, and play games safely."
      />
      <div className="mb-8">
        <Link to="/" className="text-secondary hover:text-white flex items-center gap-2 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Safe Gaming</h1>
        <p className="text-muted text-lg max-w-2xl">
          Online safety is the most important part of gaming. Learn how to protect your information and avoid scams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {safetyArticles.map(article => (
          <TipCard key={article.id} title={article.title} description={article.description} category={article.category} difficulty={article.difficulty} readTime={article.readTime} image={article.image} slug={article.slug} type={article.type} />
        ))}
      </div>
    </div>
  );
};

export default SafeGaming;
