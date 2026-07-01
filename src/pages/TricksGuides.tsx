import { Crosshair, Search, Coins, Target, UserCheck } from 'lucide-react';

const guides = [
  {
    icon: Search,
    title: "How to Find Hidden Game Secrets",
    description: "Look behind waterfalls, check suspicious walls, and explore every corner of the map. Developers love hiding special items!",
    color: "brand-purple"
  },
  {
    icon: Crosshair,
    title: "How to Improve Your Aim",
    description: "Lower your sensitivity slightly. It might feel slow at first, but it makes tracking moving targets much easier and more consistent.",
    color: "brand-primary"
  },
  {
    icon: Coins,
    title: "How to Save Coins and Rewards",
    description: "Don't spend in-game money on the first item you see. Save up for items that give you permanent upgrades or special abilities.",
    color: "brand-cta"
  },
  {
    icon: Target,
    title: "How to Complete Difficult Levels",
    description: "If you're stuck, take a 5-minute break. Sometimes your brain just needs a rest to see the solution clearly when you return.",
    color: "brand-secondary"
  },
  {
    icon: UserCheck,
    title: "How to Choose the Right Character",
    description: "Pick characters that match your playstyle. If you like to rush in, choose high-health characters. If you prefer to stay back, choose ranged characters.",
    color: "brand-purple"
  }
];

const TricksGuides = () => {
  return (
    <div className="py-12 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-brand-purple/10 rounded-full mix-blend-screen filter blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4">
            Tricks & <span className="text-brand-purple">Guides</span>
          </h1>
          <p className="text-lg text-brand-muted">
            Step-by-step guides to master advanced techniques, find secrets, and overcome the toughest challenges in your favorite games.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {guides.map((guide, index) => (
            <div key={index} className={`glass-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover-lift border-${guide.color}/20 hover:border-${guide.color}/50`}>
              <div className={`p-4 rounded-2xl bg-brand-bg shadow-inner border border-${guide.color}/20 shrink-0`}>
                <guide.icon className={`w-8 h-8 text-${guide.color}`} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`flex items-center justify-center w-6 h-6 rounded-full bg-${guide.color}/20 text-${guide.color} text-xs font-bold`}>
                    {index + 1}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-text">{guide.title}</h3>
                </div>
                <p className="text-brand-muted leading-relaxed text-lg pl-9 md:pl-0">
                  {guide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TricksGuides;