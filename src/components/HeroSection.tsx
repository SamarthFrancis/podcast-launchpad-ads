
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-jakarta font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark">
            Publish Once. <span className="text-primary">Distribute Everywhere.</span>
          </h1>
          <p className="font-manrope text-xl text-gray mb-8">
            Start your podcast. Reach millions. No tech stress.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-lg text-lg transition-all transform hover:scale-105"
          >
            Start Your Free Trial
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
