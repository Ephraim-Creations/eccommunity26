import React from 'react';
import { AlertTriangle, Gavel } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { Button } from '../components/Button';
import { RULES } from '../constants';

export const Guidelines: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-white dark:bg-gray-950 transition-colors duration-300">
      
      {/* Intro */}
      <section className="container mx-auto px-6 mb-16 text-center max-w-2xl">
        <FadeIn>
          <span className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm">Community Standards</span>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">Keeping it Safe & Fun</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            To maintain a healthy environment where creativity flourishes, we ask all members to adhere to these core principles. Respect is the foundation of EC Community.
          </p>
        </FadeIn>
      </section>

      {/* Rules Grid */}
      <section className="container mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {RULES.map((rule, idx) => (
            <FadeIn key={rule.id} delay={idx * 100} direction="up">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold shrink-0">
                    <rule.icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{rule.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed pl-14">
                  {rule.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Discipline Section */}
      <section className="container mx-auto px-6 mb-20">
        <FadeIn direction="up">
          <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-orange-500" size={28} />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Enforcement & Discipline</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We believe in second chances, but protecting the community is our priority. Violations are handled on a case-by-case basis.
            </p>
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm"><Gavel size={18} className="text-gray-400 dark:text-gray-500"/></div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">1. Warning</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">First-time minor offenses will result in a DM warning from a moderator.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm"><Gavel size={18} className="text-gray-400 dark:text-gray-500"/></div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">2. Temporary Mute</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Repeated violations may lead to a 24-hour mute in all channels.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm"><Gavel size={18} className="text-gray-400 dark:text-gray-500"/></div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">3. Removal</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Serious offenses like hate speech or harassment result in immediate bans.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Final CTA */}
      <section className="text-center container mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Ready to uphold our values?</h2>
          <Button to="/join" variant="primary" className="shadow-xl shadow-brand-200 dark:shadow-brand-900/30">
            I Agree - Join Now
          </Button>
        </FadeIn>
      </section>

    </div>
  );
};