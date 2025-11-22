import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/95 to-gray-900/80 backdrop-blur-xl border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 hover:scale-105 transition-transform"
          >
            Magmar
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors duration-300 pb-2 border-b-2 ${
                  isActive(link.href)
                    ? 'text-red-400 border-red-400'
                    : 'text-red-200/70 border-b-2 border-transparent hover:text-red-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-105">
            Get Started
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 bg-red-500/10 border border-red-500/30 rounded-lg"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-red-400" />
            ) : (
              <Menu className="w-6 h-6 text-red-400" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-red-500/20 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-4 rounded-lg transition-colors duration-300 ${
                  isActive(link.href)
                    ? 'text-red-400 bg-red-500/10'
                    : 'text-red-200/70 hover:text-red-400 hover:bg-red-500/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full px-6 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
