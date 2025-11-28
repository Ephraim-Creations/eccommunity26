import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { NAV_ITEMS, SOCIALS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 font-display text-3xl mb-4">
              <img 
                src="https://www.ephraimworks.online/images/favicon.png" 
                alt="EC Logo" 
                className="h-8 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="tracking-wide">EC Community</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the next generation of creators and developers through collaboration and shared knowledge.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-brand-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/guidelines" className="text-gray-400 hover:text-brand-400 transition-colors">
                  Join Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-200">Connect</h3>
            <ul className="space-y-2">
              {SOCIALS.map(social => (
                <li key={social.platform}>
                  <a href={social.url} className="flex items-center gap-2 text-gray-400 hover:text-brand-400 transition-colors">
                    <social.icon size={18} />
                    <span>{social.platform}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mini Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-200">Stay Updated</h3>
            <form className="flex flex-col gap-3" action="https://formsubmit.co/eccommunity254@gmail.com" method="POST">
              <input type="hidden" name="_subject" value="New Newsletter Subscription (Footer)" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email" 
                  className="w-full bg-gray-800 dark:bg-gray-900 text-white pl-10 pr-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm border border-gray-700 dark:border-gray-800"
                  required
                />
              </div>
              <button className="bg-brand-600 hover:bg-brand-700 text-white py-2.5 rounded-lg font-medium text-sm transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ephraim Creations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};