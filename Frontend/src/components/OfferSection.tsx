
import React from 'react';
import { Smartphone, Signal, Globe } from 'lucide-react';

const offers = [
  {
    icon: Smartphone,
    title: 'WhatsApp Learning',
    description: 'Deliver courses through WhatsApp, reaching learners where they already are with familiar technology.',
  },
  {
    icon: Signal,
    title: 'Smart Analytics',
    description: 'Track engagement and learning progress with real-time analytics and insights for continuous improvement.',
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    description: 'Support multiple languages to break down language barriers and make education accessible to diverse communities.',
  },
];

const OfferSection = () => {
  return (
    <section className="py-20 bg-deep-teal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-off-white mb-6">
            What We Offer
          </h2>
          <p className="text-lg text-off-white/80 max-w-3xl mx-auto">
            Innovative solutions designed for low-connectivity environments and under-served communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.title}
                className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="bg-bright-turquoise/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-bright-turquoise/30 transition-colors">
                  <Icon size={32} className="text-bright-turquoise" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-off-white mb-4">
                  {offer.title}
                </h3>
                <p className="text-off-white/70 leading-relaxed">
                  {offer.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
