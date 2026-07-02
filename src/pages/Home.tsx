import { Gamepad2, Lightbulb, Trophy, BookOpen, Shield, ListOrdered, ArrowRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SafetySection from '../components/SafetySection';
import CTASection from '../components/CTASection';
import CategoryCard from '../components/CategoryCard';
import TipCard from '../components/TipCard';
import GameCard from '../components/GameCard';

const categories = [
  { title: "Game Tips", icon: Lightbulb, path: "/game-tips", color: "brand-primary" },
  { title: "Tricks & Guides", icon: Gamepad2, path: "/tricks-guides", color: "brand-purple" },
  { title: "Best Games", icon: Trophy, path: "/best-games", color: "brand-cta" },
  { title: "Beginner Guides", icon: BookOpen, path: "/beginner-guides", color: "brand-secondary" },
  { title: "Safe Gaming", icon: Shield, path: "/", color: "brand-secondary" }, // Reuses safety styling
  { title: "Top 10 Lists", icon: ListOrdered, path: "/best-games", color: "brand-primary" },
];

import { articles } from '../data/articles';

const popularGames = [
  { title: "Minecraft", category: "Survival / Creative", description: "Build, explore, and survive in an infinite blocky world.", isPopular: true },
  { title: "Roblox", category: "Platform", description: "Play millions of community-created games or make your own.", isPopular: true },
  { title: "Fortnite", category: "Action", description: "Team up and compete to be the last one standing in Battle Royale." },
  { title: "EA FC / FIFA", category: "Sports", description: "Build your ultimate team and play soccer matches online." },
  { title: "Mario Kart 8", category: "Racing Games", description: "Race against friends and use items to win the cup." },
  { title: "Tetris Effect", category: "Puzzle Games", description: "A mesmerizing and relaxing take on the classic puzzle game." },
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
            {articles.filter(a => a.type === 'tip').slice(0, 3).map((tip, index) => (
              <TipCard key={index} {...tip} />
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
              <GameCard key={index} {...game} />
            ))}
          </div>
        </div>
      </section>

      <SafetySection />

      {/* About Master Hammad excerpt */}
      <section className="py-16">
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

      <CTASection />
    </div>
  );
};

export default Home;