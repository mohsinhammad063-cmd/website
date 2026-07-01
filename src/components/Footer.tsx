import { Link } from 'react-router-dom';
import LogoBadge from './LogoBadge';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Game Tips', path: '/game-tips' },
  { name: 'Tricks & Guides', path: '/tricks-guides' },
  { name: 'Best Games', path: '/best-games' },
  { name: 'Beginner Guides', path: '/beginner-guides' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
];

const categories = [
  'Minecraft',
  'Roblox',
  'Racing Games',
  'Puzzle Games',
  'Action Games',
  'Family Games',
];

const Footer = () => {
  return (
    <footer className="bg-brand-card mt-20 pt-16 pb-8 border-t border-brand-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <LogoBadge />
            <p className="text-brand-muted text-sm mt-2 max-w-xs">
              Smart gaming tips, tricks, and guides for young players. Level up your skills safely and have fun!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-brand-text mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-brand-muted hover:text-brand-primary text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold text-brand-text mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary"></span>
              Top Categories
            </h3>
            <ul className="flex flex-col gap-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    to="/game-tips" // A real app might filter by category here
                    className="text-brand-muted hover:text-brand-secondary text-sm transition-colors duration-200"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety Note */}
          <div className="glass-card p-5 border-brand-purple/30 bg-brand-bg/50">
            <h3 className="text-lg font-bold text-brand-purple mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></span>
              Safety First
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              This website is designed for kids and young teens. Always ask a parent or guardian before downloading new games or sharing any information online.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-muted text-sm text-center md:text-left">
            &copy; 2026 Tips & Tricks by Master Hammad. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="px-3 py-1 text-xs font-medium bg-brand-bg rounded-full text-brand-primary border border-brand-primary/20">Kid-Friendly</span>
            <span className="px-3 py-1 text-xs font-medium bg-brand-bg rounded-full text-brand-secondary border border-brand-secondary/20">Safe Gaming</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;