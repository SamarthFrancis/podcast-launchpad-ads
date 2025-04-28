
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import DistributionSection from '@/components/DistributionSection';
import SocialProofSection from '@/components/SocialProofSection';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import FeaturesSection from '@/components/FeaturesSection';
import FaqSection from '@/components/FaqSection';
import CreatorReviewSection from '@/components/CreatorReviewSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DistributionSection />
      <SocialProofSection />
      <ReviewsSection />
      <CreatorReviewSection />
      <FeaturesSection />
      <FaqSection />
    </Layout>
  );
};

export default Index;
