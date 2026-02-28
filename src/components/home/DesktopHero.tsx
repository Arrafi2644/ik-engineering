
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { HeroSlideIndicators } from './HeroSlideIndicators';
import { ScrollIndicator } from './ScrollIndicator';
import { heroSlides } from './heroData';
import { useNavigate } from 'react-router-dom';

const DesktopHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  // Auto-rotate slides
  useEffect(() => {
    // Set loaded state after initial render
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-screen background slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1500 ${
              currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ 
              backgroundImage: `url(${slide})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
        
        {/* Gradient overlay - desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent transition-opacity duration-1000"></div>
      </div>

      {/* Content container - desktop */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-lg transition-all duration-1200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-4 leading-tight text-left transition-all duration-1500 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`} style={{ transitionDelay: '300ms' }}>
            Engineering & Skilled Labour Solutions Across New Zealand
          </h1>
          <h2 className={`text-lg md:text-xl lg:text-2xl font-montserrat font-medium text-accent-yellow mb-8 text-left transition-all duration-1200 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
          }`} style={{ transitionDelay: '600ms' }}>
            Welders, Fabricators, Machine Operators & Project Supervisors
          </h2>
          
          {/* Description with responsive constraints - full description for desktop */}
          <div className={`max-w-md lg:max-w-lg break-words mb-10 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '900ms' }}>
            <p className="text-base md:text-lg font-open-sans text-gray-200 leading-relaxed text-left">
              Full project delivery from design to installation with over 20 years of industry expertise in New Zealand.
            </p>
          </div>

          {/* Button container with proper spacing and responsive layout */}
          <div className={`flex flex-row space-x-3 mt-8 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`} style={{ transitionDelay: '1200ms' }}>
            <Button 
              size="default"
              className="bg-accent-yellow hover:bg-accent-yellow/90 text-primary-blue font-semibold px-6 py-3 text-sm uppercase tracking-wider w-auto text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => navigate('/contact')}
            >
              REQUEST QUOTE
            </Button>
            
            <Button 
              variant="outline" 
              size="default"
              className="border-white text-white bg-transparent hover:bg-white/10 hover:text-white px-6 py-3 text-sm uppercase tracking-wider w-auto text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              onClick={() => navigate('/services')}
            >
              OUR SERVICES
            </Button>
          </div>
        </div>
      </div>

      {/* Image Carousel Slide Indicators - desktop */}
      <div className={`transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} style={{ transitionDelay: '1500ms' }}>
        <HeroSlideIndicators 
          slides={heroSlides} 
          currentSlide={currentSlide} 
          setCurrentSlide={setCurrentSlide} 
        />
      </div>

      {/* Scroll indicator - desktop */}
      <div className={`transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} style={{ transitionDelay: '1800ms' }}>
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default DesktopHero;
