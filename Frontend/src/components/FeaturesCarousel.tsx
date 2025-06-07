
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Signal, Heart, Globe, User, Folder, Play } from 'lucide-react';

const features = [
  {
    icon: Signal,
    title: 'Offline Support',
    description: 'Works seamlessly in low-connectivity areas with offline-first architecture and smart caching for uninterrupted learning.',
  },
  {
    icon: Globe,
    title: 'Multilingual UI',
    description: 'Native support for multiple languages with right-to-left text and cultural adaptations for global accessibility.',
  },
  {
    icon: Heart,
    title: 'Advanced Analytics',
    description: 'Comprehensive learning analytics with progress tracking, engagement insights, and detailed performance metrics.',
  },
  {
    icon: Folder,
    title: 'Team Collaboration',
    description: 'Collaborative tools for educators with role-based access, content sharing, and real-time coordination.',
  },
  {
    icon: User,
    title: 'Data Privacy',
    description: 'Enterprise-grade security with GDPR compliance, local data storage options, and complete user control.',
  },
  {
    icon: Play,
    title: 'Quick Setup',
    description: 'Get started in minutes with intuitive onboarding, pre-built course templates, and guided setup process.',
  },
];

const FeaturesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const isCenter = diff === 0;
    const isLeft = diff === -1 || (diff === features.length - 1 && currentIndex === 0);
    const isRight = diff === 1 || (diff === -(features.length - 1) && currentIndex === features.length - 1);

    if (isCenter) {
      return 'opacity-100 scale-100 z-30 translate-x-0 blur-none';
    } else if (isLeft) {
      return 'opacity-40 scale-90 z-10 -translate-x-12 blur-sm';
    } else if (isRight) {
      return 'opacity-40 scale-90 z-10 translate-x-12 blur-sm';
    } else {
      return 'opacity-0 scale-75 z-0 blur-md';
    }
  };

  return (
    <section id="features" className="py-24 bg-warm-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-playfair font-bold text-5xl md:text-6xl text-charcoal mb-8">
            Powerful Features
          </h2>
          <p className="text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed">
            Everything you need to deliver effective education in challenging environments
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center relative h-[500px] overflow-hidden">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`absolute bg-white rounded-3xl p-10 shadow-2xl transition-all duration-700 ease-out w-[85%] md:w-[500px] h-[420px] flex flex-col justify-center ${getCardStyle(index)}`}
                >
                  <div className="bg-bright-turquoise/15 rounded-2xl w-20 h-20 flex items-center justify-center mb-8 mx-auto">
                    <Icon size={36} className="text-deep-teal" />
                  </div>
                  <h3 className="font-playfair font-semibold text-2xl text-charcoal mb-6 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed text-center text-lg">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center items-center mt-12 space-x-8">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white w-14 h-14 shadow-lg"
            >
              <ChevronLeft size={24} />
            </Button>
            <div className="flex space-x-3">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-deep-teal scale-125' : 'bg-deep-teal/30 hover:bg-deep-teal/50'
                  }`}
                />
              ))}
            </div>
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white w-14 h-14 shadow-lg"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
