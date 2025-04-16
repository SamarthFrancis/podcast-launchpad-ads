
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Star } from 'lucide-react';

const SocialProofSection: React.FC = () => {
  const logos = [
    { name: "Meta", textLogo: true },
    { name: "Audible", textLogo: true },
    { name: "Himalay's", textLogo: true },
    { name: "Ashiana", textLogo: true },
    { name: "ANI News", textLogo: true },
    { name: "Juggernaut", textLogo: true },
    { name: "The Life Saver Show", textLogo: false },
    { name: "BBC", textLogo: true },
    { name: "The Money Wise Podcast", textLogo: false },
    { name: "Radio City", textLogo: true },
    { name: "The Smiling Souls", textLogo: false },
    { name: "Rosewood", textLogo: true }
  ];

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
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-jakarta font-bold text-3xl md:text-4xl mb-3 text-[#4F46E5]">
            Loved by Creators Worldwide
          </h2>
          <p className="font-manrope text-lg text-[#4B5563] max-w-2xl mx-auto">
            From global giants to indie voices — thousands of creators trust us to get their podcast heard.
          </p>
          <p className="font-manrope text-lg text-[#4B5563] mt-4">
            Trusted by over 30,000+ creators and brands
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-4 shadow-sm aspect-square flex items-center justify-center overflow-hidden transition-all hover:shadow-md border border-gray-100"
            >
              {logo.textLogo ? (
                <div className="text-lg md:text-xl font-bold text-[#111827]">{logo.name}</div>
              ) : (
                <div className="text-sm md:text-base font-medium text-center text-[#4B5563]">{logo.name}</div>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="flex flex-col items-center">
            <div className="text-[#111827] font-bold mb-2">Capterra</div>
            <div className="flex text-[#4F46E5]">
              {Array(5).fill(null).map((_, i) => (
                <Star key={i} fill="currentColor" size={20} className={i === 4 ? "text-[#4F46E5]/40" : ""} />
              ))}
              <span className="text-[#111827] ml-2 font-medium">4.8</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-[#111827] font-bold mb-2">GetApp</div>
            <div className="flex text-[#4F46E5]">
              {Array(5).fill(null).map((_, i) => (
                <Star key={i} fill="currentColor" size={20} />
              ))}
              <span className="text-[#111827] ml-2 font-medium">4.9</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-[#111827] font-bold mb-2">G2</div>
            <div className="flex text-[#4F46E5]">
              {Array(5).fill(null).map((_, i) => (
                <Star key={i} fill="currentColor" size={20} />
              ))}
              <span className="text-[#111827] ml-2 font-medium">4.7</span>
            </div>
          </div>
        </div>
        
        <div className="relative max-w-2xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index}>
                  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <p className="font-manrope text-lg mb-6 italic text-[#4B5563]">"{review.text}"</p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-[#4F46E5]/10 mr-3 flex items-center justify-center font-bold text-[#4F46E5]">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-jakarta font-medium text-[#111827]">{review.author}</p>
                        <p className="text-[#4B5563] text-sm">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static transform-none mx-1 rounded-full h-8 w-8 bg-white text-[#4F46E5] border-[#4F46E5] hover:bg-[#4F46E5]/5" />
              <CarouselNext className="static transform-none mx-1 rounded-full h-8 w-8 bg-white text-[#4F46E5] border-[#4F46E5] hover:bg-[#4F46E5]/5" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
