
import React, { useState, useRef, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { serviceSchema, breadcrumbSchema } from '../utils/structuredData';
import { ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(0);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const location = useLocation();

  const services = [
    {
      title: 'Custom Fabrication',
      shortDesc: 'CNC machining, MIG/TIG welding, and laser cutting services tailored for precision parts and assemblies — from one-offs to large production runs.',
      fullDesc: 'Our custom fabrication services combine advanced CNC machining, expert MIG/TIG welding, and precision laser cutting to deliver high-quality parts and assemblies. Whether you need a single prototype or large production runs, our state-of-the-art equipment and skilled technicians ensure consistent quality and precise specifications every time.',
      features: [
        'CNC machining and milling',
        'MIG, TIG, and Arc welding capabilities',
        'Precision laser cutting services',
        'Custom part fabrication',
        'Prototype to production runs',
        'Quality assurance testing'
      ],
      image: 'https://borxtnmxkmisnyjzrqlm.supabase.co/storage/v1/object/public/krheroslide/our%20services/construction-workers-welding-night.jpg'
    },
    {
      title: 'Mechanical Maintenance',
      shortDesc: 'Scheduled inspections, troubleshooting, and urgent repair services to minimize downtime and keep industrial machinery running smoothly.',
      fullDesc: 'Our comprehensive mechanical maintenance services are designed to keep your industrial machinery operating at peak performance. From routine scheduled inspections to emergency troubleshooting and urgent repairs, our experienced technicians provide rapid response times to minimize downtime and ensure operational continuity.',
      features: [
        'Scheduled preventive maintenance',
        'Emergency troubleshooting services',
        'Urgent repair response',
        'Equipment performance optimization',
        'Condition monitoring and diagnostics',
        'Maintenance documentation and reporting'
      ],
      image: 'https://borxtnmxkmisnyjzrqlm.supabase.co/storage/v1/object/public/krheroslide/our%20services/mm.jpg'
    },
    {
      title: 'Structural Steel Engineering',
      shortDesc: 'Design, fabrication, and on-site erection of structural steel for commercial and industrial projects, with full compliance and safety protocols.',
      fullDesc: 'Our structural steel engineering services encompass the complete project lifecycle from initial design through fabrication to on-site erection. We specialize in commercial and industrial projects, ensuring full compliance with building codes and safety protocols while delivering robust, reliable structural solutions.',
      features: [
        'Structural design and engineering',
        'Steel fabrication services',
        'On-site erection and installation',
        'Code compliance and certification',
        'Safety protocol implementation',
        'Project management and coordination'
      ],
      image: 'https://borxtnmxkmisnyjzrqlm.supabase.co/storage/v1/object/public/krheroslide/our%20services/KR%20pointing-sketch.jpg'
    },
    {
      title: 'On-Site Engineering Services',
      shortDesc: 'Mobile engineering support including welding, pipework, repairs, and installations — ideal for minimal disruption to client operations.',
      fullDesc: 'Our mobile on-site engineering services bring expert technical support directly to your location. Our fully equipped mobile units provide welding, pipework, repairs, and installations with minimal disruption to your ongoing operations, ensuring projects are completed efficiently while maintaining operational continuity.',
      features: [
        'Mobile welding and fabrication',
        'Pipework installation and repair',
        'On-site maintenance and repairs',
        'Emergency response services',
        'Minimal operational disruption',
        'Fully equipped mobile units'
      ],
      image: 'https://borxtnmxkmisnyjzrqlm.supabase.co/storage/v1/object/public/krheroslide/our%20services/factory-worker-operating-industrial-machine.jpg'
    },
    {
      title: 'CAD Design & Prototyping',
      shortDesc: '3D CAD design and prototyping services to help clients test, validate, and refine concepts before full-scale production.',
      fullDesc: 'Our CAD design and prototyping services help transform your concepts into reality. Using advanced 3D CAD software and rapid prototyping techniques, we enable clients to test, validate, and refine their designs before committing to full-scale production, reducing development costs and time-to-market.',
      features: [
        '3D CAD design and modeling',
        'Rapid prototyping services',
        'Design validation and testing',
        'Concept refinement support',
        'Technical drawing production',
        'Pre-production consultation'
      ],
      image: 'https://borxtnmxkmisnyjzrqlm.supabase.co/storage/v1/object/public/krheroslide/our%20services/safety.jpg'
    },
    {
      title: 'Machine Rebuilds & Retrofits',
      shortDesc: 'Upgrades and modernizations of legacy machinery to extend life, improve efficiency, and meet current safety standards.',
      fullDesc: 'Our machine rebuild and retrofit services breathe new life into legacy machinery through comprehensive upgrades and modernizations. We extend equipment life, improve operational efficiency, and ensure compliance with current safety standards, providing a cost-effective alternative to complete machinery replacement.',
      features: [
        'Legacy machinery assessment',
        'Equipment modernization upgrades',
        'Safety standard compliance',
        'Efficiency improvement modifications',
        'Life extension services',
        'Cost-effective machinery solutions'
      ],
      image: 'https://borxtnmxkmisnyjzrqlm.supabase.co/storage/v1/object/public/krheroslide/our%20services/excavators-exhibition.jpg'
    }
  ];

  const sidebarItems = [
    'Custom Fabrication',
    'Mechanical Maintenance',
    'Structural Steel Engineering',
    'On-Site Engineering Services',
    'CAD Design & Prototyping'
  ];

  const handleSidebarClick = (index: number) => {
    setExpandedService(index);
    
    // Scroll to the corresponding service card with proper offset
    setTimeout(() => {
      if (serviceRefs.current[index]) {
        const element = serviceRefs.current[index];
        const headerOffset = 160; // Account for fixed header and some padding
        const elementPosition = element?.offsetTop || 0;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100); // Small delay to ensure state update completes
  };

  // Handle URL hash navigation from home page
  useEffect(() => {
    const hash = location.hash.substring(1); // Remove the # symbol
    if (hash) {
      const serviceIndex = services.findIndex(service => 
        service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and') === hash
      );
      
      if (serviceIndex !== -1) {
        setExpandedService(serviceIndex);
        
        // Wait for component to render then scroll
        setTimeout(() => {
          if (serviceRefs.current[serviceIndex]) {
            const element = serviceRefs.current[serviceIndex];
            const headerOffset = 160;
            const elementPosition = element?.offsetTop || 0;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 300);
      }
    }
  }, [location.hash, services]);

  const structuredData = {
    "@graph": [
      serviceSchema,
      breadcrumbSchema([
        { name: "Home", url: "https://ikengineering.co.nz" },
        { name: "Services", url: "https://ikengineering.co.nz/services" }
      ])
    ]
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-light-gray">
      <SEO
        title="Engineering & Fabrication Services NZ | IK Engineering"
        description="IK Engineering delivers custom fabrication, skilled labour hire, welders, structural steel fabrication, machine rebuilds & maintenance across New Zealand."
        keywords="engineering project services NZ, skilled labour hire NZ, custom fabrication, structural steel, machine rebuilds, maintenance services"
        url="https://ikengineering.co.nz/services"
        structuredData={structuredData}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primary-blue mb-6">
            Our <span className="text-accent-yellow">Services</span>
          </h1>
          <p className="text-xl font-open-sans text-secondary-grey max-w-3xl mx-auto">
            IK Engineering offers a full range of fabrication, maintenance, and on-site engineering services designed for heavy industry, commercial projects, and specialized manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-32">
              <h3 className="font-montserrat font-semibold text-lg text-primary-blue mb-4">Services</h3>
              <nav className="space-y-2">
                {sidebarItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleSidebarClick(index)}
                    className={`w-full text-left p-3 rounded-lg font-open-sans transition-colors ${
                      expandedService === index
                        ? 'bg-accent-yellow text-primary-blue font-semibold'
                        : 'text-secondary-grey hover:bg-accent-yellow/10 hover:text-accent-yellow'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {services.filter(service => service.title !== 'Machine Rebuilds & Retrofits').map((service, index) => (
                <div
                  key={index}
                  ref={(el) => (serviceRefs.current[index] = el)}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${
                    expandedService === index ? 'ring-2 ring-accent-yellow' : ''
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/60 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-montserrat font-bold text-primary-blue">
                          {service.title}
                        </h3>
                        <button
                          onClick={() => setExpandedService(expandedService === index ? null : index)}
                          className="text-accent-yellow hover:text-primary-blue transition-colors"
                        >
                          <ChevronRight 
                            className={`h-6 w-6 transition-transform ${
                              expandedService === index ? 'rotate-90' : ''
                            }`} 
                          />
                        </button>
                      </div>

                      <p className="font-open-sans text-secondary-grey mb-6">
                        {expandedService === index ? service.fullDesc : service.shortDesc}
                      </p>

                      {expandedService === index && (
                        <div className="animate-fade-in">
                          <h4 className="font-montserrat font-semibold text-primary-blue mb-3">Key Features:</h4>
                          <ul className="space-y-2 mb-6">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center font-open-sans text-secondary-grey">
                                <div className="w-2 h-2 bg-accent-yellow rounded-full mr-3"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>

                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
