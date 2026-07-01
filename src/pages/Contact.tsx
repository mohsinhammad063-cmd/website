import { ShieldAlert, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4">
              Get in <span className="text-brand-primary">Touch</span>
            </h1>
            <p className="text-lg text-brand-muted">
              Have a question about a guide? Want to suggest a new game? Let us know!
            </p>
          </div>

          <div className="glass-card p-6 border-brand-cta/30 bg-brand-cta/5 mb-8 flex items-start gap-4">
            <ShieldAlert className="w-8 h-8 text-brand-cta shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-brand-text mb-1">Parent-Friendly Note</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                For questions, suggestions, or collaboration, please contact us with parent or guardian permission. Because this website is for children and teens, we do not have an open public chat system to ensure everyone's safety.
              </p>
            </div>
          </div>

          <form className="glass-card p-8 border-brand-primary/20 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-2">First Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-brand-bg/50 border border-brand-primary/20 rounded-xl px-4 py-3 text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-transparent transition-all"
                placeholder="Ask a parent before sharing your real name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">Parent/Guardian Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-brand-bg/50 border border-brand-primary/20 rounded-xl px-4 py-3 text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-transparent transition-all"
                placeholder="parent@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-brand-bg/50 border border-brand-primary/20 rounded-xl px-4 py-3 text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-transparent transition-all resize-none"
                placeholder="What would you like to tell us?"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4">
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;