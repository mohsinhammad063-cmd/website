import TipCard from '../components/TipCard';
import { articles } from '../data/articles';

const GameTips = () => {
  const tips = articles.filter(article => article.type === 'tip');
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4">
            Game <span className="text-brand-primary">Tips</span>
          </h1>
          <p className="text-lg text-brand-muted">
            Explore our collection of simple, helpful tips to make you a better player. Filter by your favorite game or difficulty level!
          </p>
        </div>

        {/* Filter placeholders */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button className="px-4 py-2 rounded-full bg-brand-primary text-brand-bg font-bold text-sm">All Tips</button>
          <button className="px-4 py-2 rounded-full glass-card hover:bg-brand-card text-brand-muted hover:text-brand-text text-sm font-medium transition-colors border-brand-primary/20">Minecraft</button>
          <button className="px-4 py-2 rounded-full glass-card hover:bg-brand-card text-brand-muted hover:text-brand-text text-sm font-medium transition-colors border-brand-primary/20">Roblox</button>
          <button className="px-4 py-2 rounded-full glass-card hover:bg-brand-card text-brand-muted hover:text-brand-text text-sm font-medium transition-colors border-brand-primary/20">Racing</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <TipCard key={index} {...tip} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameTips;