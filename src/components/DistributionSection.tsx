
import React, { useEffect, useRef } from 'react';
import { Apple, Music, Youtube, Headphones, Rss, Radio, BookOpen, Star } from 'lucide-react';

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
  
  // Double the platforms array for seamless looping
  const allPlatforms = [...platforms, ...platforms];
  
  // Refs for animation control
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll animations
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollContent = scrollRef.current;
    
    if (!scrollContainer || !scrollContent) return;
    
    let animationId: number;
    let isPaused = false;
    let scrollPosition = 0;
    const speed = 0.5; // Left to right
    
    const scroll = () => {
      if (!isPaused) {
        scrollPosition += speed;
        
        // Reset position for seamless loop when first set of logos is out of view
        if (scrollPosition >= scrollContent.clientWidth / 2) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };
    
    // Start animations
    animationId = requestAnimationFrame(scroll);
    
    // Pause on hover
    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };
    
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  // Star rating display component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex text-[#4F46E5]">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            fill={i < Math.floor(rating) ? "currentColor" : "none"} 
            className={i < Math.floor(rating) ? "text-[#4F46E5]" : "text-[#4F46E5]/40"} 
            size={20}
          />
        ))}
      </div>
    );
  };
  
  return (
    <section className="py-16 px-4 bg-white text-[#111827]">
      <div className="container mx-auto text-center">
        {/* 1. Ratings Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-12">
          {ratings.map((rating, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <StarRating rating={rating.stars} />
                <span className="text-[#111827] font-medium ml-1">{rating.stars}</span>
              </div>
              <div className="text-[#4B5563] font-medium">{rating.platform}</div>
            </div>
          ))}
        </div>
        
        {/* 2. Section Heading */}
        <h2 className="font-jakarta font-bold text-4xl md:text-5xl mb-6 text-[#4F46E5]">
          Your Podcast. Everywhere It Matters.
        </h2>
        <p className="font-manrope text-xl text-[#4B5563] mb-12 max-w-4xl mx-auto">
          We distribute your podcast to 20+ platforms — including Spotify, Apple Podcasts, YouTube, Amazon Music, and more.
        </p>
        
        {/* 3. Single-Row Marquee */}
        <div className="mb-12">
          {/* Logo scroll - Left to Right */}
          <div className="overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="overflow-x-scroll scrollbar-hide" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div 
                ref={scrollRef}
                className="inline-flex gap-12 py-8"
              >
                {allPlatforms.map((platform, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center justify-center min-w-[120px] transition-transform hover:scale-110 hover:text-[#4F46E5]"
                  >
                    <div className="text-[#4F46E5] mb-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      {typeof platform.logo === 'string' ? platform.logo : React.cloneElement(platform.logo, { className: 'h-10 w-10 text-[#4F46E5]' })}
                    </div>
                    <span className="font-medium text-[#4B5563]">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile scrollable row */}
          <div className="md:hidden">
            <div className="overflow-x-auto pb-6 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="inline-flex gap-6">
                {platforms.map((platform, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center justify-center min-w-[100px]"
                  >
                    <div className="text-[#4F46E5] mb-2 p-3 bg-white rounded-lg shadow-sm">
                      {typeof platform.logo === 'string' ? platform.logo : React.cloneElement(platform.logo, { className: 'h-8 w-8 text-[#4F46E5]' })}
                    </div>
                    <span className="font-medium text-sm text-[#4B5563]">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for scrollbar hiding */}
      <style>
        {`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        `}
      </style>
    </section>
  );
};

export default DistributionSection;
