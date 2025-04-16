
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
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
    <section className="py-24 px-4 bg-[#111111] text-white">
      <div className="container mx-auto text-center">
        <h2 className="font-jakarta font-bold text-4xl md:text-5xl mb-6 text-white">
          Get listed in the top podcast directories
        </h2>
        <p className="font-manrope text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
          Reach millions of listeners by listing your podcast in Apple Podcasts, Spotify, Podcast Index, 
          Amazon Music, YouTube, and all of the <span className="underline">podcast directories</span>.
        </p>
        
        {/* Top row of platforms */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {platforms.slice(0, 5).map((platform, index) => (
            <div 
              key={index} 
              className="bg-[#222222] rounded-xl py-3 px-4 flex items-center justify-center gap-2"
            >
              <div className="text-2xl">{typeof platform.logo === 'string' ? platform.logo : platform.logo}</div>
              <span className="font-medium text-sm whitespace-nowrap">{platform.name}</span>
            </div>
          ))}
        </div>
        
        {/* Second row with fewer platforms */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {platforms.slice(5, 9).map((platform, index) => (
            <div 
              key={index} 
              className="bg-[#222222] rounded-xl py-3 px-4 flex items-center justify-center gap-2"
            >
              <div className="text-2xl">{typeof platform.logo === 'string' ? platform.logo : platform.logo}</div>
              <span className="font-medium text-sm whitespace-nowrap">{platform.name}</span>
            </div>
          ))}
        </div>
        
        {/* Mobile device mockups */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Amazon Music */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🎵</span>
              <span className="font-medium">Amazon Music</span>
            </div>
            <div className="bg-[#222222] rounded-xl p-3 h-60 w-full max-w-[220px]">
              <div className="h-full w-full bg-gray-800 rounded-lg"></div>
            </div>
          </div>
          
          {/* Overcast */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🎧</span>
              <span className="font-medium">Overcast</span>
            </div>
            <div className="bg-[#222222] rounded-xl p-3 h-60 w-full max-w-[220px]">
              <div className="h-full w-full bg-gray-800 rounded-lg"></div>
            </div>
          </div>
          
          {/* Spotify */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <Music className="h-6 w-6" />
              <span className="font-medium">Spotify</span>
            </div>
            <div className="bg-[#222222] rounded-xl p-3 h-60 w-full max-w-[220px]">
              <div className="h-full w-full bg-purple-900 rounded-lg"></div>
            </div>
          </div>
          
          {/* Apple Podcasts */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <Headphones className="h-6 w-6" />
              <span className="font-medium">Apple Podcasts</span>
            </div>
            <div className="bg-[#222222] rounded-xl p-3 h-60 w-full max-w-[220px]">
              <div className="h-full w-full bg-gray-800 rounded-lg"></div>
            </div>
          </div>
          
          {/* iHeartRadio */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">📻</span>
              <span className="font-medium">iHeartRadio</span>
            </div>
            <div className="bg-[#222222] rounded-xl p-3 h-60 w-full max-w-[220px]">
              <div className="h-full w-full bg-gray-800 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributionSection;
