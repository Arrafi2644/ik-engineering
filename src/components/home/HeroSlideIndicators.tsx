
import React from 'react';

interface HeroSlideIndicatorsProps {
  slides: string[];
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}

export const HeroSlideIndicators = ({ 
  slides, 
  currentSlide, 
  setCurrentSlide 
}: HeroSlideIndicatorsProps) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex">
      <div className="flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-orange' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
