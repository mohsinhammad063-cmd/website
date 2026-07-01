import { Shield, EyeOff, Lock } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-4">
              Privacy <span className="text-brand-secondary">Policy</span>
            </h1>
            <p className="text-brand-muted">
              Last updated: July 2026
            </p>
          </div>

          <div className="glass-card p-8 md:p-10 space-y-8 border-brand-secondary/20">

            <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-secondary/10 border border-brand-secondary/20">
              <Shield className="w-8 h-8 text-brand-secondary shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-brand-text mb-2">Child Safety First</h2>
                <p className="text-brand-muted leading-relaxed">
                  The website is for learning and entertainment. No personal information should be shared by children without parent permission. Parents/guardians can contact the website owner for any concerns.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-text flex items-center gap-2">
                <EyeOff className="w-6 h-6 text-brand-primary" />
                Information We Do NOT Collect
              </h3>
              <p className="text-brand-muted leading-relaxed">
                We believe in keeping kids safe online. Therefore, this website does not ask users to share:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-brand-muted">
                <li>Passwords or login details for games</li>
                <li>Game account usernames or gamer tags</li>
                <li>Phone numbers</li>
                <li>Home addresses or school names</li>
                <li>Private or sensitive personal information</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-text flex items-center gap-2">
                <Lock className="w-6 h-6 text-brand-purple" />
                Information We May Collect
              </h3>
              <p className="text-brand-muted leading-relaxed">
                If you use our contact form, we collect the name and email address provided (which we ask to be a parent or guardian's email). This information is only used to reply to your question or suggestion and is never shared with anyone else or used for marketing.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-text">External Links</h3>
              <p className="text-brand-muted leading-relaxed">
                Sometimes we might link to official game websites (like Minecraft.net or Roblox.com). Once you leave our website, you should read the privacy policy of the new website you are visiting, as we do not control those sites.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-brand-muted italic text-sm text-center">
                Parents: If you have any questions about this privacy policy or our practices, please reach out via our contact page.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;