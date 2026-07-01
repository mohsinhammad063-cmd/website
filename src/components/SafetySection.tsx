import { ShieldCheck, HeartHandshake, Eye, BookOpen } from 'lucide-react';

const safetyPoints = [
  {
    icon: Eye,
    title: "Kid-Friendly",
    description: "Gaming tips suitable for ages 8-15."
  },
  {
    icon: BookOpen,
    title: "Easy to Read",
    description: "Simple, beginner-friendly guides."
  },
  {
    icon: ShieldCheck,
    title: "Safe Gaming",
    description: "Advice on keeping your account safe."
  },
  {
    icon: HeartHandshake,
    title: "Parent Approved",
    description: "No toxic language or adult content."
  }
];

const SafetySection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        <div className="glass-card bg-brand-bg/60 border-brand-secondary/30 p-8 md:p-12 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/10 rounded-full mix-blend-screen filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>

          <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">

            <div className="lg:w-1/3 space-y-4">
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-brand-secondary/20 mb-2">
                <ShieldCheck className="w-8 h-8 text-brand-secondary" />
              </div>
              <h2 className="text-3xl font-bold text-brand-text">Play Safe, <span className="text-brand-secondary">Play Smart</span></h2>
              <p className="text-brand-muted leading-relaxed">
                Remember to take screen breaks, ask parents before downloading new games, and never share your real name or personal information online. Balancing study with games makes you a true gaming master!
              </p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {safetyPoints.map((point, index) => (
                <div key={index} className="flex gap-4 items-start p-4 rounded-xl hover:bg-brand-card/50 transition-colors border border-transparent hover:border-brand-secondary/10">
                  <div className="p-2 rounded-lg bg-brand-secondary/10 text-brand-secondary shrink-0">
                    <point.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-text mb-1">{point.title}</h3>
                    <p className="text-sm text-brand-muted">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SafetySection;