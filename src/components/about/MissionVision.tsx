
import React, { useState } from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const MissionVision = () => {
  const [activeCard, setActiveCard] = useState(0);

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      content: 'To deliver exceptional skilled labour and project management services that exceed client expectations while maintaining the highest standards of safety, quality, and professionalism in everything we do.',
      background: 'bg-gradient-to-br from-primary-blue to-primary-blue/80'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      content: 'To be New Zealand\'s most trusted and innovative provider of industrial services, leading the industry in safety excellence, technological advancement, and sustainable practices.',
      background: 'bg-gradient-to-br from-accent-yellow to-accent-yellow/80'
    },
    {
      icon: Heart,
      title: 'Our Values',
      content: 'Safety first, integrity always, excellence in execution, innovation in solutions, and building lasting partnerships with our clients, communities, and team members.',
      background: 'bg-gradient-to-br from-secondary-grey to-dark-grey'
    }
  ];

  return (
    <section className="py-20 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-blue mb-6">
            Mission, Vision & <span className="text-accent-yellow">Values</span>
          </h2>
          <p className="text-xl font-open-sans text-secondary-grey max-w-3xl mx-auto">
            Our core principles guide every decision we make and every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                  activeCard === index ? 'ring-4 ring-accent-yellow' : ''
                }`}
                onMouseEnter={() => setActiveCard(index)}
              >
                <div className={`${value.background} p-8 text-white min-h-[400px] flex flex-col`}>
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-montserrat font-bold mb-4">
                      {value.title}
                    </h3>
                  </div>
                  
                  <p className="font-open-sans text-lg leading-relaxed flex-1">
                    {value.content}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
