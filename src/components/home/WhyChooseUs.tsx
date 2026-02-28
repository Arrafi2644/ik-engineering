
import React, { useEffect, useRef, useState } from 'react';
import { Settings, Award, Shield, Users, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [visibleStats, setVisibleStats] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const reasons = [
    {
      icon: Settings,
      title: 'End-to-End Project Capability',
      description: 'Complete project delivery from initial design through fabrication to final installation and commissioning.'
    },
    {
      icon: Award,
      title: 'ISO 9001 Certified Quality Systems',
      description: 'Internationally recognized quality management standards ensuring consistent excellence in all project deliverables.'
    },
    {
      icon: Shield,
      title: 'Proven Safety Record',
      description: 'Maintaining zero safety incidents with comprehensive safety protocols and ongoing training programs.'
    },
    {
      icon: Users,
      title: 'Experienced Leadership & Skilled Workforce',
      description: 'Industry-leading expertise with over 50 skilled professionals and experienced project management teams.'
    },
    {
      icon: Clock,
      title: 'Reliable On-Time Delivery',
      description: 'Proven track record of meeting project deadlines while maintaining the highest quality standards.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            if (element.classList.contains('reason-card')) {
              const index = parseInt(element.getAttribute('data-index') || '0');
              setTimeout(() => {
                setVisibleItems(prev => [...new Set([...prev, index])]);
              }, index * 150);
            } else if (element.classList.contains('stats-banner')) {
              setTimeout(() => setVisibleStats(true), 500);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.reason-card, .stats-banner');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-primary-blue relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-accent-yellow rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-accent-yellow rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-accent-yellow rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6 hover:text-gray-200 transition-colors duration-300">
            Why Choose <span className="text-accent-yellow hover:text-accent-yellow/80 transition-colors duration-300">IK Engineering</span>
          </h2>
          <p className="text-xl font-open-sans text-gray-300 max-w-3xl mx-auto">
            We are the leaders in our industry, delivering exceptional results through 
            innovation, expertise, and unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            const isVisible = visibleItems.includes(index);
            return (
              <div 
                key={index}
                data-index={index}
                className={`reason-card text-center group transition-all duration-700 hover:transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="w-20 h-20 bg-accent-yellow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                  <IconComponent className="h-10 w-10 text-primary-blue group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-white mb-4 group-hover:text-accent-yellow transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="font-open-sans text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats banner with staggered animation */}
        <div className={`stats-banner mt-20 bg-accent-yellow/10 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:bg-accent-yellow/15 ${
          visibleStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '98%', label: 'Client Satisfaction' },
              { value: '0', label: 'Safety Incidents' },
              { value: '15', label: 'Industry Awards' },
              { value: '100%', label: 'Project Success Rate' }
            ].map((stat, index) => (
              <div key={stat.label} className={`transition-all duration-500 hover:scale-110 ${
                visibleStats ? 'opacity-100' : 'opacity-0'
              }`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="text-4xl font-montserrat font-bold text-accent-yellow mb-2 hover:text-accent-yellow/80 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-white font-open-sans hover:text-gray-200 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
