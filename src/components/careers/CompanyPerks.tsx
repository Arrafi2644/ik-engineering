
import React, { useEffect, useRef, useState } from 'react';
import { DollarSign, Clock, Heart, GraduationCap, Shield, Users } from 'lucide-react';

const CompanyPerks = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const perks = [
    {
      icon: DollarSign,
      title: 'Competitive Pay',
      description: 'Industry-leading wages with performance bonuses and annual reviews',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Work-life balance with flexible scheduling and time-off policies',
      color: 'text-blue-600'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and employee assistance programs',
      color: 'text-red-600'
    },
    {
      icon: GraduationCap,
      title: 'Training & Development',
      description: 'Ongoing professional development and skills training opportunities',
      color: 'text-purple-600'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Industry-leading safety protocols and protective equipment provided',
      color: 'text-accent-yellow'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with team events and recognition programs',
      color: 'text-indigo-600'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.perk-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-blue mb-6 hover:text-primary-blue/80 transition-colors duration-300">
            Employee <span className="text-accent-yellow hover:text-accent-yellow/80 transition-colors duration-300">Benefits</span>
          </h2>
          <p className="text-xl font-open-sans text-secondary-grey max-w-3xl mx-auto">
            We believe in taking care of our team members with comprehensive benefits
            that support both professional growth and personal well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perks.map((perk, index) => {
            const IconComponent = perk.icon;
            const isVisible = visibleCards.includes(index);
            return (
              <div
                key={index}
                data-index={index}
                className={`perk-card bg-light-grey rounded-xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-3 hover:bg-white border border-transparent hover:border-accent-yellow/20 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${perk.color} group-hover:scale-125 transition-all duration-500 group-hover:rotate-12`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-montserrat font-semibold text-primary-blue mb-3 group-hover:text-accent-yellow transition-colors duration-300">
                      {perk.title}
                    </h3>
                    <p className="font-open-sans text-secondary-grey leading-relaxed group-hover:text-dark-grey transition-colors duration-300">
                      {perk.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-primary-blue rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <h3 className="text-3xl font-montserrat font-bold mb-4 hover:text-accent-yellow transition-colors duration-300">
              Ready to Start Your Career Journey?
            </h3>
            <p className="text-lg font-open-sans text-gray-300 mb-6 max-w-2xl mx-auto">
              Join a team that values safety, innovation, and professional growth.
              Explore our current openings and take the next step in your career.
            </p>
            <button
              className="bg-accent-yellow hover:bg-accent-yellow/90 text-primary-blue font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              onClick={() => document.getElementById('job-application-trigger')?.click()}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyPerks;
