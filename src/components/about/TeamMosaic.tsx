
import React, { useState } from 'react';

const TeamMosaic = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: 'Kevin Richards',
      role: 'Founder & CEO',
      bio: 'With over 25 years in the industry, Kevin founded IK Engineering with a vision to provide exceptional skilled labour services while prioritizing safety and quality.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      gridClass: 'row-span-2'
    },
    {
      name: 'Sarah Mitchell',
      role: 'General Manager',
      bio: 'Sarah brings 15 years of project management expertise, ensuring every project is delivered on time and to specification.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c',
      gridClass: ''
    },
    {
      name: 'Mike Thompson',
      role: 'Head of Safety',
      bio: 'Former safety inspector with 20 years experience, Mike has implemented our zero-harm safety culture across all operations.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      gridClass: ''
    },
    {
      name: 'Emma Wilson',
      role: 'Operations Director',
      bio: 'Emma oversees daily operations and workforce coordination, ensuring seamless project execution across all sites.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      gridClass: 'col-span-2'
    },
    {
      name: 'David Chen',
      role: 'Technical Manager',
      bio: 'Engineering graduate specializing in innovative solutions and quality assurance for complex industrial projects.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      gridClass: ''
    },
    {
      name: 'Lisa Anderson',
      role: 'Client Relations',
      bio: 'Lisa manages client relationships and ensures exceptional service delivery, maintaining our 98% client satisfaction rate.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      gridClass: ''
    }
  ];

  return (
    <section className="py-20 bg-primary-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Meet Our <span className="text-accent-yellow">Leadership Team</span>
          </h2>
          <p className="text-xl font-open-sans text-gray-300 max-w-3xl mx-auto">
            Experienced professionals leading IK Engineering with passion, expertise, and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${member.gridClass}`}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="aspect-square relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-primary-blue via-primary-blue/60 to-transparent transition-opacity duration-300 ${
                  hoveredMember === index ? 'opacity-90' : 'opacity-70'
                }`}></div>

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                  <h3 className="font-montserrat font-semibold text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent-yellow font-open-sans text-sm mb-2">
                    {member.role}
                  </p>
                  
                  {hoveredMember === index && (
                    <p className="font-open-sans text-xs leading-relaxed animate-fade-in">
                      {member.bio}
                    </p>
                  )}
                </div>

                {/* Hover indicator */}
                <div className={`absolute top-4 right-4 w-3 h-3 bg-accent-yellow rounded-full transition-all duration-300 ${
                  hoveredMember === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-accent-yellow/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
              Join Our Team
            </h3>
            <p className="font-open-sans text-gray-300 mb-6">
              We're always looking for talented professionals to join our growing team.
            </p>
            <a 
              href="/careers" 
              className="inline-block bg-accent-yellow hover:bg-accent-yellow/90 text-primary-blue font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMosaic;
