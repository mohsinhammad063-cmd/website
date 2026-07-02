import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, ShieldAlert } from 'lucide-react';

const mockArticles: Record<string, any> = {
  "top-10-minecraft-tips-for-beginners": {
    title: "Top 10 Minecraft Tips for Beginners",
    category: "Minecraft",
    difficulty: "Beginner",
    ageBadge: "8-15",
    readTime: "5 min",
    content: "Surviving your first night in Minecraft can be tough. But with a little preparation, you can build a safe shelter, find food, and craft your first tools easily. Here are the top 10 tips every new player needs to know.",
    quickTips: ["Don't build your first house with dirt.", "Craft a bed as soon as possible.", "Always carry a water bucket."]
  },
  "how-to-get-better-at-roblox-obby-games": {
    title: "How to Get Better at Roblox Obby Games",
    category: "Roblox",
    difficulty: "Medium",
    ageBadge: "8-15",
    readTime: "4 min",
    content: "Roblox Obby games require precise jumping and perfect timing. Many players get frustrated, but improving is just about learning a few simple techniques.",
    quickTips: ["Zoom your camera out.", "Take your time on tricky jumps.", "Watch other players first."]
  },
  "how-to-stay-safe-while-playing-online-games": {
    title: "How to Stay Safe While Playing Online Games",
    category: "Safety",
    difficulty: "Beginner",
    ageBadge: "8-15",
    readTime: "5 min",
    content: "Playing games with friends online is awesome, but it's important to know the rules of online safety. Never share your password or personal details.",
    quickTips: ["Use a nickname, not your real name.", "Mute mean players.", "Ask a parent before buying anything."]
  },
  "how-to-improve-your-aim": {
    title: "How to Improve Your Aim",
    category: "Guides",
    difficulty: "Medium",
    ageBadge: "8-15",
    readTime: "6 min",
    content: "Struggling to hit your targets? Aiming is a skill that takes practice, but you can speed up the process by changing some settings and practicing smart.",
    quickTips: ["Lower your sensitivity.", "Practice in creative modes.", "Keep your crosshair at head height."]
  },
  "how-to-complete-difficult-levels": {
    title: "How to Complete Difficult Levels",
    category: "Guides",
    difficulty: "Easy",
    ageBadge: "8-15",
    readTime: "4 min",
    content: "We've all been there—stuck on a boss or a puzzle that seems impossible. Don't throw your controller! Here is the best way to beat hard levels.",
    quickTips: ["Take a 5-minute break.", "Watch a video guide.", "Try a different strategy."]
  }
};

const ArticleDetail = () => {
  const { id } = useParams();
  const article = id ? mockArticles[id] : null;

  if (!article) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold text-brand-text mb-4">Article Not Found</h1>
        <Link to="/" className="btn-primary">Go Home</Link>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">

          <Link to={-1 as any} className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-text mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>

          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 text-sm font-bold rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                {article.category}
              </span>
              <span className="px-3 py-1 text-sm font-bold rounded-full bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/20">
                {article.difficulty}
              </span>
              <span className="px-3 py-1 text-sm font-bold rounded-full bg-brand-purple/10 text-brand-purple border border-brand-purple/20">
                {article.ageBadge}
              </span>
              <span className="flex items-center gap-1 text-sm text-brand-muted ml-auto">
                <Clock className="w-4 h-4" /> {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6 leading-tight">
              {article.title}
            </h1>
          </div>

          <div className="glass-card p-8 md:p-10 border-brand-primary/20 mb-10">
            <p className="text-lg text-brand-muted leading-relaxed mb-8">
              {article.content}
            </p>

            <h2 className="text-2xl font-bold text-brand-text mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-brand-primary" /> Quick Tips
            </h2>
            <ul className="space-y-3">
              {article.quickTips.map((tip: string, index: number) => (
                <li key={index} className="flex gap-3 text-brand-muted">
                  <span className="text-brand-primary font-bold">{index + 1}.</span> {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6 border-brand-secondary/30 bg-brand-secondary/5 flex items-start gap-4 mb-12">
            <ShieldAlert className="w-6 h-6 text-brand-secondary shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-brand-text mb-2">Safety Reminder</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Remember to take breaks every hour! Gaming is fun, but resting your eyes and stretching is just as important. Never share personal info online.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
