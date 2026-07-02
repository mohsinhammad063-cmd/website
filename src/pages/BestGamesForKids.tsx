import { Link } from 'react-router-dom';
import { Palette, Puzzle, Flag, Users, Heart, Shield, ArrowLeft } from 'lucide-react';
import GameCard from '../components/GameCard';

const BestGamesForKids = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <Link to="/best-games" className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-text mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Best Games
          </Link>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4">
              Best Games for <span className="text-brand-cta">Kids Age 8–15</span>
            </h1>
            <p className="text-lg text-brand-muted">
              A curated list of fun, safe, and engaging games that are perfect for young players and families.
            </p>
          </div>
        </div>

        <div className="glass-card p-6 border-brand-secondary/30 bg-brand-secondary/5 mb-12 flex flex-col sm:flex-row items-center sm:items-start gap-4 max-w-4xl mx-auto">
          <Shield className="w-10 h-10 text-brand-secondary shrink-0" />
          <div>
            <h3 className="font-bold text-brand-text text-lg mb-2 text-center sm:text-left">Parent Safety Notes</h3>
            <ul className="text-brand-muted list-disc list-inside space-y-1 text-sm md:text-base">
              <li>Always check the ESRB or PEGI age ratings before buying a game.</li>
              <li>Setup parental controls on consoles to manage playtime and purchases.</li>
              <li>Turn off public voice chat in multiplayer games for younger kids.</li>
            </ul>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">

          <section>
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <Palette className="w-8 h-8 text-brand-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-brand-text">Creative Games</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GameCard title="Minecraft" category="Sandbox" description="The ultimate creative canvas. Build anything you can imagine in Creative mode without worrying about monsters." />
              <GameCard title="Roblox Studio" category="Game Creation" description="Learn the basics of game design and programming by creating your own Roblox experiences." />
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <Puzzle className="w-8 h-8 text-brand-purple" />
              <h2 className="text-2xl md:text-3xl font-bold text-brand-text">Puzzle Games</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GameCard title="Portal 2" category="Logic/Physics" description="A brilliant, funny game that teaches physics and logic through mind-bending portal puzzles." />
              <GameCard title="Captain Toad" category="Spatial Puzzle" description="Rotate the camera to help Captain Toad navigate tiny, diorama-like levels." />
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <Flag className="w-8 h-8 text-brand-secondary" />
              <h2 className="text-2xl md:text-3xl font-bold text-brand-text">Racing Games</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GameCard title="Mario Kart 8 Deluxe" category="Kart Racing" description="The most accessible racing game ever, featuring 'smart steering' for absolute beginners." />
              <GameCard title="Rocket League" category="Sports/Racing" description="Car soccer! It's easy to understand but takes a long time to master. Great for quick 5-minute matches." />
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <Users className="w-8 h-8 text-brand-cta" />
              <h2 className="text-2xl md:text-3xl font-bold text-brand-text">Family Games</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GameCard title="Overcooked! All You Can Eat" category="Co-op" description="Hilarious chaotic cooking game that requires real teamwork and communication." />
              <GameCard title="Super Mario 3D World" category="Platformer" description="Up to 4 players can run through these colorful levels together. Perfect for siblings." />
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <Heart className="w-8 h-8 text-brand-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-brand-text">Beginner-Friendly Games</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GameCard title="Animal Crossing" category="Life Sim" description="Play at your own pace. There is no winning or losing, just building a happy island." />
              <GameCard title="Slime Rancher" category="Exploration" description="A colorful, low-stress game about exploring an alien planet and farming cute slimes." />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default BestGamesForKids;
