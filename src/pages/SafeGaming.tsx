import { Shield, Clock, UserX, UserCheck, Key, Lock, MessageSquareWarning } from 'lucide-react';

const sections = [
  {
    title: "Online Safety",
    icon: Shield,
    color: "brand-secondary",
    content: "When you play games online, you are playing with real people all over the world. It is important to remember that not everyone is who they say they are. Always use a fake username (gamer tag) and never share your real name, address, or school."
  },
  {
    title: "Screen Time Breaks",
    icon: Clock,
    color: "brand-primary",
    content: "Playing games is fun, but staring at a screen for too long can hurt your eyes and make you tired. Follow the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds. Take a 15-minute break every hour to stretch and drink water."
  },
  {
    title: "Chat and Stranger Safety",
    icon: UserX,
    color: "brand-purple",
    content: "If you wouldn't talk to a stranger on the street, you shouldn't talk to them in a private game chat. Never accept friend requests from people you don't know in real life. If someone asks for personal information, stop talking to them immediately."
  },
  {
    title: "Parent Permission",
    icon: UserCheck,
    color: "brand-cta",
    content: "Always ask a parent or guardian before you download a new game, buy an in-game item, or click on a link someone sends you. They can help make sure the game is safe and appropriate for your age."
  },
  {
    title: "Password and Account Safety",
    icon: Key,
    color: "brand-secondary",
    content: "Your password is like a key to your house. Never share it with anyone except your parents. Game developers and admins will NEVER ask for your password. If a website offers 'free coins' but asks for your password, it is a scam to steal your account."
  },
  {
    title: "Healthy Gaming Habits",
    icon: Lock,
    color: "brand-primary",
    content: "Balance is key. Make sure you finish your homework, get enough sleep, and spend time playing outside. Gaming should be a fun hobby, not the only thing you do."
  },
  {
    title: "What to Do If Someone Is Mean Online",
    icon: MessageSquareWarning,
    color: "brand-purple",
    content: "Cyberbullying is never okay. If someone is being mean, using bad language, or making you uncomfortable: 1. Do not reply. 2. Block and mute them in the game. 3. Tell a parent or trusted adult right away."
  }
];

const SafeGaming = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-secondary/10 border-2 border-brand-secondary/30 mb-6">
            <Shield className="w-10 h-10 text-brand-secondary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4">
            Safe Gaming <span className="text-brand-secondary">Tips for Kids</span>
          </h1>
          <p className="text-lg text-brand-muted">
            The internet can be a fun place to play, but it's important to play smart. Read these rules with a parent to make sure you stay safe online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <div key={index} className={`glass-card p-8 border-${section.color}/20 hover:border-${section.color}/50 hover-lift`}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-brand-bg shadow-inner border border-${section.color}/20`}>
                  <section.icon className={`w-6 h-6 text-${section.color}`} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-brand-text">{section.title}</h2>
              </div>
              <p className="text-brand-muted leading-relaxed text-lg">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SafeGaming;
