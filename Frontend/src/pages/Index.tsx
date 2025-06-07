
import React from 'react';
import FloatingIcons from '@/components/FloatingIcons';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ChallengeSection from '@/components/ChallengeSection';
import OfferSection from '@/components/OfferSection';
import FeaturesCarousel from '@/components/FeaturesCarousel';
import ImpactSection from '@/components/ImpactSection';
import AuthSection from '@/components/AuthSection';
import JoinMissionSection from '@/components/JoinMissionSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <FloatingIcons />
      <Navbar />
      <HeroSection />
      <ChallengeSection />
      <OfferSection />
      <FeaturesCarousel />
      <ImpactSection />
      <AuthSection />
      <JoinMissionSection />
    </div>
  );
};

export default Index;
