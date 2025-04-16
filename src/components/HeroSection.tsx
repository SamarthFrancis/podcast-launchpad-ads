
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mic, Radio, Headphones, Music, WaveformCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left flex flex-col space-y-6">
            <h1 className="font-jakarta font-bold text-4xl md:text-5xl lg:text-6xl text-dark">
              Publish Once. <span className="text-primary">Distribute Everywhere.</span>
            </h1>
            <p className="font-manrope text-lg md:text-xl text-gray max-w-lg">
              Launch your podcast in minutes. Reach millions across Spotify, Apple, YouTube & more — without breaking a sweat.
            </p>
            <div className="space-y-4 mt-2">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Your Free Trial
              </Button>
              <p className="text-sm text-gray-500">No credit card required.</p>
            </div>
          </div>
          
          {/* Right Column - Animated Illustration */}
          <div className="relative flex justify-center items-center h-[350px] md:h-[400px] overflow-hidden">
            {/* Central microphone */}
            <div className="absolute z-10">
              <div className="bg-primary/10 rounded-full p-8 animate-pulse">
                <Mic className="h-16 w-16 text-primary" />
              </div>
            </div>
            
            {/* Orbiting elements */}
            <div className="absolute w-full h-full">
              {/* WaveformCircle icon orbit */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="animate-spin-slow relative w-[250px] h-[250px] rounded-full border border-dashed border-primary/30">
                  <div className="absolute -top-5 transform -translate-x-1/2">
                    <div className="bg-white/80 p-3 rounded-full shadow-lg">
                      <WaveformCircle className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Headphones icon orbit */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="animate-spin-slow animation-delay-2000 relative w-[300px] h-[300px] rounded-full border border-dashed border-secondary/30">
                  <div className="absolute -right-5 top-1/2 transform -translate-y-1/2">
                    <div className="bg-white/80 p-3 rounded-full shadow-lg">
                      <Headphones className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Music icon orbit */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="animate-spin-slow animation-delay-4000 relative w-[350px] h-[350px] rounded-full border border-dashed border-primary/30">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white/80 p-3 rounded-full shadow-lg">
                      <Music className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Radio icon orbit */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="animate-spin-slow animation-delay-6000 relative w-[200px] h-[200px] rounded-full border border-dashed border-secondary/30">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <div className="bg-white/80 p-3 rounded-full shadow-lg">
                      <Radio className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pulse rings */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="animate-ping bg-primary/10 rounded-full h-24 w-24 opacity-75"></div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="animate-ping animation-delay-1000 bg-secondary/10 rounded-full h-32 w-32 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
