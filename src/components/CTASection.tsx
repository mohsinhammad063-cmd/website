import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative glass-card bg-gradient-to-br from-brand-card to-brand-bg border-brand-cta/30 p-10 md:p-16 text-center overflow-hidden">

          {/* Background effect */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-cta/40 via-brand-bg/0 to-brand-bg/0"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
            <div className="p-4 bg-brand-cta/20 rounded-full mb-6 inline-block">
              <Rocket className="w-10 h-10 text-brand-cta animate-bounce" />
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6">
              Ready to become a <span className="text-brand-cta">smarter gamer?</span>
            </h2>

            <p className="text-lg text-brand-muted mb-10 max-w-xl">
              Join thousands of other young players who are learning new tricks and leveling up their skills every day with Master Hammad.
            </p>

            <Link to="/game-tips" className="btn-cta text-lg shadow-[0_0_20px_rgba(250,204,21,0.3)]">
              Read the latest tips
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;