
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const CareerHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[70vh] py-16 sm:py-0 flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
          alt="Engineer working with advanced robotics and computer technology"
          className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 to-primary-blue/40 transition-opacity duration-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 transition-all duration-1200 delay-200">
              Join Our <span className="text-accent-yellow hover:text-accent-yellow/80 transition-colors duration-300">Team</span>
            </h1>
            <p className={`text-xl font-open-sans mb-8 leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Build your career with New Zealand's leading provider of skilled labour and
              project management services. We offer competitive benefits, ongoing training,
              and opportunities for professional growth in a safety-first environment.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <Button
                size="lg"
                className="bg-accent-yellow hover:bg-accent-yellow/90 text-primary-blue font-semibold group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById('job-application-trigger')?.click()}
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Stats card */}
          <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-500 hover:bg-white/15 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`} style={{ transitionDelay: '800ms' }}>
            <h3 className="text-2xl font-montserrat font-bold mb-6">Why Work With Us?</h3>
            <div className="space-y-4">
              {[
                { label: 'Team Members', value: '50+' },
                { label: 'Training Hours/Year', value: '1000+' },
                { label: 'Safety Record', value: 'Zero Harm' },
                { label: 'Employee Retention', value: '95%' }
              ].map((stat, index) => (
                <div key={stat.label} className={`flex justify-between items-center group hover:translate-x-2 transition-all duration-300 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`} style={{ transitionDelay: `${1000 + index * 100}ms` }}>
                  <span className="font-open-sans group-hover:text-accent-yellow transition-colors duration-300">{stat.label}</span>
                  <span className="text-2xl font-montserrat font-bold text-accent-yellow group-hover:scale-110 transition-transform duration-300">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
