import { Link } from 'react-router-dom';
import { Pickaxe, Shield, Hammer, Diamond, ArrowLeft } from 'lucide-react';

const MinecraftTips = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">

          <Link to="/game-tips" className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-text mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Game Tips
          </Link>

          <div className="glass-card p-8 md:p-12 mb-12 border-brand-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Pickaxe className="w-48 h-48 text-brand-primary" />
            </div>
            <div className="relative z-10">
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-brand-primary/20 text-brand-primary border border-brand-primary/30 mb-4 inline-block">
                Minecraft
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6">
                Minecraft Tips for Beginners
              </h1>
              <p className="text-xl text-brand-muted max-w-2xl">
                Master the blocky world with these simple survival and building tricks.
              </p>
            </div>
          </div>

          <div className="space-y-12">

            <section className="glass-card p-8 border-white/10">
              <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
                <Hammer className="w-6 h-6 text-brand-primary" /> Building Tips
              </h2>
              <ul className="space-y-4 text-brand-muted text-lg">
                <li className="flex gap-3"><span className="text-brand-primary font-bold">1.</span> Never build your first house out of dirt. Wood is just as easy to get and looks much better!</li>
                <li className="flex gap-3"><span className="text-brand-primary font-bold">2.</span> Add depth to your builds by bringing logs one block out from your walls.</li>
                <li className="flex gap-3"><span className="text-brand-primary font-bold">3.</span> Use glass panes instead of full glass blocks to save resources and make windows look nicer.</li>
              </ul>
            </section>

            <section className="glass-card p-8 border-white/10">
              <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-brand-secondary" /> Survival Tips
              </h2>
              <ul className="space-y-4 text-brand-muted text-lg">
                <li className="flex gap-3"><span className="text-brand-secondary font-bold">1.</span> On your first day, focus on three things: finding 3 wool for a bed, gathering wood, and getting coal.</li>
                <li className="flex gap-3"><span className="text-brand-secondary font-bold">2.</span> Always carry a water bucket. It can save you from fall damage or lava.</li>
                <li className="flex gap-3"><span className="text-brand-secondary font-bold">3.</span> Never dig straight down! You might fall into a cave or lava pool.</li>
              </ul>
            </section>

            <section className="glass-card p-8 border-white/10">
              <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
                <Diamond className="w-6 h-6 text-brand-purple" /> Mining Tips
              </h2>
              <ul className="space-y-4 text-brand-muted text-lg">
                <li className="flex gap-3"><span className="text-brand-purple font-bold">1.</span> The best level to find diamonds is usually around Y-level -58 in newer updates.</li>
                <li className="flex gap-3"><span className="text-brand-purple font-bold">2.</span> Always bring plenty of torches to stop mobs from spawning in your mineshaft.</li>
                <li className="flex gap-3"><span className="text-brand-purple font-bold">3.</span> Strip mine by digging a straight 2x1 tunnel, then digging smaller branches off the side.</li>
              </ul>
            </section>

            <section className="glass-card p-8 border-brand-cta/30 bg-brand-cta/5">
              <h2 className="text-xl font-bold text-brand-cta mb-4">Safety Reminder</h2>
              <p className="text-brand-muted leading-relaxed">
                If you are playing on public multiplayer servers, never share private information in the chat. Griefing (destroying other people's builds) is against the rules on most servers, so always play fair and respect others!
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MinecraftTips;
