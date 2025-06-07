
import React from 'react';
import { Button } from '@/components/ui/button';
import { User, Book, Play, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: User,
    title: 'Sign Up',
    description: 'Create your organization account',
  },
  {
    icon: Book,
    title: 'Upload Course',
    description: 'Add your educational content',
  },
  {
    icon: Play,
    title: 'Reach Students',
    description: 'Deliver courses via WhatsApp',
  },
];

const JoinMissionSection = () => {
  const scrollToAuth = () => {
    const element = document.getElementById('auth');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="join" className="py-24 bg-deep-teal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-playfair font-bold text-5xl md:text-6xl text-off-white mb-8">
            Join Our Mission
          </h2>
          <p className="text-xl text-off-white/90 max-w-4xl mx-auto mb-16 leading-relaxed">
            Empower communities through accessible, scalable learning.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto mb-16 space-y-12 md:space-y-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={step.title}>
                <div className="text-center flex-1">
                  <div className="bg-bright-turquoise/20 rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-8">
                    <Icon size={40} className="text-bright-turquoise" />
                  </div>
                  <h3 className="font-playfair font-semibold text-2xl text-off-white mb-6">
                    {step.title}
                  </h3>
                  <p className="text-off-white/70 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="flex items-center justify-center px-8 md:px-0">
                    <div className="hidden md:block transform rotate-12">
                      <svg
                        width="80"
                        height="40"
                        viewBox="0 0 80 40"
                        fill="none"
                        className="text-bright-turquoise/60"
                      >
                        <path
                          d="M5 35 Q40 5 75 35"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          fill="none"
                        />
                        <path
                          d="M70 30 L75 35 L70 40"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                    <div className="md:hidden">
                      <ArrowRight size={24} className="text-bright-turquoise/60 rotate-90" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToAuth}
            className="bg-bright-turquoise hover:bg-bright-turquoise/90 text-deep-teal font-semibold px-16 py-6 text-xl rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinMissionSection;
