import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

const tips = [
  {
    title: "Top 10 Minecraft Tips for Beginners",
    description: "Learn how to survive your first night, find food, and build a safe shelter in Minecraft.",
    game: "Minecraft",
    difficulty: "Beginner" as const,
    ageBadge: "8-15",
    readTime: "5 min",
    slug: "top-10-minecraft-tips-for-beginners"
  },
  {
    title: "How to Get Better at Roblox Obby Games",
    description: "Master jumps, avoid common traps, and complete difficult obstacle courses with these simple tricks.",
    game: "Roblox",
    difficulty: "Medium" as const,
    ageBadge: "8-15",
    readTime: "4 min",
    slug: "how-to-get-better-at-roblox-obby-games"
  },
  {
    title: "Best Settings for Smooth Gameplay",
    description: "Learn how to adjust your graphics and controls so your game runs faster and feels better to play.",
    game: "General",
    difficulty: "Easy" as const,
    ageBadge: "8-15",
    readTime: "3 min",
    slug: "best-settings-for-smooth-gameplay"
  },
  {
    title: "How to Practice Without Getting Frustrated",
    description: "Tips on taking breaks, setting small goals, and staying calm when learning a new game.",
    game: "General",
    difficulty: "Beginner" as const,
    ageBadge: "8-15",
    readTime: "4 min",
    slug: "how-to-practice-without-getting-frustrated"
  },
  {
    title: "Simple Tips to Win More Racing Games",
    description: "Discover the best ways to corner, when to use boosts, and how to choose the right car.",
    game: "Racing",
    difficulty: "Medium" as const,
    ageBadge: "8-15",
    readTime: "3 min",
    slug: "simple-tips-to-win-more-racing-games"
  },
  {
    title: "How to Build Better in Minecraft",
    description: "Move beyond dirt huts and learn how to use different blocks and shapes for cooler houses.",
    game: "Minecraft",
    difficulty: "Medium" as const,
    ageBadge: "8-15",
    readTime: "6 min",
    slug: "how-to-build-better-in-minecraft"
  },
  {
    title: "How to Stay Safe While Playing Online Games",
    description: "Important rules for chatting, making friends, and protecting your personal information.",
    game: "Safety",
    difficulty: "Beginner" as const,
    ageBadge: "8-15",
    readTime: "5 min",
    slug: "how-to-stay-safe-while-playing-online-games"
  },
  {
    title: "How to Avoid Scams in Online Games",
    description: "Learn how to spot fake offers for free coins and items to keep your account safe.",
    game: "Safety",
    difficulty: "Beginner" as const,
    ageBadge: "8-15",
    readTime: "4 min",
    slug: "how-to-avoid-scams-in-online-games"
  }
];

const GameTips = () => {
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
            <div key={index} className="glass-card overflow-hidden flex flex-col h-full border-brand-primary/20 hover:border-brand-primary/50 hover-lift group">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                    {tip.game}
                  </span>
                  <div className="flex gap-2">
                     <span className={`px-2 py-1 text-xs font-bold rounded-md border
                        ${tip.difficulty === 'Beginner' ? 'bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20' :
                          tip.difficulty === 'Easy' ? 'bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20' :
                          'bg-brand-cta/10 text-brand-cta border-brand-cta/20'}`}>
                       {tip.difficulty}
                     </span>
                     <span className="px-2 py-1 text-xs font-bold rounded-md bg-brand-purple/10 text-brand-purple border border-brand-purple/20">
                       {tip.ageBadge}
                     </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-3 group-hover:text-brand-primary transition-colors">{tip.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">{tip.description}</p>
                <div className="flex items-center text-xs text-brand-muted/70 gap-4 mt-auto">
                  <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {tip.readTime}</span>
                </div>
              </div>
              <div className="border-t border-brand-primary/10 p-4 bg-brand-bg/30 group-hover:bg-brand-primary/5 transition-colors">
                <Link to={`/tips/${tip.slug}`} className="text-brand-primary font-medium text-sm flex items-center justify-between w-full">
                  Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameTips;