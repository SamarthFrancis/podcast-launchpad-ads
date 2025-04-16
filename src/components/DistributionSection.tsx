
import React from 'react';
import { Apple, Music, Youtube, Headphones, Rss, Radio, BookOpen } from 'lucide-react';
import RatingCard from './ratings/RatingCard';
import PlatformMarquee from './platforms/PlatformMarquee';

const DistributionSection: React.FC = () => {
  // Platform logos with icons for the single row
  const platforms = [
    { name: "Apple Podcasts", logo: <Apple className="h-8 w-8" /> },
    { name: "Spotify", logo: <Music className="h-8 w-8" /> }, 
    { name: "YouTube", logo: <Youtube className="h-8 w-8" /> },
    { name: "Amazon Music", logo: <Headphones className="h-8 w-8" /> },
    { name: "JioSaavn", logo: <Music className="h-8 w-8" /> },
    { name: "Audible", logo: <BookOpen className="h-8 w-8" /> },
    { name: "Castbox", logo: <Radio className="h-8 w-8" /> },
    { name: "Podcast Index", logo: <Rss className="h-8 w-8" /> },
    { name: "Google Podcasts", logo: <Headphones className="h-8 w-8" /> },
    { name: "Pocket Casts", logo: <Radio className="h-8 w-8" /> },
    { name: "Pandora", logo: <Music className="h-8 w-8" /> },
    { name: "iHeartRadio", logo: <Radio className="h-8 w-8" /> },
  ];
  
  // Rating platforms - updated to only include two ratings
  const ratings = [
    { platform: "GetApp", stars: 4.8, count: 5 },
    { platform: "G2", stars: 4.9, count: 5 }
  ];
  
  return (
    <section className="py-16 px-4 bg-white text-[#111827]">
      <div className="container mx-auto text-center">
        {/* 1. Ratings Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-12">
          {ratings.map((rating, index) => (
            <RatingCard 
              key={index}
              platform={rating.platform}
              stars={rating.stars}
              count={rating.count}
            />
          ))}
        </div>
        
        {/* 2. Section Heading */}
        <h2 className="font-jakarta font-bold text-4xl md:text-5xl mb-6 text-[#4F46E5]">
          Your Podcast. Everywhere It Matters.
        </h2>
        <p className="font-manrope text-xl text-[#4B5563] mb-12 max-w-4xl mx-auto">
          We distribute your podcast to 20+ platforms — including Spotify, Apple Podcasts, YouTube, Amazon Music, and more.
        </p>
        
        {/* 3. Platform Marquee */}
        <PlatformMarquee platforms={platforms} />
      </div>
    </section>
  );
};

export default DistributionSection;
