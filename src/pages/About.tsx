import { CheckCircle2, Gamepad2 } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="py-12 md:py-20 relative overflow-hidden">
      <SEO title="About Us | Tips & Tricks by Master Hammad" description="Learn about Master Hammad and our mission to provide safe, helpful gaming tips for kids and teens." />
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-primary/10 rounded-full mix-blend-screen filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-brand-secondary/10 rounded-full mix-blend-screen filter blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-brand-card rounded-3xl mx-auto mb-6 flex items-center justify-center border border-brand-primary/30 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
              <Gamepad2 className="w-12 h-12 text-brand-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4">
              About Master Hammad
            </h1>
          </div>

          <div className="glass-card p-8 md:p-12 mb-12 border-brand-primary/20">
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Our Mission</h2>
            <p className="text-lg text-brand-muted leading-relaxed mb-6">
              Master Hammad’s gaming website is made for young players who enjoy learning tips, tricks, and simple guides. The goal is to help players improve their skills, understand games better, and play in a safe and balanced way.
            </p>
            <p className="text-lg text-brand-muted leading-relaxed">
              We believe gaming should be fun, educational, and safe. That's why we focus on beginner-friendly content, positive strategies, and important online safety habits for kids and young teens aged 8–15.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 border-brand-secondary/20">
              <h3 className="text-xl font-bold text-brand-text mb-6">What this website shares:</h3>
              <ul className="space-y-4">
                {[
                  "Gaming tips",
                  "Tricks and shortcuts",
                  "Beginner guides",
                  "Safe gaming advice",
                  "Best game recommendations",
                  "Fun learning content"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-muted">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-8 border-brand-purple/20 bg-brand-purple/5">
              <h3 className="text-xl font-bold text-brand-purple mb-4">For Parents</h3>
              <p className="text-brand-muted leading-relaxed mb-4">
                This platform is designed with child safety as the top priority. We do not host public chat rooms, we do not ask for personal information, and our content is strictly moderated to ensure it is age-appropriate.
              </p>
              <p className="text-brand-muted leading-relaxed">
                If you have any questions or suggestions regarding the content on this site, please feel free to reach out via our contact page.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;