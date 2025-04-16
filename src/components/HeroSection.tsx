
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  // Track if video is loaded
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Video sources to try
  const videoSources = [
    "https://cdn.pixabay.com/vimeo/506768775/podcast-70809.mp4?width=1280&hash=0c81ac75aa0e7634a85a7848e5e3412b777e17aa",
    "https://cdn.coverr.co/videos/coverr-woman-recording-podcast-in-a-studio-5085/1080p.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-woman-talking-into-a-podcast-microphone-42477-large.mp4"
  ];
  
  // Current video source index
  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);

  // Handle video load error
  const handleVideoError = () => {
    if (currentSourceIndex < videoSources.length - 1) {
      // Try next video source
      setCurrentSourceIndex(prevIndex => prevIndex + 1);
    } else {
      // All sources failed
      setVideoError(true);
      console.error("All video sources failed to load");
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          className="object-cover w-full h-full"
          autoPlay 
          muted 
          loop 
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={handleVideoError}
        >
          <source src={videoSources[currentSourceIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay - increased opacity for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        {/* Fallback image if video fails */}
        {videoError && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900"></div>
        )}
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 py-24 md:py-32 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left flex flex-col space-y-6 text-white">
            <h1 className="font-jakarta font-bold text-4xl md:text-5xl lg:text-6xl">
              Publish Once. <span className="text-[#4F46E5]">Distribute Everywhere.</span>
            </h1>
            <p className="font-manrope text-lg md:text-xl max-w-lg">
              Powerful tools to launch and grow your audio or video podcast — no tech team needed.
            </p>
            <div className="space-y-4 mt-2">
              <Button
                size="lg"
                className="bg-white text-[#4F46E5] hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-lg"
              >
                Start Your Free Trial
              </Button>
              <p className="text-sm text-gray-200">No credit card required.</p>
            </div>
          </div>
          
          {/* Intentionally left the right side empty to let the video be visible */}
          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
