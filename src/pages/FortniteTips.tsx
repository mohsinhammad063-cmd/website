import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { articles } from '../data/articles';
import TipCard from '../components/TipCard';
import SEO from '../components/SEO';

const FortniteTips = () => {
  const fortniteArticles = articles.filter(article => article.game === 'Fortnite' || article.category === 'Fortnite');

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO
        title="Fortnite Tips for Beginners | Tips & Tricks by Master Hammad"
        description="Beginner tips to improve practice, aim, and strategy in Fortnite."
      />
      <div className="mb-8">
        <Link to="/game-tips" className="text-secondary hover:text-white flex items-center gap-2 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Game Tips
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Fortnite Tips</h1>
        <p className="text-muted text-lg max-w-2xl">
          Simple beginner tips to help you practice better, learn the map, and play safer in Fortnite.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fortniteArticles.map(article => (
          <TipCard key={article.id} title={article.title} description={article.description} category={article.category} difficulty={article.difficulty} readTime={article.readTime} image={article.image} slug={article.slug} type={article.type} />
        ))}
      </div>
    </div>
  );
};

export default FortniteTips;
