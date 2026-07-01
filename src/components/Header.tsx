import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LogoBadge from './LogoBadge';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Game Tips', path: '/game-tips' },
  { name: 'Tricks & Guides', path: '/tricks-guides' },
  { name: 'Best Games', path: '/best-games' },
  { name: 'Beginner Guides', path: '/beginner-guides' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-card rounded-none border-t-0 border-l-0 border-r-0 border-b border-brand-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <LogoBadge />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-brand-primary/10 text-brand-primary'
                      : 'text-brand-muted hover:bg-brand-card hover:text-brand-text'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-brand-muted hover:text-brand-text hover:bg-brand-card rounded-lg transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full glass-card border-t-0 rounded-t-none border-brand-primary/20 py-4 shadow-xl shadow-brand-bg/80 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col container mx-auto px-4 gap-2">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-3 text-lg font-medium rounded-xl transition-colors duration-200 ${
                    isActive
                      ? 'bg-brand-primary/20 text-brand-primary border border-brand-primary/30'
                      : 'text-brand-muted hover:bg-brand-card hover:text-brand-text border border-transparent'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;