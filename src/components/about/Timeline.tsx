
import React, { useEffect, useRef, useState } from 'react';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const milestones = [
    {
      year: '2004',
      title: 'Company Founded',
      description: 'IK Engineering established as a small welding and fabrication workshop in Auckland, focusing on quality craftsmanship and customer service.'
    },
    {
      year: '2008',
      title: 'First Major Contract',
      description: 'Secured our first major industrial contract, marking the beginning of our expansion into large-scale project management and specialized services.'
    },
    {
      year: '2012',
      title: 'Safety Certification',
      description: 'Achieved comprehensive safety certifications and implemented zero-harm policies, establishing our reputation for industry-leading safety standards.'
    },
    {
      year: '2015',
      title: 'Equipment Fleet Expansion',
      description: 'Invested in state-of-the-art equipment and expanded our hire fleet to offer comprehensive machinery and operator services across New Zealand.'
    },
    {
      year: '2018',
      title: 'Team Growth',
      description: 'Grew to over 50 skilled professionals, establishing specialized teams for welding, fabrication, machine operation, and project supervision.'
    },
    {
      year: '2021',
      title: 'Digital Innovation',
      description: 'Implemented advanced project management systems and digital workflows to enhance efficiency and client communication capabilities.'
    },
    {
      year: '2024',
      title: 'Industry Leadership',
      description: 'Recognized as a leading provider of skilled labour services with over 200 successful projects and expanding into sustainable engineering solutions.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-blue mb-6 hover:text-primary-blue/80 transition-colors duration-300">
            Our <span className="text-accent-yellow hover:text-accent-yellow/80 transition-colors duration-300">Journey</span>
          </h2>
          <p className="text-xl font-open-sans text-secondary-grey max-w-2xl mx-auto">
            Two decades of growth, innovation, and excellence in skilled labour and project management.
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline line with progress animation */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-0.5">
            <div className="w-full bg-accent-yellow transition-all duration-2000 ease-out" style={{
              height: `${(visibleItems.length / milestones.length) * 100}%`
            }}></div>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                data-index={index}
                className={`timeline-item relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot with bounce animation */}
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 bg-accent-yellow rounded-full transform md:-translate-x-2 transition-all duration-500 hover:scale-150 ${
                  visibleItems.includes(index) ? 'scale-100 opacity-100 animate-pulse' : 'scale-0 opacity-0'
                }`}></div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`bg-light-grey rounded-xl p-6 shadow-lg transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 hover:bg-white group ${
                    visibleItems.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`} style={{ transitionDelay: `${index * 200}ms` }}>
                    <div className="text-3xl font-montserrat font-bold text-accent-yellow mb-2 group-hover:scale-110 transition-transform duration-300">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-montserrat font-semibold text-primary-blue mb-3 group-hover:text-accent-yellow transition-colors duration-300">
                      {milestone.title}
                    </h3>
                    <p className="font-open-sans text-secondary-grey leading-relaxed group-hover:text-dark-grey transition-colors duration-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
