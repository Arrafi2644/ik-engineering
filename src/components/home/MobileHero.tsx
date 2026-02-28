
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const MobileHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[50vh] flex flex-col bg-primary-blue pb-6 overflow-hidden">
      {/* Mobile version - Content only, no carousel */}
      {/* Text content container with branded blue overlay - mobile */}
      <div className="relative z-10 w-full px-4 pt-8 pb-2 flex flex-col justify-center">
        <div className="w-full">
          <h1 className={`text-2xl font-montserrat font-bold text-white mb-3 leading-tight transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Engineering & Skilled Labour Solutions Across New Zealand
          </h1>
          <h2 className={`text-lg font-montserrat font-medium text-accent-yellow mb-6 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '200ms' }}>
            Welders, Fabricators, Machine Operators & Project Supervisors
          </h2>
          
          <div className={`w-full mb-8 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '400ms' }}>
            <p className="text-sm font-open-sans text-gray-200 leading-relaxed">
              Full project delivery from design to installation with over 20 years of industry expertise in New Zealand.
            </p>
          </div>

          {/* Button container - mobile */}
          <div className={`flex flex-row space-x-2 mt-6 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '600ms' }}>
            <Button 
              size="sm"
              className="bg-accent-yellow hover:bg-accent-yellow/90 text-primary-blue font-semibold px-4 py-2 text-sm uppercase tracking-wider w-auto text-center transform hover:scale-105 transition-all duration-300 active:scale-95"
              onClick={() => navigate('/contact')}
            >
              REQUEST QUOTE
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              className="border-white text-white bg-transparent hover:bg-white/10 hover:text-white px-4 py-2 text-sm uppercase tracking-wider w-auto text-center transform hover:scale-105 transition-all duration-300 active:scale-95"
              onClick={() => navigate('/services')}
            >
              OUR SERVICES
            </Button>
          </div>
        </div>
      </div>

      {/* Floating background elements for visual interest */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-20 h-20 border border-accent-yellow rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-8 w-16 h-16 border border-accent-yellow rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-4 w-12 h-12 border border-accent-yellow rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default MobileHero;
