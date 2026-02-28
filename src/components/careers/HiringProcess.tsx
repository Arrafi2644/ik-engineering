
import React, { useEffect, useRef, useState } from 'react';
import { FileText, Phone, Users, CheckCircle } from 'lucide-react';

const HiringProcess = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Complete our online application form and upload your CV and relevant certifications.'
    },
    {
      icon: Phone,
      title: 'Initial Screening',
      description: 'Our HR team will review your application and conduct an initial phone screening.'
    },
    {
      icon: Users,
      title: 'Interview Process',
      description: 'Meet with our team leads and managers to discuss your experience and career goals.'
    },
    {
      icon: CheckCircle,
      title: 'Welcome Aboard',
      description: 'Complete onboarding, safety training, and begin your journey with IK Engineering.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleSteps(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const stepElements = sectionRef.current?.querySelectorAll('.process-step');
    stepElements?.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-blue mb-6">
            Our Hiring <span className="text-accent-yellow">Process</span>
          </h2>
          <p className="text-xl font-open-sans text-secondary-grey max-w-3xl mx-auto">
            We've streamlined our hiring process to be efficient and transparent,
            ensuring you know what to expect every step of the way.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line with animation */}
          <div className="hidden lg:block absolute top-[50px] left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-0.5">
            <div className="h-full bg-accent-yellow transform origin-left transition-transform duration-2000 scale-x-0 animate-[scale-x-100_2s_ease-out_1s_forwards]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isVisible = visibleSteps.includes(index);
              return (
                <div key={index} data-index={index} className={`process-step relative text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: `${index * 200}ms` }}>
                  {/* Step number with pulse animation */}
                  <div className={`mt-4 inline-flex items-center justify-center w-16 h-16 bg-accent-yellow text-primary-blue font-montserrat font-bold text-xl rounded-full mb-6 relative z-10 transform hover:scale-110 transition-all duration-300 ${
                    isVisible ? 'animate-pulse' : ''
                  }`}>
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 hover:scale-110 transition-all duration-300 hover:bg-accent-yellow hover:text-primary-blue">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-montserrat font-semibold text-primary-blue mb-3 hover:text-accent-yellow transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-open-sans text-secondary-grey leading-relaxed hover:text-dark-grey transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Arrow (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className={`hidden lg:block absolute top-8 left-full w-full transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`} style={{ transitionDelay: `${(index + 1) * 200}ms` }}>
                      <div className="w-8 h-8 border-t-2 border-r-2 border-accent-yellow transform rotate-45 bg-light-grey ml-4 hover:scale-110 transition-transform duration-300"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional info with staggered animation */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-montserrat font-bold text-primary-blue mb-4 hover:text-accent-yellow transition-colors duration-300">
                What We Look For
              </h3>
              <ul className="space-y-3 font-open-sans text-secondary-grey">
                {[
                  'Relevant industry experience and certifications',
                  'Strong commitment to safety and quality',
                  'Team collaboration and communication skills',
                  'Willingness to learn and grow professionally'
                ].map((item, index) => (
                  <li key={index} className={`flex items-center hover:translate-x-2 transition-all duration-300 animate-fade-in`}
                      style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="w-2 h-2 bg-accent-yellow rounded-full mr-3 hover:scale-150 transition-transform duration-300"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-montserrat font-bold text-primary-blue mb-4 hover:text-accent-yellow transition-colors duration-300">
                Application Tips
              </h3>
              <ul className="space-y-3 font-open-sans text-secondary-grey">
                {[
                  'Include all relevant certifications and training',
                  'Highlight safety achievements and experience',
                  'Provide detailed project examples',
                  'Include references from previous employers'
                ].map((tip, index) => (
                  <li key={index} className={`flex items-center hover:translate-x-2 transition-all duration-300 animate-fade-in`}
                      style={{ animationDelay: `${(index + 4) * 100}ms` }}>
                    <div className="w-2 h-2 bg-accent-yellow rounded-full mr-3 hover:scale-150 transition-transform duration-300"></div>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
