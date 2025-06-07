
import React, { useEffect, useRef, useState } from 'react';
import { Smartphone, User, Globe, Folder } from 'lucide-react';

const benefits = [
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Optimized for basic smartphones',
  },
  {
    icon: User,
    title: 'No Tech Expertise',
    description: 'Simple for anyone to use',
  },
  {
    icon: Globe,
    title: 'Works on Basic Phones',
    description: 'Compatible with all devices',
  },
  {
    icon: Folder,
    title: 'Scalable Backend',
    description: 'Handles thousands of users',
  },
];

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ students: 0, partners: 0, engagement: 0 });
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

  useEffect(() => {
    if (isVisible) {
      const animateCounter = (target: number, key: 'students' | 'partners' | 'engagement') => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 30);
      };

      animateCounter(10000, 'students');
      animateCounter(50, 'partners');
      animateCounter(95, 'engagement');
    }
  }, [isVisible]);

  return (
    <section id="impact" ref={sectionRef} className="py-24 bg-deep-teal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-playfair font-bold text-5xl md:text-6xl text-off-white mb-8">
            Built for Impact, Designed for Scale
          </h2>
          <p className="text-xl text-off-white/80 max-w-4xl mx-auto leading-relaxed">
            Empowering organizations worldwide to deliver education that reaches the unreachable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="glass-card rounded-3xl p-10 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl font-bold text-bright-turquoise mb-4">
              {counts.students.toLocaleString()}+
            </div>
            <div className="text-off-white/90 text-lg">Students Reached</div>
          </div>

          <div className="glass-card rounded-3xl p-10 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl font-bold text-bright-turquoise mb-4">
              {counts.partners}+
            </div>
            <div className="text-off-white/90 text-lg">NGO Partners</div>
          </div>

          <div className="glass-card rounded-3xl p-10 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl font-bold text-bright-turquoise mb-4">
              {counts.engagement}%
            </div>
            <div className="text-off-white/90 text-lg">Engagement Rate</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`glass-card rounded-2xl p-8 text-center transition-all duration-500 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-bright-turquoise/20 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Icon size={28} className="text-bright-turquoise" />
                </div>
                <div className="font-semibold text-off-white mb-3">{benefit.title}</div>
                <div className="text-off-white/70 text-sm">{benefit.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
