
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mic, Radio, Headphones, Music, AudioWaveform, Video, Podcast } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left flex flex-col space-y-6">
            <h1 className="font-jakarta font-bold text-4xl md:text-5xl lg:text-6xl text-[#111827]">
              Publish Once. <span className="text-[#4F46E5]">Distribute Everywhere.</span>
            </h1>
            <p className="font-manrope text-lg md:text-xl text-[#4B5563] max-w-lg">
              Launch your podcast in minutes. Reach millions across Spotify, Apple, YouTube & more — without breaking a sweat.
            </p>
            <div className="space-y-4 mt-2">
              <Button size="lg" className="bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white text-lg px-8 py-6">
                Start Your Free Trial
              </Button>
              <p className="text-sm text-[#4B5563]">No credit card required.</p>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center h-[350px] md:h-[450px] overflow-hidden animate-fade-in">
            {/* Podcast Creator Illustration */}
            <div className="relative w-full h-full">
              {/* Main Character */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="relative">
                  {/* Character Base */}
                  <div className="bg-[#F9FAFB] rounded-full w-[220px] h-[220px] flex items-center justify-center">
                    <svg width="180" height="180" viewBox="0 0 200 200" className="transform translate-y-2">
                      {/* Simplified Character */}
                      <circle cx="100" cy="70" r="40" fill="#E2E8F0" /> {/* Head */}
                      <path d="M100,110 Q100,150 100,170 Q120,190 80,190 Q60,190 80,170 Q80,150 80,110 Z" fill="#E2E8F0" /> {/* Body */}
                      
                      {/* Face Details */}
                      <circle cx="85" cy="65" r="5" fill="#1E293B" /> {/* Left Eye */}
                      <circle cx="115" cy="65" r="5" fill="#1E293B" /> {/* Right Eye */}
                      <path d="M90,80 Q100,90 110,80" stroke="#1E293B" strokeWidth="3" fill="none" /> {/* Smile */}
                      
                      {/* Headphones */}
                      <path d="M60,60 Q60,30 100,30 Q140,30 140,60" stroke="#4F46E5" strokeWidth="6" fill="none" /> {/* Headphone Band */}
                      <rect x="50" y="55" width="15" height="25" rx="5" fill="#4F46E5" /> {/* Left Earpiece */}
                      <rect x="135" y="55" width="15" height="25" rx="5" fill="#4F46E5" /> {/* Right Earpiece */}
                    </svg>
                  </div>
                  
                  {/* Microphone */}
                  <div className="absolute -right-10 top-1/2 transform -translate-y-1/4">
                    <div className="bg-white p-3 rounded-full shadow-lg relative">
                      <Mic className="h-8 w-8 text-[#4F46E5]" />
                      {/* Mic Sound Waves - Pulsing Animation */}
                      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                        <div className="h-8 w-1 bg-[#4F46E5]/20 rounded-full animate-pulse"></div>
                        <div className="h-6 w-1 bg-[#4F46E5]/30 rounded-full animate-pulse animation-delay-1000"></div>
                        <div className="h-4 w-1 bg-[#4F46E5]/40 rounded-full animate-pulse animation-delay-2000"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Camera */}
                  <div className="absolute -left-12 top-1/3">
                    <div className="bg-white p-3 rounded-full shadow-lg">
                      <Video className="h-8 w-8 text-[#7C3AED]" />
                      {/* Camera Recording Light */}
                      <div className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Audio Waveforms */}
              <div className="absolute bottom-10 inset-x-0 flex justify-center">
                <div className="bg-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2">
                  <AudioWaveform className="h-5 w-5 text-[#4F46E5]" />
                  <div className="flex space-x-1 items-center">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div 
                        key={i} 
                        className={`h-${i % 4 === 0 ? 8 : i % 3 === 0 ? 5 : i % 2 === 0 ? 3 : 6} w-1 bg-[#4F46E5] rounded-full animate-pulse`}
                        style={{ 
                          animationDelay: `${i * 0.1}s`,
                          height: `${i % 4 === 0 ? 32 : i % 3 === 0 ? 20 : i % 2 === 0 ? 12 : 24}px` 
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Video & Audio Platform Icons - Floating around */}
              <div className="absolute top-10 right-10">
                <div className="bg-white p-2 rounded-full shadow-md animate-pulse animation-delay-2000">
                  <Podcast className="h-6 w-6 text-[#4F46E5]" />
                </div>
              </div>
              <div className="absolute top-1/4 left-10">
                <div className="bg-white p-2 rounded-full shadow-md animate-pulse animation-delay-4000">
                  <Headphones className="h-6 w-6 text-[#7C3AED]" />
                </div>
              </div>
              <div className="absolute bottom-1/4 right-20">
                <div className="bg-white p-2 rounded-full shadow-md animate-pulse animation-delay-6000">
                  <Music className="h-6 w-6 text-[#4F46E5]" />
                </div>
              </div>
            </div>
            
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute left-1/4 top-1/4 w-40 h-40 rounded-full bg-[#4F46E5]/5"></div>
              <div className="absolute right-1/4 bottom-1/4 w-32 h-32 rounded-full bg-[#7C3AED]/5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
