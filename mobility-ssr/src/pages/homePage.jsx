import React from 'react';
import Hero from '../components/hero';
import FleetSection from '../components/fleetsection';
import BenefitsAndWhy from '../components/whychooseus';
import { SafetySection } from '../components/safetySection';
import BenefitsSection from '../components/benefitSection';
import FaqSection from '../components/faqs';
import MapAndFormSection from '../components/MapadnFormSection';

const Home = () => {
  return (
    <>
      <Hero />
      <FleetSection />
      <BenefitsAndWhy/>
      <SafetySection />
      {/* <FaqSection/> */}
      <MapAndFormSection/>
    </>
  );
};

export default Home;
