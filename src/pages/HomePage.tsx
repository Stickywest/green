import React from 'react';
import HeroSection from '../components/HeroSection';
import KeyHighlights from '../components/KeyHighlights';
import CallToAction from '../components/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <KeyHighlights />
      <CallToAction />
    </div>
  );
};

export default HomePage;
