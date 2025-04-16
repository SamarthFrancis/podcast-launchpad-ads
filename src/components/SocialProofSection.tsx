
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Star } from 'lucide-react';

const SocialProofSection: React.FC = () => {
  const reviews = [
    {
      text: "This platform revolutionized our podcast reach. We went from 500 to 15,000 monthly listeners in just 8 weeks!",
      author: "Mike Johnson",
      role: "The Tech Insider Podcast"
    },
    {
      text: "I was spending 6 hours per week on distribution. Now it's 10 minutes. The ROI is incredible.",
      author: "Sarah Miller",
      role: "Business Growth Show"
    },
    {
      text: "The analytics alone are worth the price. Finally understanding our audience changed everything.",
      author: "David Chen",
      role: "History Untold"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="font-jakarta font-bold text-3xl md:text-4xl mb-12 text-center text-dark">
          Loved by Creators Worldwide
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16">
          {Array(8).fill(null).map((_, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-4 shadow-sm aspect-square flex items-center justify-center overflow-hidden"
            >
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-400">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="flex flex-col items-center">
            <div className="text-dark font-bold mb-2">Capterra</div>
            <div className="flex text-yellow-400">
              {Array(5).fill(null).map((_, i) => (
                <Star key={i} fill="currentColor" className="h-5 w-5" />
              ))}
              <span className="text-dark ml-2 font-medium">4.8</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-dark font-bold mb-2">GetApp</div>
            <div className="flex text-yellow-400">
              {Array(5).fill(null).map((_, i) => (
                <Star key={i} fill="currentColor" className="h-5 w-5" />
              ))}
              <span className="text-dark ml-2 font-medium">4.9</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-dark font-bold mb-2">G2</div>
            <div className="flex text-yellow-400">
              {Array(5).fill(null).map((_, i) => (
                <Star key={i} fill="currentColor" className="h-5 w-5" />
              ))}
              <span className="text-dark ml-2 font-medium">4.7</span>
            </div>
          </div>
        </div>
        
        <Carousel className="max-w-2xl mx-auto">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index}>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <p className="font-manrope text-lg mb-6 italic">"{review.text}"</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="font-jakarta font-medium">{review.author}</p>
                      <p className="text-gray text-sm">{review.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default SocialProofSection;
