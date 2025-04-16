
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const SocialProofSection: React.FC = () => {
  const reviews = [
    {
      text: "The best podcast platform I've used. It made distribution so easy!",
      author: "Mike Johnson",
      role: "Tech Podcast Host"
    },
    {
      text: "We saw our listenership grow by 300% after switching to this platform.",
      author: "Sarah Miller",
      role: "Business Podcaster"
    },
    {
      text: "The analytics are incredible. Finally I understand my audience.",
      author: "David Chen",
      role: "Education Podcast"
    }
  ];

  const podcasts = Array(8).fill("Podcast");

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="font-jakarta font-bold text-3xl md:text-4xl mb-12 text-center text-dark">
          Creators Who Trust Us
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16">
          {podcasts.map((podcast, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm flex items-center justify-center h-28"
            >
              <span className="font-medium text-gray">{podcast} {index + 1}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-8">
          <div className="flex justify-center space-x-8 mb-4">
            <div className="text-dark font-bold">Capterra</div>
            <div className="text-dark font-bold">GetApp</div>
            <div className="text-dark font-bold">G2</div>
          </div>
          <div className="flex justify-center mb-4">
            <div className="flex text-yellow-400 text-2xl">
              ★★★★★ <span className="text-dark ml-2">4.9/5</span>
            </div>
          </div>
        </div>
        
        <Carousel className="max-w-2xl mx-auto">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index}>
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="font-manrope text-lg mb-4">{review.text}</p>
                  <p className="font-jakarta font-medium">{review.author}</p>
                  <p className="text-gray">{review.role}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative static mr-2" />
            <CarouselNext className="relative static ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default SocialProofSection;
