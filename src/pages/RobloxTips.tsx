import { Link } from 'react-router-dom';
import { Gamepad2, Coins, ShieldAlert, Users, ArrowLeft } from 'lucide-react';

const RobloxTips = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">

          <Link to="/game-tips" className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-text mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Game Tips
          </Link>

          <div className="glass-card p-8 md:p-12 mb-12 border-brand-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Gamepad2 className="w-48 h-48 text-brand-primary" />
            </div>
            <div className="relative z-10">
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-brand-primary/20 text-brand-primary border border-brand-primary/30 mb-4 inline-block">
                Roblox
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6">
                Roblox Tips for Beginners
              </h1>
              <p className="text-xl text-brand-muted max-w-2xl">
                Stay safe and have more fun across thousands of user-created games.
              </p>
            </div>
          </div>

          <div className="space-y-12">

            <section className="glass-card p-8 border-white/10">
              <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
                <Gamepad2 className="w-6 h-6 text-brand-primary" /> Obby Tips
              </h2>
              <ul className="space-y-4 text-brand-muted text-lg">
                <li className="flex gap-3"><span className="text-brand-primary font-bold">1.</span> Zoom your camera out slightly so you can see where you are landing.</li>
                <li className="flex gap-3"><span className="text-brand-primary font-bold">2.</span> Take your time! Rushing causes more mistakes than moving slowly and carefully.</li>
                <li className="flex gap-3"><span className="text-brand-primary font-bold">3.</span> Watch other players. If they fall on a trick block, you know which way not to go.</li>
              </ul>
            </section>

            <section className="glass-card p-8 border-white/10">
              <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
                <Coins className="w-6 h-6 text-brand-secondary" /> Avatar and Coins Safety
              </h2>
              <ul className="space-y-4 text-brand-muted text-lg">
                <li className="flex gap-3"><span className="text-brand-secondary font-bold">1.</span> Never trust websites or players offering "Free Robux". These are always scams to steal your account.</li>
                <li className="flex gap-3"><span className="text-brand-secondary font-bold">2.</span> Don't trade valuable items with people you don't know well, as trust trades are often scams.</li>
                <li className="flex gap-3"><span className="text-brand-secondary font-bold">3.</span> Set up a 2-Step Verification with a parent's email to keep your account totally secure.</li>
              </ul>
            </section>

            <section className="glass-card p-8 border-white/10">
              <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-brand-purple" /> Game Selection
              </h2>
              <ul className="space-y-4 text-brand-muted text-lg">
                <li className="flex gap-3"><span className="text-brand-purple font-bold">1.</span> Look at the thumbs up/down ratio before joining a game. High thumbs-up means it's usually well-made.</li>
                <li className="flex gap-3"><span className="text-brand-purple font-bold">2.</span> Check the "Age Guidelines" on a game page to see if it is suitable for you.</li>
                <li className="flex gap-3"><span className="text-brand-purple font-bold">3.</span> If a game promises impossible rewards (like admin commands for everyone), it's probably a fake clickbait game.</li>
              </ul>
            </section>

            <section className="glass-card p-8 border-brand-cta/30 bg-brand-cta/5">
              <h2 className="text-xl font-bold text-brand-cta mb-4 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5" /> Chat Safety
              </h2>
              <p className="text-brand-muted leading-relaxed">
                Roblox has strong chat filters, but people sometimes try to bypass them. Never give out your real name, age, or location in Roblox chat. If someone makes you uncomfortable, use the in-game menu to block and report them immediately.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RobloxTips;
