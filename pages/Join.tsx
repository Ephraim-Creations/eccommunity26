import React from 'react';
import { MessageCircle, Star } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { Button } from '../components/Button';
import { BENEFITS } from '../constants';

export const Join: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col justify-center transition-colors duration-300">
      
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden max-w-5xl mx-auto grid md:grid-cols-2">
            
            {/* Left: Content & Link */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Your Seat is Waiting.
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                Join hundreds of developers and creators in the EC Community WhatsApp group. It's the fastest way to get help, share your wins, and stay inspired.
              </p>
              
              <div className="space-y-4 mb-10">
                {BENEFITS.map((benefit) => (
                  <div key={benefit.title} className="flex items-center gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-1.5 rounded-full">
                      <Star size={16} className="text-green-600 dark:text-green-400 fill-current" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">{benefit.title}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => window.open('https://whatsapp.com', '_blank')} 
                variant="primary" 
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-green-200/50 dark:shadow-green-900/50 w-full justify-center gap-2 text-lg py-4"
              >
                <MessageCircle size={24} />
                Join via WhatsApp
              </Button>
              <p className="text-xs text-center text-gray-400 mt-4">By joining, you agree to our community guidelines.</p>
            </div>

            {/* Right: Visual/Testimonials */}
            <div className="bg-gray-900 p-10 md:p-16 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              
              <div className="relative z-10 space-y-8">
                <h3 className="text-2xl font-bold mb-6">What Members Say</h3>
                
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <p className="italic text-gray-300 mb-4">"The best place to find accountability partners. I shipped my first app thanks to the feedback I got here."</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center font-bold">JD</div>
                    <div>
                      <div className="font-bold text-sm">John D.</div>
                      <div className="text-xs text-gray-400">Frontend Dev</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <p className="italic text-gray-300 mb-4">"Finally, a community that isn't toxic. The Insights Room conversations are gold."</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">SM</div>
                    <div>
                      <div className="font-bold text-sm">Sarah M.</div>
                      <div className="text-xs text-gray-400">UX Designer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </div>
  );
};