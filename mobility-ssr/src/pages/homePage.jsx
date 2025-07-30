import React from 'react';
import Hero from '../components/hero';
import FleetSection from '../components/fleetsection';
import { WhyChooseMobility } from '../components/whychooseus';
import { SafetySection } from '../components/safetySection';
import BenefitsSection from '../components/benefitSection';
import FaqSection from '../components/faqs';

const Home = () => {
  return (
    <>
      <Hero />
      <FleetSection />
      <BenefitsSection />
      <WhyChooseMobility />
      <SafetySection />
      <FaqSection/>
    </>
  );
};

export default Home;
