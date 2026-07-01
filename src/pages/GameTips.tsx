import TipCard from '../components/TipCard';

const tips = [
  {
    title: "Top 10 Minecraft Tips for Beginners",
    description: "Learn how to survive your first night, find food, and build a safe shelter in Minecraft.",
    category: "Minecraft",
    difficulty: "Beginner" as const,
    readTime: "5 min"
  },
  {
    title: "How to Get Better at Roblox Obby Games",
    description: "Master jumps, avoid common traps, and complete difficult obstacle courses with these simple tricks.",
    category: "Roblox",
    difficulty: "Medium" as const,
    readTime: "4 min"
  },
  {
    title: "Best Settings for Smooth Gameplay",
    description: "Adjust your graphics, sensitivity, and audio settings to make your games run perfectly and feel better.",
    category: "General",
    difficulty: "Easy" as const,
    readTime: "3 min"
  },
  {
    title: "How to Practice Without Getting Frustrated",
    description: "Learning new skills takes time. Discover ways to stay calm, have fun, and improve steadily.",
    category: "Mindset",
    difficulty: "Beginner" as const,
    readTime: "6 min"
  },
  {
    title: "Simple Tips to Win More Racing Games",
    description: "Discover the best ways to corner, when to use boosts, and how to choose the right car for the track.",
    category: "Racing Games",
    difficulty: "Medium" as const,
    readTime: "4 min"
  },
  {
    title: "How to Build Better in Minecraft",
    description: "Make your houses look amazing with these simple design tricks, using depth, texture, and good lighting.",
    category: "Minecraft",
    difficulty: "Medium" as const,
    readTime: "7 min"
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
            <TipCard key={index} {...tip} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameTips;