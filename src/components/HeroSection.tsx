import { Link } from 'react-router-dom';
import { Gamepad, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full pt-12 pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-brand-purple/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-brand-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

        {/* Pixel decorations */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-brand-cta rounded-sm animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-brand-primary rounded-sm animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-brand-purple rounded-sm animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mt-10">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-primary/30 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Sparkles className="w-4 h-4 text-brand-cta" />
            <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">Welcome Young Gamers</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            <span className="text-brand-text">Level Up With</span>
            <br />
            <span className="neon-text inline-block mt-2 pb-2">Master Hammad’s</span>
            <br />
            <span className="text-brand-text">Gaming Tips</span>
          </h1>

          <p className="text-lg md:text-xl text-brand-muted mb-10 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 leading-relaxed">
            Simple tips, smart tricks, and beginner-friendly guides for young gamers. Master your favorite games safely and have fun doing it!
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Link to="/game-tips" className="btn-primary flex items-center gap-2 text-lg w-full sm:w-auto justify-center">
              Explore Game Tips
            </Link>
            <Link to="/beginner-guides" className="btn-secondary flex items-center gap-2 text-lg w-full sm:w-auto justify-center">
              <Gamepad className="w-5 h-5" /> Start Beginner Guide
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;