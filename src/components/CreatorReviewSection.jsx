
import React from 'react';
import { MessageCircle, Facebook, Video } from "lucide-react";
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface ContentCard {
  id: string;
  title: string;
  author?: string;
  platform?: {
    name: string;
    icon: React.ReactNode;
  };
}

const CreatorReviewSection: React.FC = () => {
  const [activeView, setActiveView] = React.useState<"reviews" | "videos">("reviews");

  const reviewCards: ContentCard[] = [
    {
      id: '4',
      title: "It's an awesome feeling to see your video content grow and develop viewers all around the world. Thanks for all your help and support.",
      author: "Jagrit Singh",
      platform: {
        name: "Facebook",
        icon: <Facebook className="h-4 w-4" />
      }
    },
    {
      id: '6',
      title: "A word of thanks. I followed your video creation course and the advice given. I launched my preview video 3 weeks ago, and published three proper episodes last week. Two days ago, we broke into the Top 100 Video Creators Charts!",
      author: "Daniel Barnett",
      platform: {
        name: "Facebook",
        icon: <Facebook className="h-4 w-4" />
      }
    }
  ];

  const videoCards: ContentCard[] = [
    {
      id: '1',
      title: "Video Creation Masterclass - From Concept to Upload",
      author: "Creative Academy",
      platform: {
        name: "Tutorial",
        icon: <Video className="h-4 w-4" />
      }
    },
    {
      id: '2',
      title: "Advanced Video Editing Techniques for Creators",
      author: "Pro Studio",
      platform: {
        name: "Course",
        icon: <Video className="h-4 w-4" />
      }
    }
  ];

  const renderSocialCard = (card: ContentCard) => (
    <div className="h-full flex flex-col justify-between p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors">
      <div className="pb-4">
        <p className="font-manrope text-gray-700 leading-relaxed">{card.title}</p>
      </div>
      <div className="pt-4 flex flex-col items-start border-t border-gray-100">
        <p className="text-sm font-manrope font-medium text-gray-900">{card.author}</p>
        {card.platform && (
          <div className="flex items-center mt-2 text-xs text-muted-foreground">
            {card.platform.icon}
            <span className="ml-1">{card.platform.name}</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-jakarta font-bold text-4xl md:text-5xl mb-6 text-gray-900">
            Your guide to video creation
          </h2>
          <p className="font-manrope text-lg text-gray-600 max-w-3xl mx-auto">
            Join our thriving community of video creators. Get access to 
            <span className="text-primary font-medium"> step-by-step tutorials</span>, 
            <span className="text-primary font-medium"> expert courses</span>, and 
            <span className="text-primary font-medium"> personalized guidance</span> to 
            launch your successful video channel.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <ToggleGroup type="single" value={activeView} onValueChange={(value) => value && setActiveView(value as "reviews" | "videos")}>
            <ToggleGroupItem value="reviews" className="px-6">Reviews</ToggleGroupItem>
            <ToggleGroupItem value="videos" className="px-6">Videos</ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        <div className="md:hidden">
          <ScrollArea className="w-full whitespace-nowrap pb-4">
            <div className="flex gap-4 px-4 pb-4">
              {(activeView === "reviews" ? reviewCards : videoCards).map((card) => (
                <div key={card.id} className="w-[300px] flex-shrink-0">
                  {renderSocialCard(card)}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
        
        <div className="hidden md:grid grid-cols-2 gap-6">
          {(activeView === "reviews" ? reviewCards : videoCards).map((card) => (
            <div 
              key={card.id} 
              className={cn(
                "transition-all duration-300 hover:shadow-md",
              )}
            >
              {renderSocialCard(card)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorReviewSection;
