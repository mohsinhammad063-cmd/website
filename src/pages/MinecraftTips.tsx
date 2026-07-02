import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { articles } from '../data/articles';
import TipCard from '../components/TipCard';
import SEO from '../components/SEO';

const MinecraftTips = () => {
  const minecraftArticles = articles.filter(article => article.game === 'Minecraft' || article.category === 'Minecraft');

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO
        title="Minecraft Tips for Kids | Tips & Tricks by Master Hammad"
        description="Learn the best Minecraft building, survival, and creative tips for beginners and kids."
      />
      <div className="mb-8">
        <Link to="/game-tips" className="text-secondary hover:text-white flex items-center gap-2 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Game Tips
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Minecraft Tips & Tricks</h1>
        <p className="text-muted text-lg max-w-2xl">
          Whether you're just starting your first survival world or looking for new creative building ideas, these guides will help you become a better Minecraft player.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {minecraftArticles.map(article => (
          <TipCard key={article.id} title={article.title} description={article.description} category={article.category} difficulty={article.difficulty} readTime={article.readTime} image={article.image} slug={article.slug} type={article.type} />
        ))}
      </div>
    </div>
  );
};

export default MinecraftTips;
