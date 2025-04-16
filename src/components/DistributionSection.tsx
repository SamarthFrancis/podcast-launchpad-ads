
import React from 'react';

const DistributionSection: React.FC = () => {
  // Platforms logos would typically be imported images
  const platforms = [
    "Spotify", "Apple Podcasts", "YouTube", "Google Podcasts", 
    "Amazon Music", "Stitcher", "Overcast", "Pocket Casts"
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="font-jakarta font-bold text-3xl md:text-4xl mb-4 text-dark">
          Your Podcast. Everywhere It Matters.
        </h2>
        <p className="font-manrope text-lg text-gray mb-12 max-w-2xl mx-auto">
          We distribute your podcast to 20+ platforms, including Spotify, Apple Podcasts, YouTube, and more.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {platforms.map((platform, index) => (
            <div 
              key={index} 
              className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-20"
            >
              <span className="font-medium text-gray">{platform}</span>
            </div>
          ))}
        </div>
        
        <p className="font-manrope text-lg font-medium text-dark">
          Trusted by over <span className="text-primary">30,000+</span> creators and brands
        </p>
      </div>
    </section>
  );
};

export default DistributionSection;
