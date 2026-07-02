import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { articles } from '../data/articles';
import TipCard from '../components/TipCard';
import SEO from '../components/SEO';

const RobloxTips = () => {
  const robloxArticles = articles.filter(article => article.game === 'Roblox' || article.category === 'Roblox');

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO
        title="Roblox Tips & Safety | Tips & Tricks by Master Hammad"
        description="Helpful tips for playing Roblox games, completing obbies, and staying safe online."
      />
      <div className="mb-8">
        <Link to="/game-tips" className="text-secondary hover:text-white flex items-center gap-2 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Game Tips
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Roblox Tips & Safety</h1>
        <p className="text-muted text-lg max-w-2xl">
          Learn how to find good games, complete difficult obbies, and most importantly, how to stay safe while playing Roblox.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {robloxArticles.map(article => (
          <TipCard key={article.id} title={article.title} description={article.description} category={article.category} difficulty={article.difficulty} readTime={article.readTime} image={article.image} slug={article.slug} type={article.type} />
        ))}
      </div>
    </div>
  );
};

export default RobloxTips;
