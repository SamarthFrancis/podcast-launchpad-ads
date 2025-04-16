
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  // Track if video iframe is loaded
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  // Load the Vimeo player script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background using Vimeo Embed - Adjusted for full viewport height */}
      <div className="absolute inset-0 w-full h-full">
        {/* Updated aspect ratio container to cover full height */}
        <div className="absolute inset-0">
          <iframe 
            src="https://player.vimeo.com/video/1075997899?h=d409319f4a&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%',
              objectFit: 'cover'
            }} 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen
            onLoad={() => setIsIframeLoaded(true)}
          ></iframe>
        </div>
        
        {/* Dark Overlay - maintained at 60% opacity for text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        {/* Fallback gradient if iframe fails */}
        {!isIframeLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900"></div>
        )}
      </div>

      {/* Content - Improved alignment with flex centering and adjusted horizontal padding */}
      <div className="relative h-full w-full flex items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-[700px] w-full">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
