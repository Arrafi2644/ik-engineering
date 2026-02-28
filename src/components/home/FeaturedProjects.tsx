import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const FeaturedProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'Structural Steel for Commercial Building Extension',
      category: 'Commercial Construction',
      description: 'Engineered, fabricated, and erected steel structures for a warehouse expansion. Achieved full compliance with local council regulations.',
      image: 'https://borxtnmxkmisnyjzrqlm.supabase.co/storage/v1/object/public/krheroslide/porfolio%20kr2.jpg',
      stats: { duration: '6 months', team: '15 workers', value: '$1.8M' }
    },
    {
      title: 'Machine Rebuild for Forestry Client',
      category: 'Forestry',
      description: 'Rebuilt and upgraded a 15-year-old log processor. Enhanced hydraulics, replaced key components, and improved operational efficiency.',
      image: 'https://borxtnmxkmisnyjzrqlm.supabase.co/storage/v1/object/public/krheroslide/Machine%20Rebuild%20for%20Forestry%20portfolio.jpg',
      stats: { duration: '4 months', team: '12 workers', value: '$1.2M' }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-blue mb-6 hover:text-primary-blue/80 transition-colors duration-300">
            Featured <span className="text-accent-yellow hover:text-accent-yellow/80 transition-colors duration-300">Projects</span>
          </h2>
          <p className="text-xl font-open-sans text-secondary-grey max-w-3xl mx-auto">
            Showcasing our expertise through successful project deliveries across diverse industries 
            throughout New Zealand.
          </p>
        </div>

        <div className="relative">
          {/* Main project display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project image */}
            <div className={`relative overflow-hidden rounded-2xl shadow-2xl group transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <img 
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/60 to-transparent group-hover:from-primary-blue/80 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white transform group-hover:translate-y-0 transition-transform duration-300">
                <span className="bg-accent-yellow px-3 py-1 rounded-full text-sm font-semibold text-primary-blue hover:bg-accent-yellow/90 transition-colors duration-300">
                  {projects[currentProject].category}
                </span>
              </div>
            </div>

            {/* Project details */}
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`} style={{ transitionDelay: '300ms' }}>
              <h3 className="text-3xl font-montserrat font-bold text-primary-blue mb-4 hover:text-accent-yellow transition-colors duration-300">
                {projects[currentProject].title}
              </h3>
              <p className="text-lg font-open-sans text-secondary-grey mb-8 leading-relaxed hover:text-dark-grey transition-colors duration-300">
                {projects[currentProject].description}
              </p>

              {/* Project stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {Object.entries(projects[currentProject].stats).map(([key, value], index) => (
                  <div key={key} className={`text-center p-4 bg-light-grey rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`} style={{ transitionDelay: `${600 + index * 100}ms` }}>
                    <div className="text-2xl font-montserrat font-bold text-accent-yellow mb-1 hover:scale-110 transition-transform duration-300">
                      {value}
                    </div>
                    <div className="text-sm font-open-sans text-secondary-grey capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Navigation */}
          <div className={`flex justify-center items-center mt-12 space-x-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '1200ms' }}>
            <button
              onClick={prevProject}
              className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center hover:bg-accent-yellow hover:text-primary-blue transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    index === currentProject ? 'bg-accent-yellow shadow-lg' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center hover:bg-accent-yellow hover:text-primary-blue transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
