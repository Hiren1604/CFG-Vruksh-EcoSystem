
import React from 'react';
import { Button } from '@/components/ui/button';

const AuthSection = () => {
  const scrollToTop = () => {
    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="auth" className="py-24 bg-warm-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-5xl md:text-6xl text-charcoal mb-8">
            Join the Platform
          </h2>
          <p className="text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed">
            Get started with Ekatra and transform education delivery in your community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Button 
            onClick={scrollToTop}
            className="h-20 bg-deep-teal hover:bg-deep-teal/90 text-white text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Login
          </Button>
          
          <Button 
            onClick={scrollToTop}
            className="h-20 bg-bright-turquoise hover:bg-bright-turquoise/90 text-deep-teal text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;
