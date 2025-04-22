
import React, { useEffect, useRef } from 'react';

interface PlatformItem {
  name: string;
  logo: React.ReactNode;
}

interface PlatformMarqueeProps {
  platforms: PlatformItem[];
  direction?: 'ltr' | 'rtl'; // Left to right or right to left
}

const PlatformMarquee = ({ platforms, direction = 'ltr' }: PlatformMarqueeProps) => {
  // Refs for animation control
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Double the platforms array for seamless looping
  const allPlatforms = [...platforms, ...platforms];
  
  // Auto-scroll animations
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollContent = scrollRef.current;
    
    if (!scrollContainer || !scrollContent) return;
    
    let animationId: number;
    let isPaused = false;
    let scrollPosition = 0;
    const speed = 0.5; // Scroll speed
    
    const scroll = () => {
      if (!isPaused) {
        // Adjust scroll direction based on prop
        if (direction === 'ltr') {
          scrollPosition += speed;
          
          // Reset position for seamless loop when first set of logos is out of view
          if (scrollPosition >= scrollContent.clientWidth / 2) {
            scrollPosition = 0;
          }
        } else {
          scrollPosition -= speed;
          
          // Reset position for seamless loop when scrolled to the left
          if (scrollPosition <= 0) {
            scrollPosition = scrollContent.clientWidth / 2;
          }
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
  }, [direction]);
  
  return (
    <>
      <div className="mb-6">
        {/* Logo scroll */}
        <div className="overflow-hidden">
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
                  className="flex flex-col items-center justify-center min-w-[120px] transition-transform hover:scale-110 hover:text-[#4F46E5]"
                >
                  <div className="text-[#4F46E5] mb-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    {typeof platform.logo === 'string' ? platform.logo : React.cloneElement(platform.logo as React.ReactElement, { className: 'h-10 w-10 text-[#4F46E5]' })}
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
                    {typeof platform.logo === 'string' ? platform.logo : React.cloneElement(platform.logo as React.ReactElement, { className: 'h-8 w-8 text-[#4F46E5]' })}
                  </div>
                  <span className="font-medium text-sm text-[#4B5563]">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        `}
      </style>
    </>
  );
}

export default PlatformMarquee;
