
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import DistributionSection from '@/components/DistributionSection';
import SocialProofSection from '@/components/SocialProofSection';
import FeaturesSection from '@/components/FeaturesSection';
import FaqSection from '@/components/FaqSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DistributionSection />
      <SocialProofSection />
      <FeaturesSection />
      <FaqSection />
    </Layout>
  );
};

export default Index;
