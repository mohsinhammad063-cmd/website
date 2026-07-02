import { Link } from 'react-router-dom';
import { Crosshair, Search, Coins, Target, UserCheck, Heart, ArrowRight } from 'lucide-react';

const guides = [
  {
    icon: Search,
    title: "How to Find Hidden Game Secrets",
    description: "Games are full of hidden easter eggs and secret rooms. Here is how to find them.",
    steps: ["Look behind every waterfall.", "Check walls that look slightly different.", "Explore the edges of the map."],
    color: "brand-purple",
    difficulty: "Medium",
    slug: "how-to-find-hidden-game-secrets"
  },
  {
    icon: Crosshair,
    title: "How to Improve Your Aim",
    description: "Struggling to hit targets? Follow these simple steps to train your aim.",
    steps: ["Lower your game sensitivity.", "Practice tracking moving objects before shooting.", "Focus on crosshair placement at head height."],
    color: "brand-primary",
    difficulty: "Medium",
    slug: "how-to-improve-your-aim"
  },
  {
    icon: Coins,
    title: "How to Save Coins and Rewards",
    description: "Don't waste your hard-earned in-game money on silly items.",
    steps: ["Don't buy the first item you see.", "Save for items that give permanent upgrades.", "Do daily challenges to earn bonus coins."],
    color: "brand-cta",
    difficulty: "Beginner",
    slug: "how-to-save-coins-and-rewards"
  },
  {
    icon: Target,
    title: "How to Complete Difficult Levels",
    description: "Stuck on a hard boss or puzzle? Try this method.",
    steps: ["Watch the pattern before attacking.", "Try a different character or weapon.", "If you get angry, take a 5-minute break."],
    color: "brand-secondary",
    difficulty: "Easy",
    slug: "how-to-complete-difficult-levels"
  },
  {
    icon: UserCheck,
    title: "How to Choose the Right Character",
    description: "Every character plays differently. Find the one that matches you.",
    steps: ["If you like rushing in, choose high-health tanks.", "If you like staying safe, choose snipers or healers.", "Test every character in the practice mode."],
    color: "brand-purple",
    difficulty: "Beginner",
    slug: "how-to-choose-the-right-character"
  },
  {
    icon: Heart,
    title: "How to Practice Without Getting Angry",
    description: "Gaming should be fun! Here is how to keep a positive mindset.",
    steps: ["Remember it is just a game.", "Congratulate the other player if they win.", "Stop playing if you feel your heart beating fast from anger."],
    color: "brand-primary",
    difficulty: "Beginner",
    slug: "how-to-practice-without-getting-angry"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide, index) => (
            <div key={index} className={`glass-card flex flex-col h-full border-${guide.color}/20 hover:border-${guide.color}/50 group`}>
              <div className="p-6 md:p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl bg-brand-bg shadow-inner border border-${guide.color}/20`}>
                    <guide.icon className={`w-6 h-6 text-${guide.color}`} />
                  </div>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full border border-${guide.color}/30 bg-${guide.color}/10 text-${guide.color}`}>
                    {guide.difficulty}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-brand-text mb-3">{guide.title}</h3>
                <p className="text-brand-muted leading-relaxed mb-6">
                  {guide.description}
                </p>

                <div className="space-y-3">
                  {guide.steps.map((step, stepIdx) => (
                    <div key={stepIdx} className="flex gap-3 items-start">
                      <span className={`flex items-center justify-center w-5 h-5 rounded-full bg-${guide.color}/20 text-${guide.color} text-[10px] font-bold shrink-0 mt-0.5`}>
                        {stepIdx + 1}
                      </span>
                      <p className="text-sm text-brand-muted/90">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`border-t border-${guide.color}/10 p-4 bg-${guide.color}/5 group-hover:bg-${guide.color}/10 transition-colors`}>
                <Link to={`/guides/${guide.slug}`} className={`text-${guide.color} font-medium text-sm flex items-center justify-center w-full gap-2`}>
                  Read Full Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TricksGuides;