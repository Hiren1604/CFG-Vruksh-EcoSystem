
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToChallenge = () => {
    const element = document.getElementById('challenge');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-deep-teal relative flex items-center justify-center">
      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="font-playfair font-bold text-7xl md:text-9xl text-off-white mb-8">
            ekatra
          </h1>
          <p className="text-2xl md:text-3xl text-off-white/90 mb-16 max-w-4xl mx-auto leading-relaxed">
            An Integrated Education Platform for Under-Served Learners
          </p>
          <Button
            onClick={scrollToChallenge}
            className="bg-bright-turquoise hover:bg-bright-turquoise/90 text-deep-teal font-semibold px-12 py-6 text-xl rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
