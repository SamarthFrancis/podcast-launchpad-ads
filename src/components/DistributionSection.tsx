
import React, { useEffect, useRef } from 'react';
import { Apple, Music, Youtube, Headphones, Rss, Radio, BookOpen, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const DistributionSection: React.FC = () => {
  // Platform logos with icons for first row (left to right)
  const platformsRow1 = [
    { name: "Apple Podcasts", logo: <Apple className="h-8 w-8" /> },
    { name: "Spotify", logo: <Music className="h-8 w-8" /> }, 
    { name: "YouTube", logo: <Youtube className="h-8 w-8" /> },
    { name: "Amazon Music", logo: <Headphones className="h-8 w-8" /> },
    { name: "JioSaavn", logo: <Music className="h-8 w-8" /> },
    { name: "Audible", logo: <BookOpen className="h-8 w-8" /> },
    { name: "Castbox", logo: <Radio className="h-8 w-8" /> },
  ];
  
  // Platform logos with icons for second row (right to left)
  const platformsRow2 = [
    { name: "Podcast Index", logo: <Rss className="h-8 w-8" /> },
    { name: "Google Podcasts", logo: <Headphones className="h-8 w-8" /> },
    { name: "Pocket Casts", logo: <Radio className="h-8 w-8" /> },
    { name: "Pandora", logo: <Music className="h-8 w-8" /> },
    { name: "iHeartRadio", logo: <Radio className="h-8 w-8" /> },
    { name: "Overcast", logo: <Headphones className="h-8 w-8" /> },
    { name: "Stitcher", logo: <Radio className="h-8 w-8" /> },
  ];
  
  // Rating platforms
  const ratings = [
    { platform: "Capterra", stars: 4.6, count: 5 },
    { platform: "GetApp", stars: 4.6, count: 5 },
    { platform: "G2", stars: 4.6, count: 5 }
  ];
  
  // Reviews
  const reviews = [
    {
      text: "This platform revolutionized our podcast reach. We went from 500 to 15,000 monthly listeners in just 8 weeks!",
      author: "Mike Johnson",
      role: "The Tech Insider Podcast"
    },
    {
      text: "I was spending 6 hours per week on distribution. Now it's 10 minutes. The ROI is incredible.",
      author: "Sarah Miller",
      role: "Business Growth Show"
    },
    {
      text: "The analytics alone are worth the price. Finally understanding our audience changed everything.",
      author: "David Chen",
      role: "History Untold"
    },
    {
      text: "My podcast went from zero to trending in my category in just 3 weeks after using this platform.",
      author: "Priya Sharma",
      role: "The Mindful Moment"
    }
  ];
  
  // Double the platforms array for seamless looping
  const allPlatformsRow1 = [...platformsRow1, ...platformsRow1];
  const allPlatformsRow2 = [...platformsRow2, ...platformsRow2];
  
  // Refs for animation control
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const scrollContainer1Ref = useRef<HTMLDivElement>(null);
  const scrollContainer2Ref = useRef<HTMLDivElement>(null);
  
  // Auto-scroll animations
  useEffect(() => {
    const scrollContainer1 = scrollContainer1Ref.current;
    const scrollContent1 = scrollRef1.current;
    const scrollContainer2 = scrollContainer2Ref.current;
    const scrollContent2 = scrollRef2.current;
    
    if (!scrollContainer1 || !scrollContent1 || !scrollContainer2 || !scrollContent2) return;
    
    let animationId1: number;
    let animationId2: number;
    let isPaused1 = false;
    let isPaused2 = false;
    let scrollPosition1 = 0;
    let scrollPosition2 = 0;
    const speed1 = 0.5; // Left to right
    const speed2 = -0.5; // Right to left
    
    const scroll1 = () => {
      if (!isPaused1) {
        scrollPosition1 += speed1;
        
        // Reset position for seamless loop when first set of logos is out of view
        if (scrollPosition1 >= scrollContent1.clientWidth / 2) {
          scrollPosition1 = 0;
        }
        
        scrollContainer1.scrollLeft = scrollPosition1;
      }
      animationId1 = requestAnimationFrame(scroll1);
    };
    
    const scroll2 = () => {
      if (!isPaused2) {
        scrollPosition2 += speed2;
        
        // Reset position for seamless loop (negative direction)
        if (scrollPosition2 <= -scrollContent2.clientWidth / 2) {
          scrollPosition2 = 0;
        }
        
        scrollContainer2.scrollLeft = scrollPosition2;
      }
      animationId2 = requestAnimationFrame(scroll2);
    };
    
    // Start animations
    animationId1 = requestAnimationFrame(scroll1);
    animationId2 = requestAnimationFrame(scroll2);
    
    // Pause on hover
    const handleMouseEnter1 = () => { isPaused1 = true; };
    const handleMouseLeave1 = () => { isPaused1 = false; };
    const handleMouseEnter2 = () => { isPaused2 = true; };
    const handleMouseLeave2 = () => { isPaused2 = false; };
    
    scrollContainer1.addEventListener('mouseenter', handleMouseEnter1);
    scrollContainer1.addEventListener('mouseleave', handleMouseLeave1);
    scrollContainer2.addEventListener('mouseenter', handleMouseEnter2);
    scrollContainer2.addEventListener('mouseleave', handleMouseLeave2);
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationId1);
      cancelAnimationFrame(animationId2);
      scrollContainer1.removeEventListener('mouseenter', handleMouseEnter1);
      scrollContainer1.removeEventListener('mouseleave', handleMouseLeave1);
      scrollContainer2.removeEventListener('mouseenter', handleMouseEnter2);
      scrollContainer2.removeEventListener('mouseleave', handleMouseLeave2);
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
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          {ratings.map((rating, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <div className="text-[#111827] font-bold mb-2">{rating.platform}</div>
              <div className="flex items-center gap-2">
                <StarRating rating={rating.stars} />
                <span className="text-[#111827] font-medium">{rating.stars}</span>
              </div>
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
        
        {/* Trusted badge */}
        <div className="mb-10">
          <span className="inline-block bg-gray-100 text-[#4B5563] px-6 py-2 rounded-full font-medium">
            Trusted by 30,000+ creators worldwide
          </span>
        </div>
        
        {/* 3. Dual-Row Criss-Cross Marquee */}
        <div className="mb-12">
          {/* First row - Left to Right */}
          <div className="hidden md:block overflow-hidden mb-8">
            <div 
              ref={scrollContainer1Ref}
              className="overflow-x-scroll scrollbar-hide" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div 
                ref={scrollRef1}
                className="inline-flex gap-12 py-4"
              >
                {allPlatformsRow1.map((platform, index) => (
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
          
          {/* Second row - Right to Left */}
          <div className="hidden md:block overflow-hidden">
            <div 
              ref={scrollContainer2Ref}
              className="overflow-x-scroll scrollbar-hide" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div 
                ref={scrollRef2}
                className="inline-flex gap-12 py-4"
              >
                {allPlatformsRow2.map((platform, index) => (
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
                {platformsRow1.map((platform, index) => (
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
        
        {/* 4. Text Reviews */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-jakarta font-semibold text-2xl mb-6 text-[#111827]">
            What Creators Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="text-left shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <p className="font-manrope text-lg mb-6 italic text-[#4B5563]">"{review.text}"</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-[#4F46E5]/10 mr-3 flex items-center justify-center font-bold text-[#4F46E5]">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-jakarta font-medium text-[#111827]">{review.author}</p>
                      <p className="text-[#4B5563] text-sm">{review.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom CSS for scrollbar hiding */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default DistributionSection;
