import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { articles } from '../data/articles';
import TipCard from '../components/TipCard';
import SEO from '../components/SEO';

const RacingGameTips = () => {
  const racingArticles = articles.filter(article => article.category === 'Racing Games');

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO
        title="Racing Game Tips | Tips & Tricks by Master Hammad"
        description="Learn simple tips to corner better, use boosts, and win more racing games."
      />
      <div className="mb-8">
        <Link to="/game-tips" className="text-secondary hover:text-white flex items-center gap-2 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Game Tips
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Racing Game Tips</h1>
        <p className="text-muted text-lg max-w-2xl">
          Discover the best ways to corner, when to use boosts, and how to choose the right car for the track.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {racingArticles.map(article => (
          <TipCard key={article.id} title={article.title} description={article.description} category={article.category} difficulty={article.difficulty} readTime={article.readTime} image={article.image} slug={article.slug} type={article.type} />
        ))}
      </div>
    </div>
  );
};

export default RacingGameTips;
