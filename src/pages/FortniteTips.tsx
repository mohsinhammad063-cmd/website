import { Link } from 'react-router-dom';
import { Target, Users, ShieldAlert, ArrowLeft, Gamepad } from 'lucide-react';

const FortniteTips = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">

          <Link to="/game-tips" className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-text mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Game Tips
          </Link>

          <div className="glass-card p-8 md:p-12 mb-12 border-brand-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Target className="w-48 h-48 text-brand-primary" />
            </div>
            <div className="relative z-10">
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-brand-primary/20 text-brand-primary border border-brand-primary/30 mb-4 inline-block">
                Fortnite
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6">
                Fortnite Tips for Beginners
              </h1>
              <p className="text-xl text-brand-muted max-w-2xl">
                Get better at aiming, surviving, and playing with your team.
              </p>
            </div>
          </div>

          <div className="space-y-12">

            <section className="glass-card p-8 border-white/10">
              <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-brand-primary" /> Aiming Tips
              </h2>
              <ul className="space-y-4 text-brand-muted text-lg">
                <li className="flex gap-3"><span className="text-brand-primary font-bold">1.</span> Lower your sensitivity. A lower sensitivity makes it easier to track enemies smoothly without your crosshair jumping around.</li>
                <li className="flex gap-3"><span className="text-brand-primary font-bold">2.</span> Always try to keep your crosshair at "head level" when running around corners, so you are ready to shoot.</li>
                <li className="flex gap-3"><span className="text-brand-primary font-bold">3.</span> Don't hold down the fire button with assault rifles at long range. Tap the button instead to increase accuracy.</li>
              </ul>
            </section>

            <section className="glass-card p-8 border-white/10">
              <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
                <Gamepad className="w-6 h-6 text-brand-secondary" /> Practice & Movement
              </h2>
              <ul className="space-y-4 text-brand-muted text-lg">
                <li className="flex gap-3"><span className="text-brand-secondary font-bold">1.</span> Never run in a straight line in open areas. Jump and slide to make yourself a harder target for snipers.</li>
                <li className="flex gap-3"><span className="text-brand-secondary font-bold">2.</span> Use Creative mode to practice your aim and movement before jumping into a real Battle Royale match.</li>
                <li className="flex gap-3"><span className="text-brand-secondary font-bold">3.</span> If you are playing Build Mode, practice placing walls and ramps quickly to protect yourself as soon as you are shot.</li>
              </ul>
            </section>

            <section className="glass-card p-8 border-white/10">
              <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-brand-purple" /> Teamwork Tips
              </h2>
              <ul className="space-y-4 text-brand-muted text-lg">
                <li className="flex gap-3"><span className="text-brand-purple font-bold">1.</span> Stick with your team! A squad that stays together will always beat players who wander off alone.</li>
                <li className="flex gap-3"><span className="text-brand-purple font-bold">2.</span> Share loot. If you have full shields and your teammate has none, drop some shield potions for them.</li>
                <li className="flex gap-3"><span className="text-brand-purple font-bold">3.</span> Use the ping system to mark weapons, enemies, and places to go so your team knows what you are doing.</li>
              </ul>
            </section>

            <section className="glass-card p-8 border-brand-cta/30 bg-brand-cta/5">
              <h2 className="text-xl font-bold text-brand-cta mb-4 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5" /> Safety and Age Rating
              </h2>
              <p className="text-brand-muted leading-relaxed">
                Fortnite is rated 'Teen' (T for Teen) due to mild violence. If you are under 13, make sure your parents are okay with you playing. Always use the parental control settings to turn off public voice chat and only talk to people you know in real life.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FortniteTips;
