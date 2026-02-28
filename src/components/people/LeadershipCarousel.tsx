
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Mail } from 'lucide-react';

const LeadershipCarousel = () => {
  const [currentLeader, setCurrentLeader] = useState(0);

  const leaders = [
    {
      name: 'Kevin Richards',
      role: 'Chief Executive Officer',
      bio: 'Kevin founded IK Engineering in 2004 with a vision to provide exceptional skilled labour services while prioritizing safety and quality. With over 25 years in the engineering and construction industry, he has led the company through significant growth and expansion across New Zealand.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      achievements: ['Founded IK Engineering in 2004', 'Grew company to 50+ employees', 'Achieved zero safety incidents record'],
      linkedin: '#',
      email: 'kevin@ikengineering.co.nz'
    },
    {
      name: 'Sarah Mitchell',
      role: 'General Manager',
      bio: 'Sarah brings 15 years of project management expertise to IK Engineering, ensuring every project is delivered on time and to specification. Her strategic leadership has been instrumental in maintaining our 98% client satisfaction rate and expanding our service offerings.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c',
      achievements: ['15+ years project management experience', 'Achieved 98% client satisfaction rate', 'Led digital transformation initiatives'],
      linkedin: '#',
      email: 'sarah@ikengineering.co.nz'
    }
  ];

  const nextLeader = () => {
    setCurrentLeader((prev) => (prev + 1) % leaders.length);
  };

  const prevLeader = () => {
    setCurrentLeader((prev) => (prev - 1 + leaders.length) % leaders.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-blue mb-6">
            Leadership <span className="text-accent-yellow">Team</span>
          </h2>
          <p className="text-xl font-open-sans text-secondary-grey max-w-3xl mx-auto">
            Meet the experienced professionals who guide IK Engineering's vision and strategy.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Leader image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={leaders[currentLeader].image}
                  alt={leaders[currentLeader].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-yellow/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-blue/10 rounded-full -z-10"></div>
            </div>

            {/* Leader details */}
            <div className="animate-fade-in">
              <h3 className="text-3xl font-montserrat font-bold text-primary-blue mb-2">
                {leaders[currentLeader].name}
              </h3>
              <p className="text-xl font-open-sans text-accent-yellow mb-6">
                {leaders[currentLeader].role}
              </p>
              
              <p className="font-open-sans text-secondary-grey text-lg leading-relaxed mb-8">
                {leaders[currentLeader].bio}
              </p>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className="font-montserrat font-semibold text-primary-blue mb-4">Key Achievements:</h4>
                <ul className="space-y-2">
                  {leaders[currentLeader].achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center font-open-sans text-secondary-grey">
                      <div className="w-2 h-2 bg-accent-yellow rounded-full mr-3"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact links */}
              <div className="flex space-x-4">
                <a
                  href={leaders[currentLeader].linkedin}
                  className="flex items-center justify-center w-12 h-12 bg-primary-blue text-white rounded-full hover:bg-accent-yellow hover:text-primary-blue transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${leaders[currentLeader].email}`}
                  className="flex items-center justify-center w-12 h-12 bg-primary-blue text-white rounded-full hover:bg-accent-yellow hover:text-primary-blue transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={prevLeader}
              className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center hover:bg-accent-yellow hover:text-primary-blue transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex space-x-2">
              {leaders.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentLeader(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentLeader ? 'bg-accent-yellow' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextLeader}
              className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center hover:bg-accent-yellow hover:text-primary-blue transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipCarousel;
