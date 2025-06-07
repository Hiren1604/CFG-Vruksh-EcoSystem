
import React, { useEffect, useRef, useState } from 'react';
import { Signal, Heart, Book } from 'lucide-react';

const challenges = [
  {
    icon: Signal,
    title: 'Limited Connectivity',
    description: 'Unreliable internet access in remote areas creates barriers to digital learning.',
  },
  {
    icon: Heart,
    title: 'Resource Constraints',
    description: 'Educational institutions lack resources for effective digital education.',
  },
  {
    icon: Book,
    title: 'Learning Gaps',
    description: 'Traditional methods fail to address diverse learning needs of communities.',
  },
];

const ChallengeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="challenge" ref={sectionRef} className="py-24 bg-warm-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-playfair font-bold text-5xl md:text-6xl text-charcoal mb-8">
            The Challenge We Address
          </h2>
          <p className="text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed">
            Education barriers prevent millions from accessing quality learning opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div
                key={challenge.title}
                className={`bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-bright-turquoise/15 rounded-2xl w-20 h-20 flex items-center justify-center mb-8">
                  <Icon size={36} className="text-deep-teal" />
                </div>
                <h3 className="font-playfair font-semibold text-2xl text-charcoal mb-6">
                  {challenge.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed text-lg">
                  {challenge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
