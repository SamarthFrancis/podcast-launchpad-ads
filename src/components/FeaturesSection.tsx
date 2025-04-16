
import React from 'react';
import { FileAudio, Robot, Globe, Share2, Users, Lock } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Robot className="h-6 w-6" />,
      title: "AI-Powered Transcript & SEO Tools",
      description: "Automatically generate transcripts and optimize SEO"
    },
    {
      icon: <FileAudio className="h-6 w-6" />,
      title: "Dynamic Ad Insertion",
      description: "Insert ads dynamically into your podcast episodes"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Customizable Microsite",
      description: "Create a beautiful website for your podcast"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Embedded Player",
      description: "Share your podcast on any website or platform"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Work with up to 8 team members on your podcast"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Private Podcasting",
      description: "Create exclusive content for subscribers only"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="font-jakarta font-bold text-3xl md:text-4xl mb-12 text-center text-dark">
          Powerful Features to Launch and Scale
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="font-jakarta font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="font-manrope text-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
