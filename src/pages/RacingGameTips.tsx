import { Link } from 'react-router-dom';
import { Gamepad2, Wrench, Focus, Zap, ArrowLeft } from 'lucide-react';

const RacingGameTips = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">

          <Link to="/game-tips" className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-text mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Game Tips
          </Link>

          <div className="glass-card p-8 md:p-12 mb-12 border-brand-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Zap className="w-48 h-48 text-brand-primary" />
            </div>
            <div className="relative z-10">
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-brand-primary/20 text-brand-primary border border-brand-primary/30 mb-4 inline-block">
                Racing Games
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6">
                Racing Game Tips for Kids
              </h1>
              <p className="text-xl text-brand-muted max-w-2xl">
                Learn how to drift, take corners, and cross the finish line first.
              </p>
            </div>
          </div>

          <div className="space-y-12">

            <section className="glass-card p-8 border-white/10">
              <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
                <Gamepad2 className="w-6 h-6 text-brand-primary" /> Control Tips
              </h2>
              <ul className="space-y-4 text-brand-muted text-lg">
                <li className="flex gap-3"><span className="text-brand-primary font-bold">1.</span> Don't just hold down the gas! Sometimes you need to let go of the accelerator or tap the brakes to stay in control.</li>
                <li className="flex gap-3"><span className="text-brand-primary font-bold">2.</span> Keep your steering smooth. Jerking the thumbstick back and forth makes your car lose speed.</li>
                <li className="flex gap-3"><span className="text-brand-primary font-bold">3.</span> Look at the track ahead, not at the bumper of your car. This helps you prepare for turns earlier.</li>
              </ul>
            </section>

            <section className="glass-card p-8 border-white/10">
              <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-brand-secondary" /> Cornering Tips
              </h2>
              <ul className="space-y-4 text-brand-muted text-lg">
                <li className="flex gap-3"><span className="text-brand-secondary font-bold">1.</span> Remember the racing rule: "Out, In, Out." Start wide, cut close to the inside of the turn, and exit wide.</li>
                <li className="flex gap-3"><span className="text-brand-secondary font-bold">2.</span> If the game has a drift button (like Mario Kart), practice drifting on every corner to earn speed boosts.</li>
                <li className="flex gap-3"><span className="text-brand-secondary font-bold">3.</span> Brake before the corner, not during it. Slow down in a straight line, then turn, then accelerate out.</li>
              </ul>
            </section>

            <section className="glass-card p-8 border-white/10">
              <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-brand-cta" /> Track Practice
              </h2>
              <ul className="space-y-4 text-brand-muted text-lg">
                <li className="flex gap-3"><span className="text-brand-cta font-bold">1.</span> Play in Time Trial mode to learn the track without pressure from other drivers.</li>
                <li className="flex gap-3"><span className="text-brand-cta font-bold">2.</span> Memorize where the sharp corners and jumps are.</li>
                <li className="flex gap-3"><span className="text-brand-cta font-bold">3.</span> Look for shortcuts, but practice them before trying them in a real race.</li>
              </ul>
            </section>

            <section className="glass-card p-8 border-white/10">
              <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-brand-purple" /> Upgrade Tips
              </h2>
              <ul className="space-y-4 text-brand-muted text-lg">
                <li className="flex gap-3"><span className="text-brand-purple font-bold">1.</span> The fastest car isn't always the best. For beginners, choose a car with high "Handling" or "Acceleration" instead of "Top Speed."</li>
                <li className="flex gap-3"><span className="text-brand-purple font-bold">2.</span> Upgrade your tires and brakes first to help you stay on the track.</li>
              </ul>
            </section>

            <section className="glass-card p-8 border-brand-cta/30 bg-brand-cta/5">
              <h2 className="text-xl font-bold text-brand-cta mb-4 flex items-center gap-2">
                <Focus className="w-5 h-5" /> Staying Calm
              </h2>
              <p className="text-brand-muted leading-relaxed">
                Racing games can be very frustrating, especially if you get hit by an item right at the finish line! Remember to take deep breaths. If you feel yourself getting angry, pause the game or take a break for 10 minutes.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RacingGameTips;
