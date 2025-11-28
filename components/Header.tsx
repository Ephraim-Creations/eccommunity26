import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Theme state: default to system or saved, currently defaulting to 'dark' for store continuity preference, or 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Theme Change
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const headerClass = `fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled || !isHome || isOpen
      ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-md py-3' 
      : 'bg-transparent py-5'
  }`;

  const getTextColor = (defaultColor: string, scrolledColor: string) => {
    if (scrolled || !isHome || isOpen) return scrolledColor;
    return defaultColor;
  };

  const navLinkClass = (path: string) => `font-medium transition-colors ${
    scrolled || !isHome || isOpen
      ? location.pathname === path 
        ? 'text-brand-600 dark:text-brand-400' 
        : 'text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400'
      : 'text-white/90 hover:text-white'
  }`;

  const logoTextClass = `font-display text-3xl flex items-center gap-3 transition-colors ${
    scrolled || !isHome || isOpen ? 'text-gray-900 dark:text-white' : 'text-white'
  }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Left Section: Logo + Theme Toggle */}
        <div className="flex items-center gap-6">
          <Link to="/" className={logoTextClass}>
            <img 
              src="https://www.ephraimworks.online/images/favicon.png" 
              alt="EC Logo" 
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('fallback-logo');
              }}
            />
            <span className="tracking-wide">EC Community</span>
          </Link>

          {/* Theme Switcher */}
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              scrolled || !isHome || isOpen
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link key={item.path} to={item.path} className={navLinkClass(item.path)}>
              {item.label}
            </Link>
          ))}
          <Button 
            to="/join" 
            variant={scrolled || !isHome ? 'primary' : 'white'}
            className="ml-4"
          >
            Join Now
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-gray-900 dark:text-white" size={28} />
          ) : (
            <Menu className={scrolled || !isHome ? 'text-gray-900 dark:text-white' : 'text-white'} size={28} />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white dark:bg-gray-950 z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
          <div className="flex flex-col h-full justify-center items-center gap-8 p-6">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className="text-2xl font-bold text-gray-800 dark:text-white hover:text-brand-600 dark:hover:text-brand-400"
              >
                {item.label}
              </Link>
            ))}
             <Button to="/join" variant="primary" fullWidth className="max-w-xs mt-4">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};