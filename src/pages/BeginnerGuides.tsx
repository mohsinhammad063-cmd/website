import { Gamepad, Search, BookOpen, Target, Coffee, Shield } from 'lucide-react';

const steps = [
  {
    icon: Gamepad,
    title: "Step 1: Learn the controls",
    description: "Before jumping into the action, take 5 minutes in a safe area or tutorial level to test what every button does. Don't worry about winning yet.",
    color: "brand-primary"
  },
  {
    icon: Search,
    title: "Step 2: Practice one game at a time",
    description: "It's tempting to play 5 different games in one day, but you'll learn faster if you stick to one game for a few days to build muscle memory.",
    color: "brand-secondary"
  },
  {
    icon: BookOpen,
    title: "Step 3: Watch and read simple tips",
    description: "Look up a beginner guide (like the ones on this site!) to learn the basic rules and mechanics that the game might not explain clearly.",
    color: "brand-purple"
  },
  {
    icon: Target,
    title: "Step 4: Try easy challenges",
    description: "Set small goals for yourself. Instead of 'win the match', try 'survive for 2 minutes' or 'collect 10 coins'. Small wins build confidence.",
    color: "brand-cta"
  },
  {
    icon: Coffee,
    title: "Step 5: Take breaks",
    description: "If you feel frustrated or angry, stop playing. Your brain actually learns and processes game mechanics while you rest away from the screen.",
    color: "brand-primary"
  },
  {
    icon: Shield,
    title: "Step 6: Play safely",
    description: "Never share your real name, age, or address with other players. If someone is mean, use the block or mute button immediately.",
    color: "brand-secondary"
  }
];

const BeginnerGuides = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4">
            Beginner <span className="text-brand-secondary">Guides</span>
          </h1>
          <p className="text-lg text-brand-muted">
            New to gaming? Follow this friendly learning path to build good habits, improve quickly, and have the most fun.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Connecting line */}
          <div className="absolute left-[39px] md:left-1/2 top-10 bottom-10 w-1 bg-brand-card -translate-x-1/2 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>

                  {/* Content */}
                  <div className={`md:w-1/2 glass-card p-6 border-${step.color}/20 hover:border-${step.color}/50 hover-lift ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className={`text-xl font-bold text-brand-text mb-2 flex items-center gap-2 ${isEven ? '' : 'md:justify-end'}`}>
                      {step.title}
                    </h3>
                    <p className="text-brand-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Icon / Timeline node */}
                  <div className="relative z-10 hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-brand-bg border-4 border-brand-card shadow-[0_0_15px_rgba(0,0,0,0.5)] shrink-0">
                    <step.icon className={`w-8 h-8 text-${step.color}`} />
                  </div>

                  {/* Empty spacer for alignment */}
                  <div className="md:w-1/2 hidden md:block"></div>

                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 text-center">
           <p className="text-xl font-bold text-brand-text mb-6">Ready to apply these steps?</p>
           <button className="btn-secondary text-lg">Pick a Game to Start</button>
        </div>

      </div>
    </div>
  );
};

export default BeginnerGuides;