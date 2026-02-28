
import React from 'react';

const PeopleHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background video placeholder */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070"
          alt="Our team at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-blue via-primary-blue/60 to-transparent"></div>

        {/* Animated overlay elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-accent-yellow/30 rounded-full animate-float"></div>
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 border border-accent-yellow/20 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 animate-fade-in">
          Our <span className="text-accent-yellow">People</span>
        </h1>
        <p className="text-xl md:text-2xl font-open-sans max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
          The heart of IK Engineering lies in our exceptional team of skilled professionals.
          From experienced welders to innovative project managers, our people drive excellence
          in every project we undertake.
        </p>

        {/* Team stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 animate-scale-in" style={{animationDelay: '0.6s'}}>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-montserrat font-bold text-accent-yellow mb-2">50+</div>
            <div className="font-open-sans text-gray-300">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-montserrat font-bold text-accent-yellow mb-2">25</div>
            <div className="font-open-sans text-gray-300">Certified Welders</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-montserrat font-bold text-accent-yellow mb-2">15</div>
            <div className="font-open-sans text-gray-300">Machine Operators</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-montserrat font-bold text-accent-yellow mb-2">95%</div>
            <div className="font-open-sans text-gray-300">Retention Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleHero;
