import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Button } from '../components/Button';
import { COMMUNITY_GROUPS, SOCIALS } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-white dark:bg-gray-950 transition-colors duration-300">
      
      {/* Header */}
      <section className="container mx-auto px-6 mb-20">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden h-64 md:h-80 mb-12">
            <img 
              src="https://picsum.photos/1920/600?grayscale" 
              alt="About Header" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Our Story</h1>
            </div>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          <FadeIn direction="up" delay={100}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Born from Passion</h2>
            <p>
              EC Community wasn't built in a boardroom. It started as a small idea within Ephraim Creations to bring together scattered talents into a unified force. We noticed a gap: many young creators had the skills but lacked the supportive environment to refine them.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={200}>
            <p>
              Our mission is simple yet ambitious: to democratize access to knowledge and collaboration. We believe that when developers, designers, and thinkers come together, the barriers to innovation crumble.
            </p>
            <p>
              Today, we are a thriving ecosystem where curiosity is currency and kindness is the rule. We value transparency, continuous learning, and open-source contribution.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Activities (What We Do) */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What We Do</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              We provide dedicated spaces for you to excel, whether you are coding your next masterpiece or seeking industry wisdom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {COMMUNITY_GROUPS.map((group, idx) => (
              <FadeIn key={group.title} delay={idx * 150} direction="up">
                <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div className="bg-brand-50 dark:bg-brand-900/20 p-6 rounded-2xl mb-6 text-brand-600 dark:text-brand-400">
                    <group.icon size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{group.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {group.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Value Delivery */}
      <section className="py-20 container mx-auto px-6">
        <div className="bg-brand-900 dark:bg-gray-800 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl transition-colors duration-300">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Unlock Your Potential</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="text-4xl font-bold text-brand-400 mb-2">100+</div>
                <div className="text-gray-300">Active Members</div>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="text-4xl font-bold text-brand-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Launched</div>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="text-4xl font-bold text-brand-400 mb-2">24/7</div>
                <div className="text-gray-300">Community Support</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              
              {/* Text Side */}
              <div className="md:w-1/2 order-1 text-center md:text-left">
                <span className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-wider text-sm mb-2 block">Founder & Vision</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Meet Ephraim Mutwiri</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                  Ephraim Mutwiri is the founder of EC Community and Ephraim Creations. He built this community to create a space where developers, creators, and digital learners can grow together, share insights, and access real opportunities. His mission is to empower members through knowledge, collaboration, and accessible learning resources.
                </p>
                <Button 
                  href="https://www.ephraimworks.online/" 
                  target="_blank"
                  variant="primary"
                >
                  View Portfolio
                </Button>
              </div>

              {/* Image Side */}
              <div className="md:w-1/2 order-2 flex justify-center md:justify-end w-full">
                <div className="relative w-[85%] md:w-full max-w-[450px]">
                  {/* Decorative backdrop blob */}
                  <div className="absolute -inset-4 bg-brand-100 dark:bg-brand-900/40 rounded-full blur-2xl opacity-50 z-0"></div>
                  <img 
                    src="https://www.ephraimworks.online/images/Ephraim.png" 
                    alt="Ephraim Mutwiri" 
                    className="relative z-10 rounded-3xl w-full object-cover bg-gray-50 dark:bg-gray-800"
                  />
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* Social Media */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Follow Our Journey</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {SOCIALS.map((social, idx) => (
            <FadeIn key={social.platform} delay={idx * 100} direction="up">
              <a 
                href={social.url}
                className="block bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6 rounded-2xl hover:shadow-lg hover:border-brand-200 dark:hover:border-brand-700 transition-all group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl group-hover:bg-brand-50 dark:group-hover:bg-brand-900 transition-colors">
                    <social.icon size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-brand-600 dark:group-hover:text-brand-400" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">{social.platform}</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{social.description}</p>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

    </div>
  );
};