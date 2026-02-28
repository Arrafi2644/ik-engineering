
import React from 'react';
import { CheckCircle } from 'lucide-react';

const BusinessProcess = () => {
  const processSteps = [
    {
      step: 1,
      title: 'Consultation',
      description: 'Comprehensive consultation to understand client needs and project requirements.'
    },
    {
      step: 2,
      title: 'Planning',
      description: 'Detailed planning and project scope definition with clear timelines.'
    },
    {
      step: 3,
      title: 'Engineering Design',
      description: 'Technical design and engineering solutions tailored to your specifications.'
    },
    {
      step: 4,
      title: 'Material Sourcing & Fabrication',
      description: 'Quality material sourcing and precision fabrication using advanced techniques.'
    },
    {
      step: 5,
      title: 'Installation & Quality Checks',
      description: 'Professional installation with comprehensive quality assurance protocols.'
    },
    {
      step: 6,
      title: 'Delivery & Support',
      description: 'Final delivery with ongoing support and maintenance services.'
    }
  ];

  return (
    <section className="py-16 bg-slate-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-blue mb-4">
            Business <span className="text-accent-yellow">Process</span>
          </h2>
          <div className="w-24 h-1 bg-accent-yellow mx-auto mb-6"></div>
          <p className="text-xl font-open-sans text-secondary-grey max-w-4xl mx-auto leading-relaxed">
            IK Engineering specializes in delivering high-quality mechanical, structural, and precision 
            engineering solutions. Our approach is built on client collaboration, technical excellence, 
            and efficiency. We begin with a comprehensive consultation to understand client needs, followed 
            by detailed planning, engineering design, material sourcing, fabrication, and final installation 
            or delivery. Each stage undergoes strict quality checks to ensure compliance with industry standards.
          </p>
        </div>

        {/* Desktop Modern Flow Layout */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Background Container with Subtle Gradient */}
            <div className="bg-gradient-to-r from-white via-slate-50/50 to-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200/30">
              
              {/* Top Row - Steps 1, 2, 3 */}
              <div className="relative mb-16">
                {/* Connecting Line */}
                <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-blue to-transparent hidden lg:block"></div>
                
                <div className="grid grid-cols-3 gap-8 relative">
                  {processSteps.slice(0, 3).map((process, index) => (
                    <div key={index} className="relative animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                      {/* Card */}
                      <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-primary-blue/20 relative overflow-hidden">
                        
                        {/* Top Accent Bar */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-blue to-accent-yellow"></div>
                        
                        {/* Content */}
                        <div className="pt-4">
                          {/* Step Number */}
                          <div className="flex justify-center mb-6">
                            <div className="relative">
                              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-blue/80 text-white rounded-full flex items-center justify-center font-montserrat font-bold text-xl shadow-lg group-hover:scale-110 group-hover:from-accent-yellow group-hover:to-accent-yellow/80 group-hover:text-primary-blue transition-all duration-300">
                                {process.step}
                              </div>
                              {/* Pulse Ring */}
                              <div className="absolute inset-0 bg-primary-blue/20 rounded-full animate-ping opacity-75 group-hover:bg-accent-yellow/30"></div>
                            </div>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-center text-lg font-montserrat font-bold text-primary-blue mb-4 group-hover:text-accent-yellow transition-colors duration-300">
                            {process.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-center font-open-sans text-secondary-grey text-sm leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                            {process.description}
                          </p>
                        </div>
                        
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-accent-yellow/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Arrow Connector (except last card) */}
                      {index < 2 && (
                        <div className="absolute top-20 -right-4 w-8 h-8 hidden lg:flex items-center justify-center">
                          <div className="w-6 h-6 bg-primary-blue text-white rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom Row - Steps 4, 5, 6 */}
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-yellow to-transparent hidden lg:block"></div>
                
                <div className="grid grid-cols-3 gap-8 relative">
                  {processSteps.slice(3, 6).map((process, index) => (
                    <div key={index + 3} className="relative animate-fade-in" style={{animationDelay: `${(index + 3) * 0.2}s`}}>
                      {/* Card */}
                      <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-accent-yellow/20 relative overflow-hidden">
                        
                        {/* Top Accent Bar */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-yellow to-primary-blue"></div>
                        
                        {/* Content */}
                        <div className="pt-4">
                          {/* Step Number */}
                          <div className="flex justify-center mb-6">
                            <div className="relative">
                              <div className="w-16 h-16 bg-gradient-to-br from-accent-yellow to-accent-yellow/80 text-primary-blue rounded-full flex items-center justify-center font-montserrat font-bold text-xl shadow-lg group-hover:scale-110 group-hover:from-primary-blue group-hover:to-primary-blue/80 group-hover:text-white transition-all duration-300">
                                {process.step}
                              </div>
                              {/* Pulse Ring */}
                              <div className="absolute inset-0 bg-accent-yellow/20 rounded-full animate-ping opacity-75 group-hover:bg-primary-blue/30"></div>
                            </div>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-center text-lg font-montserrat font-bold text-primary-blue mb-4 group-hover:text-accent-yellow transition-colors duration-300">
                            {process.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-center font-open-sans text-secondary-grey text-sm leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                            {process.description}
                          </p>
                        </div>
                        
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/5 to-primary-blue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Arrow Connector (except last card) */}
                      {index < 2 && (
                        <div className="absolute top-20 -right-4 w-8 h-8 hidden lg:flex items-center justify-center">
                          <div className="w-6 h-6 bg-accent-yellow text-primary-blue rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Central Connector Between Rows */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                <div className="w-8 h-16 bg-gradient-to-b from-primary-blue to-accent-yellow rounded-full shadow-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Single-Column Layout */}
        <div className="md:hidden bg-gradient-to-br from-white to-slate-50 rounded-3xl p-6 shadow-xl border border-slate-200/50">
          <div className="space-y-6">
            {processSteps.map((process, index) => (
              <div key={index} className="relative animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Card */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 relative overflow-hidden">
                  {/* Background accent */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary-blue to-accent-yellow"></div>
                  
                  <div className="flex items-start space-x-5 mt-3">
                    {/* Circle */}
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-blue to-primary-blue/80 text-white rounded-full flex items-center justify-center font-montserrat font-bold text-lg flex-shrink-0 shadow-xl">
                      {process.step}
                    </div>
                    
                    <div className="flex-1 pt-1">
                      {/* Title */}
                      <h3 className="text-lg font-montserrat font-bold text-primary-blue mb-3 leading-tight">
                        {process.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="font-open-sans text-secondary-grey leading-relaxed text-base">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary-blue/5 rounded-2xl p-6 text-center mt-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="h-6 w-6 text-accent-yellow mr-3" />
            <h3 className="text-2xl font-montserrat font-semibold text-primary-blue">
              Quality Assurance at Every Stage
            </h3>
          </div>
          <p className="text-lg font-open-sans text-secondary-grey max-w-3xl mx-auto">
            Each stage undergoes strict quality checks to ensure compliance with industry standards, 
            delivering exceptional results that exceed client expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessProcess;
