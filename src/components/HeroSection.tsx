
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-24 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-jakarta font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark">
            Publish Once. <span className="text-primary">Distribute Everywhere.</span>
          </h1>
          <p className="font-manrope text-xl text-gray mb-10">
            Your podcast. On every platform. No tech stress.
          </p>
          <div className="relative mb-8">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="animate-ping bg-primary/20 rounded-full h-24 w-24"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-primary/10 rounded-full p-6">
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i} 
                      className="bg-primary w-1.5 h-8 rounded-full animate-pulse" 
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link 
            to="/" 
            className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-10 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Start Your Free Trial
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
