
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Music, Headphones, Youtube } from 'lucide-react';

const DistributionSection: React.FC = () => {
  // Platform logos with icons and names
  const platforms = [
    { name: "Apple Podcasts", logo: <Headphones className="h-8 w-8" /> },
    { name: "Spotify", logo: <Music className="h-8 w-8" /> }, 
    { name: "Amazon Music", logo: "🎵" },
    { name: "YouTube", logo: <Youtube className="h-8 w-8" /> },
    { name: "Podcast Index", logo: "🎙️" },
    { name: "iHeartRadio", logo: "📻" },
    { name: "Overcast", logo: "🎧" },
    { name: "Castbox", logo: "📱" },
    { name: "Podcast Addict", logo: "🎮" },
    { name: "Pocket Casts", logo: "📻" },
    { name: "Pandora", logo: "🔊" },
  ];

  return (
    <section className="py-24 px-4 bg-white text-[#111827]">
      <div className="container mx-auto text-center">
        <h2 className="font-jakarta font-bold text-4xl md:text-5xl mb-6 text-[#4F46E5]">
          Your Podcast. Everywhere It Matters.
        </h2>
        <p className="font-manrope text-xl text-[#4B5563] mb-4 max-w-4xl mx-auto">
          We distribute your podcast to 20+ platforms, including Spotify, Apple Podcasts, YouTube, and more.
        </p>
        <p className="font-manrope text-lg text-[#4B5563] mb-12">
          Trusted by over 30,000+ creators and brands
        </p>
        
        {/* Responsive desktop display for larger screens */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {platforms.slice(0, 10).map((platform, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl py-6 px-4 flex flex-col items-center justify-center gap-3 transition-transform hover:scale-105 shadow-sm border border-gray-100"
            >
              <div className="text-3xl text-[#4F46E5]">{typeof platform.logo === 'string' ? platform.logo : React.cloneElement(platform.logo, { className: 'h-8 w-8 text-[#4F46E5]' })}</div>
              <span className="font-medium text-[#4B5563]">{platform.name}</span>
            </div>
          ))}
        </div>
        
        {/* Mobile carousel for smaller screens */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {platforms.map((platform, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl py-6 px-4 flex flex-col items-center justify-center gap-3 h-full shadow-sm border border-gray-100">
                    <div className="text-3xl text-[#4F46E5]">{typeof platform.logo === 'string' ? platform.logo : React.cloneElement(platform.logo, { className: 'h-8 w-8 text-[#4F46E5]' })}</div>
                    <span className="font-medium text-[#4B5563]">{platform.name}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white hover:bg-gray-50 text-[#4F46E5] border-[#4F46E5]" />
            <CarouselNext className="right-2 bg-white hover:bg-gray-50 text-[#4F46E5] border-[#4F46E5]" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default DistributionSection;
