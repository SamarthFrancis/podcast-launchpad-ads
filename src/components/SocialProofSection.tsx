
import React from 'react';

const SocialProofSection: React.FC = () => {
  const logos = [
    { name: "Meta", textLogo: true },
    { name: "Audible", textLogo: true },
    { name: "Himalay's", textLogo: true },
    { name: "Ashiana", textLogo: true },
    { name: "ANI News", textLogo: true },
    { name: "Juggernaut", textLogo: true },
    { name: "The Life Saver Show", textLogo: false },
    { name: "BBC", textLogo: true },
    { name: "The Money Wise Podcast", textLogo: false },
    { name: "Radio City", textLogo: true },
    { name: "The Smiling Souls", textLogo: false },
    { name: "Rosewood", textLogo: true }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-jakarta font-bold text-3xl md:text-4xl mb-3 text-[#4F46E5]">
            Loved by Creators Worldwide
          </h2>
          <p className="font-manrope text-lg text-[#4B5563] max-w-2xl mx-auto">
            From global giants to indie voices — thousands of creators trust us to get their podcast heard.
          </p>
          <p className="font-manrope text-lg text-[#4B5563] mt-4">
            Trusted by over 30,000+ creators and brands
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-4 shadow-sm aspect-square flex items-center justify-center overflow-hidden transition-all hover:shadow-md border border-gray-100"
            >
              {logo.textLogo ? (
                <div className="text-lg md:text-xl font-bold text-[#111827]">{logo.name}</div>
              ) : (
                <div className="text-sm md:text-base font-medium text-center text-[#4B5563]">{logo.name}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
