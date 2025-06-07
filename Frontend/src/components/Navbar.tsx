
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-deep-teal/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-playfair font-bold text-2xl text-off-white">
            ekatra
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'Features', id: 'features' },
                { name: 'About', id: 'impact' },
                { name: 'Contact', id: 'join' },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-off-white hover:text-bright-turquoise transition-colors duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 ml-8 border-l border-off-white/20 pl-8">
              <Button
                onClick={() => scrollToSection('auth')}
                variant="ghost"
                className="text-off-white hover:text-bright-turquoise hover:bg-bright-turquoise/10 border border-off-white/30 hover:border-bright-turquoise/50"
              >
                Login
              </Button>
              <Button
                onClick={() => scrollToSection('auth')}
                className="bg-bright-turquoise hover:bg-bright-turquoise/90 text-deep-teal font-semibold"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
