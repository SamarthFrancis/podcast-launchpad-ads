
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card";
import { Facebook, Instagram, Quote, BookOpen, Award, Star, MessageCircle } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

// Define the possible card types 
type CardType = 'review' | 'guide' | 'artwork' | 'achievement' | 'promo';

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
}

const CreatorReviewSection: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  // Sample content cards - these would be replaced with real data
  const contentCards: ContentCard[] = [
    {
      id: '1',
      type: 'review',
      title: "This platform changed our podcast growth trajectory",
      quote: "We went from 500 to 15,000 monthly listeners in just 8 weeks using the distribution tools!",
      author: "Sarah Miller, Business Growth Show",
      platform: {
        name: "Facebook",
        icon: <Facebook className="h-4 w-4" />
      }
    },
    {
      id: '2',
      type: 'guide',
      title: "How to Start a Podcast in 2025",
      subtext: "Complete beginner's guide with equipment recommendations",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      badge: "Popular Guide"
    },
    {
      id: '3',
      type: 'artwork',
      title: "Featured Podcast",
      subtext: "The Tech Insider",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: '4',
      type: 'review',
      title: "Our audience growth has been incredible",
      quote: "The analytics alone are worth the price. Finally understanding our audience changed everything.",
      author: "David Chen, History Untold",
      platform: {
        name: "Instagram",
        icon: <Instagram className="h-4 w-4" />
      }
    },
    {
      id: '5',
      type: 'achievement',
      title: "1M+ Downloads Milestone",
      subtext: "Achieved by podcasts using our platform in 2024",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      badge: "Achievement"
    },
    {
      id: '6',
      type: 'promo',
      title: "Grow Your Podcast Audience",
      subtext: "Learn how to expand your reach across all major platforms",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      badge: "Resource"
    },
    {
      id: '7',
      type: 'review',
      title: "Simplified our workflow immensely",
      quote: "I was spending 6 hours per week on distribution. Now it's 10 minutes. The ROI is incredible.",
      author: "Mike Johnson, The Tech Insider Podcast",
      platform: {
        name: "G2",
        icon: <Star className="h-4 w-4" />
      }
    },
    {
      id: '8',
      type: 'guide',
      title: "Podcast Monetization Strategies",
      subtext: "5 proven methods to generate revenue from your podcast",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      badge: "Guide"
    },
    {
      id: '9',
      type: 'artwork',
      title: "Trending Now",
      subtext: "Money Matters Podcast",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  // Filter cards based on selected filter
  const filteredCards = filter === 'all' 
    ? contentCards 
    : contentCards.filter(card => card.type === filter);

  // Render the appropriate card content based on card type
  const renderCardContent = (card: ContentCard) => {
    switch(card.type) {
      case 'review':
        return (
          <div className="h-full flex flex-col justify-between">
            <CardHeader className="pb-2">
              <div className="flex items-start">
                <Quote className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                <h3 className="font-jakarta font-bold text-lg">{card.title}</h3>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="font-manrope text-gray italic">"{card.quote}"</p>
            </CardContent>
            <CardFooter className="pt-2 flex flex-col items-start">
              <p className="text-sm text-muted-foreground font-manrope">{card.author}</p>
              {card.platform && (
                <div className="flex items-center mt-2 text-xs text-muted-foreground">
                  {card.platform.icon}
                  <span className="ml-1">{card.platform.name}</span>
                </div>
              )}
            </CardFooter>
          </div>
        );
        
      case 'guide':
      case 'promo':
        return (
          <div className="h-full relative flex flex-col">
            <div className="relative h-40 rounded-t-lg overflow-hidden">
              {card.image && (
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover"
                />
              )}
              {card.badge && (
                <span className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-bold">
                  {card.badge}
                </span>
              )}
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-start">
                <BookOpen className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                <h3 className="font-jakarta font-bold text-lg">{card.title}</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-manrope text-gray">{card.subtext}</p>
            </CardContent>
          </div>
        );
        
      case 'artwork':
        return (
          <div className="h-full flex flex-col">
            <div className="relative h-52 rounded-t-lg overflow-hidden">
              {card.image && (
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <CardHeader className="pb-2">
              <h3 className="font-jakarta font-bold text-lg">{card.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="font-manrope text-gray">{card.subtext}</p>
            </CardContent>
          </div>
        );
        
      case 'achievement':
        return (
          <div className="h-full flex flex-col">
            <div className="relative h-40 rounded-t-lg overflow-hidden">
              {card.image && (
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover"
                />
              )}
              {card.badge && (
                <span className="absolute top-2 right-2 bg-secondary text-white px-2 py-1 rounded-full text-xs font-bold">
                  {card.badge}
                </span>
              )}
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-start">
                <Award className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-1" />
                <h3 className="font-jakarta font-bold text-lg">{card.title}</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-manrope text-gray">{card.subtext}</p>
            </CardContent>
          </div>
        );
        
      default:
        return (
          <CardContent>
            <p>Invalid card type</p>
          </CardContent>
        );
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-jakarta font-bold text-4xl md:text-5xl mb-4 text-[#4F46E5]">
            What Creators Are Saying & Learning
          </h2>
          <p className="font-manrope text-lg text-[#4B5563] max-w-2xl mx-auto">
            Insights, stories, and resources from our global creator community
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
            <ToggleGroupItem value="review" className="px-4 py-2 rounded-md data-[state=on]:bg-white data-[state=on]:shadow-sm">
              <MessageCircle className="w-4 h-4 mr-1" />
              <span className="font-manrope">Reviews</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="guide" className="px-4 py-2 rounded-md data-[state=on]:bg-white data-[state=on]:shadow-sm">
              <BookOpen className="w-4 h-4 mr-1" />
              <span className="font-manrope">Guides</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="achievement" className="px-4 py-2 rounded-md data-[state=on]:bg-white data-[state=on]:shadow-sm">
              <Award className="w-4 h-4 mr-1" />
              <span className="font-manrope">Featured</span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        {/* Mobile: Horizontal Scrolling Cards */}
        <div className="md:hidden">
          <ScrollArea className="w-full whitespace-nowrap pb-4">
            <div className="flex gap-4 px-4 pb-4">
              {filteredCards.map((card) => (
                <div key={card.id} className="w-[280px] flex-shrink-0">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                        {renderCardContent(card)}
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <div>
                          <h4 className="font-jakarta font-bold">{card.title}</h4>
                          <p className="text-sm text-muted-foreground">{card.subtext || card.author}</p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
        
        {/* Tablet/Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card) => (
            <Card 
              key={card.id} 
              className={cn(
                "overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.02]",
                "h-full"
              )}
            >
              {renderCardContent(card)}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorReviewSection;
