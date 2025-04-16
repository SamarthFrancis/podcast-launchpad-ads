
import React, { useEffect, useRef } from 'react';
import { Apple, Music, Youtube, Headphones, Rss, Radio, BookOpen } from 'lucide-react';

const DistributionSection: React.FC = () => {
  // Platform logos with icons
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
    { name: "Overcast", logo: <Headphones className="h-8 w-8" /> },
  ];
  
  // Double the platforms array for seamless looping
  const allPlatforms = [...platforms, ...platforms];
  
  // Refs for animation control
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll animation
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollContent = scrollRef.current;
    
    if (!scrollContainer || !scrollContent) return;
    
    let animationId: number;
    let isPaused = false;
    let scrollPosition = 0;
    const speed = 0.5; // Pixels per frame
    
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
    
    // Start animation
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
  
  return (
    <section className="py-20 px-4 bg-white text-[#111827]">
      <div className="container mx-auto text-center">
        <h2 className="font-jakarta font-bold text-4xl md:text-5xl mb-6 text-[#4F46E5]">
          Your Podcast. Everywhere It Matters.
        </h2>
        <p className="font-manrope text-xl text-[#4B5563] mb-12 max-w-4xl mx-auto">
          We distribute your podcast to 20+ platforms — including Spotify, Apple Podcasts, YouTube, Amazon Music, JioSaavn, and more.
        </p>
        
        {/* Trusted badge */}
        <div className="mb-10">
          <span className="inline-block bg-gray-100 text-[#4B5563] px-6 py-2 rounded-full font-medium">
            Trusted by 30,000+ creators worldwide
          </span>
        </div>
        
        {/* Auto-scrolling logo carousel - Desktop */}
        <div className="hidden md:block overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-scroll scrollbar-hide" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div 
              ref={scrollRef}
              className="inline-flex gap-12 py-4"
            >
              {allPlatforms.map((platform, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center min-w-[120px] transition-transform hover:scale-110"
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
        
        {/* Mobile carousel - Simple scrollable row */}
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
      
      {/* Custom CSS for scrollbar hiding - Fix by removing the jsx property */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default DistributionSection;
