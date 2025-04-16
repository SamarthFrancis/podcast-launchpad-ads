
import React, { useState } from 'react';
import { 
  Card, 
  CardContent,
  CardFooter,
  CardHeader 
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Facebook, Instagram, ArrowRight, BookOpen, Award, Star, MessageCircle, Mic } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

// Define the possible card types 
type CardType = 'review' | 'guide' | 'artwork' | 'achievement' | 'promo' | 'social';

// Define the structure for our content cards
interface ContentCard {
  id: string;
  type: CardType;
  title: string;
  subtext?: string;
  image?: string;
  quote?: string;
  author?: string;
  platform?: {
    name: string;
    icon: React.ReactNode;
  };
  badge?: string;
  highlight?: boolean;
  colorScheme?: 'green' | 'blue' | 'purple' | 'pink' | 'yellow';
}

const CreatorReviewSection: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  // Sample content cards based on the reference image
  const contentCards: ContentCard[] = [
    {
      id: '1',
      type: 'guide',
      title: "HOW TO START A PODCAST",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      colorScheme: 'green',
      highlight: true
    },
    {
      id: '2',
      type: 'artwork',
      title: "ROOKIE MOVE",
      subtext: "Podcast featuring new creators",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      colorScheme: 'pink',
    },
    {
      id: '3',
      type: 'promo',
      title: "FILE",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      colorScheme: 'blue',
    },
    {
      id: '4',
      type: 'social',
      title: "It's an awesome feeling to see your podcast grow and develop listeners all around the world. Thanks for all your help and support.",
      author: "Jagrit Singh",
      platform: {
        name: "Facebook",
        icon: <Facebook className="h-4 w-4" />
      }
    },
    {
      id: '5',
      type: 'achievement',
      title: "Share your latest achievement",
      subtext: "Congrats from",
      badge: "Buzzsprout",
      image: "public/lovable-uploads/09729a1b-2be1-4a1c-a14c-b37b86e3c68c.png",
    },
    {
      id: '6',
      type: 'social',
      title: "A word of thanks to Buzzsprout. I listened to your 7 part course and followed the advice. I launched my preview episode 3 weeks ago, and launched three proper episodes last week. Two days ago, we broke into the Top 100 Business Podcasts, and Top 10 in the UK Podcast Charts (Employment Law Matters).",
      author: "Daniel Barnett",
      platform: {
        name: "Facebook",
        icon: <Facebook className="h-4 w-4" />
      }
    },
    {
      id: '7',
      type: 'promo',
      title: "GROW YOUR PODCAST",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      colorScheme: 'pink',
    },
    {
      id: '8',
      type: 'guide',
      title: "LEARN TO PODCAST 2021",
      subtext: "Complete guide for beginners",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      colorScheme: 'blue',
    },
    {
      id: '9',
      type: 'artwork',
      title: "Q&A PODCASTING",
      subtext: "Your questions answered",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      colorScheme: 'blue',
      highlight: true,
    },
  ];

  // Filter cards based on selected filter
  const filteredCards = filter === 'all' 
    ? contentCards 
    : contentCards.filter(card => card.type === filter);

  // Get background color based on color scheme
  const getColorScheme = (scheme?: string) => {
    switch(scheme) {
      case 'green': return 'bg-[#8EB443] text-white';
      case 'blue': return 'bg-[#3EBFE0] text-white';
      case 'purple': return 'bg-[#7C3AED] text-white';
      case 'pink': return 'bg-[#FF5BA8] text-white';
      case 'yellow': return 'bg-[#FFD166] text-black';
      default: return 'bg-white';
    }
  };

  // Render the appropriate card content based on card type
  const renderCardContent = (card: ContentCard) => {
    switch(card.type) {
      case 'social':
        return (
          <div className="h-full flex flex-col justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="pb-2">
              <p className="font-manrope text-gray-700">{card.title}</p>
            </div>
            <div className="pt-2 flex flex-col items-start">
              <p className="text-sm text-muted-foreground font-manrope font-medium">{card.author}</p>
              {card.platform && (
                <div className="flex items-center mt-2 text-xs text-muted-foreground">
                  {card.platform.icon}
                  <span className="ml-1">{card.platform.name}</span>
                </div>
              )}
            </div>
          </div>
        );
        
      case 'guide':
      case 'promo':
        return (
          <div className={`h-full relative flex flex-col overflow-hidden rounded-lg shadow-sm ${card.highlight ? 'border-2 border-primary' : 'border border-gray-100'}`}>
            <div className={`relative h-full min-h-[280px] overflow-hidden ${getColorScheme(card.colorScheme)}`}>
              {card.image && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-2/3 h-auto object-contain mix-blend-multiply"
                  />
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-jakarta font-bold text-2xl">{card.title}</h3>
                {card.subtext && (
                  <p className="text-sm mt-1">{card.subtext}</p>
                )}
              </div>
              {card.badge && (
                <span className="absolute top-2 right-2 bg-white text-black px-2 py-1 rounded-full text-xs font-bold">
                  {card.badge}
                </span>
              )}
            </div>
          </div>
        );
        
      case 'artwork':
        return (
          <div className={`h-full relative flex flex-col overflow-hidden rounded-lg shadow-sm ${card.highlight ? 'border-2 border-primary' : 'border border-gray-100'}`}>
            <div className={`relative h-full min-h-[280px] overflow-hidden ${getColorScheme(card.colorScheme)}`}>
              {card.image && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-2/3 h-auto object-contain mix-blend-multiply"
                  />
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-jakarta font-bold text-2xl">{card.title}</h3>
                {card.subtext && (
                  <p className="text-sm mt-1">{card.subtext}</p>
                )}
              </div>
            </div>
          </div>
        );
        
      case 'achievement':
        return (
          <div className="h-full flex flex-col bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <h3 className="font-jakarta font-bold text-xl text-gray-900">{card.title}</h3>
              {card.subtext && (
                <div className="flex items-center mt-2">
                  <p className="font-manrope text-gray-600">{card.subtext}</p>
                  {card.badge && (
                    <span className="ml-1 font-bold text-primary">{card.badge}</span>
                  )}
                </div>
              )}
            </div>
            {card.image && (
              <div className="relative flex-1 flex items-center justify-center p-2 bg-gray-50">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="max-w-full h-auto object-contain"
                />
              </div>
            )}
          </div>
        );
        
      default:
        return (
          <div className="p-4">
            <p>Invalid card type</p>
          </div>
        );
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-jakarta font-bold text-4xl md:text-5xl mb-4 text-[#1C382E]">
            Your guide to podcasting
          </h2>
          <p className="font-manrope text-lg text-[#4B5563] max-w-3xl mx-auto">
            With our <span className="text-primary">step-by-step guides</span>, 
            <span className="text-primary"> video tutorials</span>, 
            <span className="text-primary"> courses</span>, 
            <span className="text-primary"> industry podcasts</span>, and the 
            <span className="text-primary"> Buzzsprout Podcast Community</span>, 
            you'll have everything you need to launch a successful podcast.
          </p>
        </div>
        
        {/* Filter Toggle */}
        <div className="flex justify-center mb-8">
          <ToggleGroup 
            type="single" 
            value={filter} 
            onValueChange={(value) => value && setFilter(value)}
            className="bg-gray-100 p-1 rounded-lg"
          >
            <ToggleGroupItem value="all" className="px-4 py-2 rounded-md data-[state=on]:bg-white data-[state=on]:shadow-sm">
              <span className="font-manrope">All</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="guide" className="px-4 py-2 rounded-md data-[state=on]:bg-white data-[state=on]:shadow-sm">
              <BookOpen className="w-4 h-4 mr-1" />
              <span className="font-manrope">Guides</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="social" className="px-4 py-2 rounded-md data-[state=on]:bg-white data-[state=on]:shadow-sm">
              <MessageCircle className="w-4 h-4 mr-1" />
              <span className="font-manrope">Social</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="artwork" className="px-4 py-2 rounded-md data-[state=on]:bg-white data-[state=on]:shadow-sm">
              <Mic className="w-4 h-4 mr-1" />
              <span className="font-manrope">Podcasts</span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        {/* Mobile: Horizontal Scrolling Cards */}
        <div className="md:hidden">
          <ScrollArea className="w-full whitespace-nowrap pb-4">
            <div className="flex gap-4 px-4 pb-4">
              {filteredCards.map((card) => (
                <div key={card.id} className="w-[280px] h-[280px] flex-shrink-0">
                  {renderCardContent(card)}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
        
        {/* Tablet/Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card) => (
            <div 
              key={card.id} 
              className={cn(
                "transition-all duration-300 hover:shadow-md hover:scale-[1.02] h-[300px]",
              )}
            >
              {renderCardContent(card)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorReviewSection;
