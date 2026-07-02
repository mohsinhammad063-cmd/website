import { Link } from 'react-router-dom';
import { Crosshair, Search, Coins, Target, UserCheck, Gamepad2, AlertCircle } from 'lucide-react';
import { articles } from '../data/articles';

const iconMap: Record<string, any> = {
  "how-to-find-hidden-game-secrets": Search,
  "how-to-improve-your-aim": Crosshair,
  "how-to-save-coins-and-rewards": Coins,
  "how-to-complete-difficult-levels": Target,
  "how-to-choose-the-right-character": UserCheck,
  "how-to-practice-without-getting-angry": AlertCircle,
};

const colorMap = [
  "brand-purple",
  "brand-primary",
  "brand-cta",
  "brand-secondary",
  "brand-purple",
  "brand-primary"
];

const TricksGuides = () => {
  const guides = articles.filter(article => article.type === 'guide');
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
          {guides.map((guide, index) => {
            const Icon = iconMap[guide.slug] || Gamepad2;
            const color = colorMap[index % colorMap.length];
            return (
              <Link key={guide.id} to={`/guides/${guide.slug}`} className={`glass-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover-lift border-${color}/20 hover:border-${color}/50 group`}>
                <div className={`p-4 rounded-2xl bg-brand-bg shadow-inner border border-${color}/20 shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 text-${color}`} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`flex items-center justify-center w-6 h-6 rounded-full bg-${color}/20 text-${color} text-xs font-bold`}>
                      {index + 1}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-brand-text group-hover:text-brand-primary transition-colors">{guide.title}</h3>
                  </div>
                  <p className="text-brand-muted leading-relaxed text-lg pl-9 md:pl-0">
                    {guide.description}
                  </p>
                  <div className="mt-4 pl-9 md:pl-0 text-brand-secondary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Read Guide →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TricksGuides;