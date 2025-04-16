
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const DistributionSection: React.FC = () => {
  // Platform logos
  const platforms = [
    { name: "Spotify", logo: "🎧" },
    { name: "Apple Podcasts", logo: "🍎" }, 
    { name: "Amazon Music", logo: "🎵" },
    { name: "YouTube", logo: "▶️" },
    { name: "JioSaavn", logo: "🎶" },
    { name: "Audible", logo: "📚" },
    { name: "Google Podcasts", logo: "🎙️" },
    { name: "Stitcher", logo: "🔊" }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="font-jakarta font-bold text-3xl md:text-4xl mb-4 text-dark">
          Your Podcast. Everywhere It Matters.
        </h2>
        <p className="font-manrope text-lg text-gray mb-12 max-w-2xl mx-auto">
          Trusted by 30,000+ creators to reach millions.
        </p>
        
        <Carousel 
          className="w-full max-w-4xl mx-auto" 
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {platforms.map((platform, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="bg-gray-50 h-24 rounded-xl flex flex-col items-center justify-center p-4 border border-gray-100 transition-all hover:shadow-md hover:scale-105">
                  <div className="text-3xl mb-1">{platform.logo}</div>
                  <p className="font-medium text-sm">{platform.name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="flex justify-center mt-8">
          <div className="inline-flex gap-1.5">
            {[0, 1, 2].map((_, i) => (
              <div 
                key={i} 
                className={`h-2 rounded-full transition-all ${i === 0 ? 'w-6 bg-primary' : 'w-2 bg-gray-200'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributionSection;
