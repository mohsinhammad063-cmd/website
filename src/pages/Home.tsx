import { Gamepad2, Lightbulb, Trophy, BookOpen, Shield, ListOrdered, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import CategoryCard from '../components/CategoryCard';

const categories = [
  { title: "Game Tips", icon: Lightbulb, path: "/game-tips", color: "brand-primary" },
  { title: "Tricks & Guides", icon: Gamepad2, path: "/tricks-and-guides", color: "brand-purple" },
  { title: "Best Games", icon: Trophy, path: "/best-games", color: "brand-cta" },
  { title: "Beginner Guides", icon: BookOpen, path: "/beginner-guides", color: "brand-secondary" },
  { title: "Safe Gaming", icon: Shield, path: "/safe-gaming", color: "brand-secondary" }, // Reuses safety styling
  { title: "Top 10 Lists", icon: ListOrdered, path: "/best-games", color: "brand-primary" },
];

const latestTips = [
  {
    title: "Top 10 Minecraft Tips for Beginners",
    description: "Learn how to survive your first night, find food, and build a safe shelter.",
    category: "Minecraft",
    difficulty: "Beginner" as const,
    ageBadge: "8-15",
    readTime: "5 min",
    link: "/minecraft-tips"
  },
  {
    title: "How to Get Better at Roblox Obby Games",
    description: "Master jumps, avoid common traps, and complete difficult obstacle courses with these simple tricks.",
    category: "Roblox",
    difficulty: "Medium" as const,
    ageBadge: "8-15",
    readTime: "4 min",
    link: "/roblox-tips"
  },
  {
    title: "Simple Tips to Win More Racing Games",
    description: "Discover the best ways to corner, when to use boosts, and how to choose the right car for the track.",
    category: "Racing Games",
    difficulty: "Easy" as const,
    ageBadge: "8-15",
    readTime: "3 min",
    link: "/racing-game-tips"
  }
];

const popularGames = [
  { title: "Minecraft Tips", category: "Survival / Creative", description: "Build, explore, and survive safely.", link: "/minecraft-tips" },
  { title: "Roblox Tips", category: "Platform / Social", description: "Play community games and practice tricks.", link: "/roblox-tips" },
  { title: "Fortnite Tips", category: "Action", description: "Team up and learn simple beginner strategies.", link: "/fortnite-tips" },
  { title: "Racing Games", category: "Sports", description: "Cornering and control tips for fast games.", link: "/racing-game-tips" },
  { title: "Puzzle Games", category: "Brain Training", description: "Simple logic and problem-solving tips.", link: "/best-games-for-kids" },
  { title: "Family Games", category: "Co-op", description: "Great games to play together on the couch.", link: "/best-games-for-kids" },
];

const Home = () => {
  return (
    <div>
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

      {/* Latest Tips */}
      <section className="py-20 bg-brand-card/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">Latest <span className="text-brand-purple">Tips</span></h2>
              <p className="text-brand-muted">Fresh guides to help you level up today.</p>
            </div>
            <Link to="/game-tips" className="hidden md:flex items-center gap-1 text-sm font-bold text-brand-primary hover:text-brand-text transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {latestTips.map((tip, index) => (
              <div key={index} className="glass-card overflow-hidden flex flex-col h-full border-brand-primary/20 hover:border-brand-primary/50 hover-lift group">
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                      {tip.category}
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
                  <p className="text-brand-muted text-sm leading-relaxed line-clamp-3 mb-4">{tip.description}</p>
                  <div className="flex items-center text-xs text-brand-muted/70 gap-4 mt-auto">
                    <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {tip.readTime}</span>
                  </div>
                </div>
                <div className="border-t border-brand-primary/10 p-4 bg-brand-bg/30 group-hover:bg-brand-primary/5 transition-colors">
                  <Link to={tip.link} className="text-brand-primary font-medium text-sm flex items-center justify-between w-full">
                    Read Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/game-tips" className="btn-primary inline-flex">
              View all tips
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Guides for <span className="text-brand-cta">Popular Games</span></h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Discover tips and tricks for the games everyone is playing right now.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularGames.map((game, index) => (
              <Link to={game.link} key={index} className="glass-card p-6 border-white/10 hover:border-brand-cta/50 hover-lift group block text-left">
                <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-cta transition-colors">{game.title}</h3>
                <p className="text-xs font-bold text-brand-primary mb-3 uppercase tracking-wider">{game.category}</p>
                <p className="text-brand-muted text-sm">{game.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Safe Gaming Rules */}
      <section className="py-20 bg-brand-card/30 relative border-y border-brand-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-secondary/10 border border-brand-secondary/30 mb-4">
              <Shield className="w-8 h-8 text-brand-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Safe <span className="text-brand-secondary">Gaming Rules</span></h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Follow these important rules to stay safe and have fun online.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 border-brand-secondary/30 flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0 mt-0.5" />
              <p className="text-brand-text font-medium">Never share your real name, home address, school, phone number, or password.</p>
            </div>
            <div className="glass-card p-6 border-brand-secondary/30 flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0 mt-0.5" />
              <p className="text-brand-text font-medium">Ask a parent before downloading games.</p>
            </div>
            <div className="glass-card p-6 border-brand-secondary/30 flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0 mt-0.5" />
              <p className="text-brand-text font-medium">Take breaks after playing.</p>
            </div>
            <div className="glass-card p-6 border-brand-secondary/30 flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0 mt-0.5" />
              <p className="text-brand-text font-medium">Do not talk to strangers in private chats.</p>
            </div>
            <div className="glass-card p-6 border-brand-secondary/30 flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0 mt-0.5" />
              <p className="text-brand-text font-medium">Balance gaming with school, sleep, and outdoor time.</p>
            </div>
            <div className="glass-card p-6 border-brand-secondary/30 flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0 mt-0.5" />
              <p className="text-brand-text font-medium">Report bullying, bad language, or unsafe messages to a parent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Parents Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-card border-brand-purple/30 bg-brand-purple/5 p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-purple mb-4">For Parents</h2>
            <p className="text-lg text-brand-muted leading-relaxed mb-6">
              This website is made to help young players learn gaming tips in a safe, simple, and positive way. We encourage children to play responsibly, take breaks, and ask parents before downloading games or sharing information online.
            </p>
            <Link to="/about" className="btn-secondary inline-flex border border-brand-secondary/50">
              Read Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* About Master Hammad excerpt */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="w-20 h-20 bg-brand-card rounded-2xl mx-auto mb-6 flex items-center justify-center border border-brand-primary/30 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <Gamepad2 className="w-10 h-10 text-brand-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-brand-text">About Master Hammad</h2>
          <p className="text-lg text-brand-muted leading-relaxed mb-8">
            Master Hammad created this website to share simple and useful gaming tips for kids and young players who want to improve their skills, learn tricks, and enjoy games safely.
          </p>
          <Link to="/about" className="btn-primary inline-flex">
            Learn More
          </Link>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-primary/20 via-brand-purple/20 to-brand-cta/20 rounded-[100%] blur-[100px] opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="glass-card max-w-4xl mx-auto p-10 md:p-16 border-brand-primary/30 flex flex-col items-center">
            <Gamepad2 className="w-16 h-16 text-brand-cta mb-6 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)] animate-bounce" />
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-6">
              Ready to become a <span className="neon-text">smarter gamer?</span>
            </h2>
            <p className="text-xl text-brand-muted mb-10 max-w-2xl">
              Start learning new tricks today and impress your friends with your new skills!
            </p>
            <Link to="/game-tips" className="btn-cta text-lg flex items-center gap-2 group">
              Read the Latest Tips <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;