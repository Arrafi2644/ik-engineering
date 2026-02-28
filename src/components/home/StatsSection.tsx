
import React, { useEffect, useRef, useState } from 'react';

const stats = [
  {
    value: '100+',
    label: 'Projects Completed'
  },
  {
    value: '20+',
    label: 'Years Experience'
  },
  {
    value: '50+',
    label: 'Skilled Workers'
  },
  {
    value: '24/7',
    label: 'Support Available'
  }
];

const StatsSection = () => {
  const [visibleStats, setVisibleStats] = useState<number[]>([]);
  const [counters, setCounters] = useState<Record<number, number>>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate stats one by one
          stats.forEach((_, index) => {
            setTimeout(() => {
              setVisibleStats(prev => [...prev, index]);
              
              // Start counter animation for numeric values
              const numericValue = parseInt(stats[index].value);
              if (!isNaN(numericValue)) {
                let current = 0;
                const increment = numericValue / 50;
                const timer = setInterval(() => {
                  current += increment;
                  if (current >= numericValue) {
                    current = numericValue;
                    clearInterval(timer);
                  }
                  setCounters(prev => ({ ...prev, [index]: Math.floor(current) }));
                }, 30);
              }
            }, index * 200);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-primary-blue py-12 border-b-4 border-accent-yellow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const isVisible = visibleStats.includes(index);
            const numericValue = parseInt(stat.value);
            const displayValue = !isNaN(numericValue) && counters[index] !== undefined 
              ? `${counters[index]}${stat.value.includes('+') ? '+' : ''}`
              : stat.value;

            return (
              <div 
                key={index} 
                className={`text-center transition-all duration-700 transform hover:scale-110 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl md:text-5xl font-montserrat font-bold text-accent-yellow mb-2 group-hover:text-accent-yellow/80 transition-colors duration-300">
                  {displayValue}
                </div>
                <div className="text-white font-open-sans group-hover:text-gray-200 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
