
import React, { useRef } from 'react';
import { Bot, FileAudio, Globe, Share2, Users, Lock } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI-powered SEO Tools",
      description: "Automatically generate transcripts and optimize SEO"
    },
    {
      icon: <FileAudio className="h-6 w-6" />,
      title: "Video Podcasting",
      description: "Create stunning video podcasts that engage viewers"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Custom Microsites",
      description: "Create a beautiful website for your podcast"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Private Episodes",
      description: "Create exclusive content for subscribers only"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Work with up to 8 team members on your podcast"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "DAI Monetization",
      description: "Insert ads dynamically into your podcast episodes"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="font-jakarta font-bold text-3xl md:text-4xl mb-8 text-center text-[#4F46E5]">
          Everything You Need. Nothing You Don't.
        </h2>
        
        <Carousel
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="-ml-4">
            {features.map((feature, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white p-6 rounded-xl border border-gray-100 h-full transition-all hover:shadow-md hover:bg-white">
                  <div className="bg-[#4F46E5]/10 p-3 rounded-full w-fit mb-4 text-[#4F46E5]">
                    {feature.icon}
                  </div>
                  <h3 className="font-jakarta font-semibold text-xl mb-2 text-[#111827]">{feature.title}</h3>
                  <p className="font-manrope text-[#4B5563]">{feature.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="flex justify-center mt-8">
          <div className="inline-flex gap-1.5">
            {[0, 1, 2].map((_, i) => (
              <div 
                key={i} 
                className={`h-2 rounded-full transition-all ${i === 0 ? 'w-6 bg-[#4F46E5]' : 'w-2 bg-gray-200'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
