
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
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
        >
          <source src="https://player.vimeo.com/external/528726903.sd.mp4?s=d989338dda0412e60c901fe3c8d70583dc50944b&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay - increased opacity for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
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
