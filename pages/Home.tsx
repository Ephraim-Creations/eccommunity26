import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';
import { FadeIn } from '../components/FadeIn';
import { COMMUNITY_GROUPS, BENEFITS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Community Background" 
            className="w-full h-full object-cover"
          />
          {/* Enhanced overlay for dark mode readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-brand-900/60 dark:from-black dark:via-black/90 dark:to-brand-950/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="text-white space-y-6">
            <FadeIn direction="right">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 font-medium text-sm mb-2 backdrop-blur-sm">
                Welcome to Ephraim Creations
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                Build. Learn. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300">Connect.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
                EC Community is the digital heartbeat for creators and developers. Join a network where ideas turn into reality and passion meets purpose.
              </p>
              <div className="pt-4">
                <Button to="/guidelines" variant="primary" className="text-lg px-8 py-4">
                  Join the Community
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right: Newsletter/Signup Form */}
          <FadeIn direction="left" delay={200}>
            <div className="bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-2xl max-w-md mx-auto md:mr-0">
              <h3 className="text-2xl font-bold text-white mb-2">Get Early Access</h3>
              <p className="text-gray-300 mb-6 text-sm">Join our newsletter to get updates on new groups and events.</p>
              <form className="space-y-4" action="https://formsubmit.co/eccommunity254@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="New Early Access Request (Hero)" />
                <input type="hidden" name="_captcha" value="false" />
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-1">Name</label>
                  <input type="text" name="name" className="w-full bg-black/20 dark:bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-1">Email</label>
                  <input type="email" name="email" className="w-full bg-black/20 dark:bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" placeholder="john@example.com" required />
                </div>
                <Button type="submit" fullWidth variant="primary" className="mt-2">
                  Subscribe
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SNAPSHOT --- */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src="https://picsum.photos/800/600?random=1" 
                  alt="Community collaboration" 
                  className="rounded-3xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">More Than Just a Chat Group</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  We are a collective of forward-thinkers. Whether you write code, design interfaces, or strategize business moves, EC Community provides the platform you need to elevate your craft.
                </p>
                <ul className="space-y-3">
                  {['Collaborative Projects', 'Weekly Challenges', 'Expert Mentorship'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-200 font-medium">
                      <div className="bg-brand-100 dark:bg-brand-900/30 p-1 rounded-full">
                        <CheckCircle2 size={16} className="text-brand-600 dark:text-brand-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <Button to="/about" variant="secondary" className="dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                    Learn More About Us
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- COMMUNITY GROUPS --- */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Find Your Niche</h2>
            <p className="text-gray-600 dark:text-gray-400">Dive into specialized zones designed to foster focused discussions and growth.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {COMMUNITY_GROUPS.map((group, idx) => (
              <FadeIn key={group.title} delay={idx * 150} direction="up">
                <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
                  <div className="w-16 h-16 bg-brand-50 dark:bg-brand-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-600 dark:group-hover:bg-brand-600 transition-colors duration-300">
                    <group.icon size={32} className="text-brand-600 dark:text-brand-400 group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{group.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {group.description}
                  </p>
                  <Button to={`/about#${group.id}`} variant="outline" className="dark:border-gray-600 dark:text-gray-300 group-hover:bg-brand-600 dark:group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600 dark:group-hover:border-brand-600">
                    Explore Space <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY JOIN --- */}
      <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Join EC Community?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <FadeIn key={benefit.title} delay={idx * 100} direction="up">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 shadow-inner dark:shadow-none">
                    <benefit.icon size={32} className="text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER CTA STRIP --- */}
      <section className="bg-brand-600 dark:bg-brand-700 py-16 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-brand-700/30 dark:bg-black/20 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="text-white md:w-1/2">
                <h2 className="text-3xl font-bold mb-2">Stay in the Loop</h2>
                <p className="text-brand-100">Get the latest tech news and community updates delivered to your inbox.</p>
              </div>
              <div className="w-full md:w-auto flex-1 max-w-md">
                <form className="flex flex-col sm:flex-row gap-3" action="https://formsubmit.co/eccommunity254@gmail.com" method="POST">
                  <input type="hidden" name="_subject" value="New Newsletter Subscription (Footer Strip)" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email" 
                    className="flex-1 px-5 py-3 rounded-full focus:outline-none text-gray-900 dark:bg-gray-900 dark:text-white dark:border dark:border-gray-700"
                    required
                  />
                  <button type="submit" className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-black transition-colors shadow-lg">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};