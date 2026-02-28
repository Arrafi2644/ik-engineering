import React, { useState } from 'react';
import { Wrench, Cog, Users, Truck, ShieldAlert, Settings, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const navigate = useNavigate();

  const services = [
    {
      icon: Wrench,
      title: 'Custom Fabrication',
      description: 'CNC machining, MIG/TIG welding, and laser cutting services tailored for precision parts and assemblies — from one-offs to large production runs.',
      features: ['CNC Machining', 'MIG/TIG Welding', 'Laser Cutting', 'Quality Assurance'],
      coverImage: 'https://borxtnmxkmisnyjzrqlm.supabase.co/storage/v1/object/public/krheroslide/our%20services/construction-workers-welding-night.jpg'
    },
    {
      icon: Cog,
      title: 'Mechanical Maintenance',
      description: 'Scheduled inspections, troubleshooting, and urgent repair services to minimize downtime and keep industrial machinery running smoothly.',
      features: ['Preventive Maintenance', 'Emergency Repairs', 'Troubleshooting', 'Equipment Optimization'],
      coverImage: 'https://borxtnmxkmisnyjzrqlm.supabase.co/storage/v1/object/public/krheroslide/our%20services/mm.jpg'
    },
    {
      icon: Users,
      title: 'Structural Steel Engineering',
      description: 'Design, fabrication, and on-site erection of structural steel for commercial and industrial projects, with full compliance and safety protocols.',
      features: ['Steel Design', 'Fabrication', 'On-site Erection', 'Safety Compliance'],
      coverImage: 'https://borxtnmxkmisnyjzrqlm.supabase.co/storage/v1/object/public/krheroslide/our%20services/KR%20pointing-sketch.jpg'
    },
    {
      icon: Truck,
      title: 'On-Site Engineering Services',
      description: 'Mobile engineering support including welding, pipework, repairs, and installations — ideal for minimal disruption to client operations.',
      features: ['Mobile Welding', 'Pipework', 'On-site Repairs', 'Emergency Response'],
      coverImage: 'https://borxtnmxkmisnyjzrqlm.supabase.co/storage/v1/object/public/krheroslide/our%20services/factory-worker-operating-industrial-machine.jpg'
    },
    {
      icon: ShieldAlert,
      title: 'CAD Design & Prototyping',
      description: '3D CAD design and prototyping services to help clients test, validate, and refine concepts before full-scale production.',
      features: ['3D CAD Design', 'Rapid Prototyping', 'Design Validation', 'Technical Drawings'],
      coverImage: 'https://borxtnmxkmisnyjzrqlm.supabase.co/storage/v1/object/public/krheroslide/our%20services/safety.jpg'
    },
    {
      icon: Settings,
      title: 'Machine Rebuilds & Retrofits',
      description: 'Upgrades and modernizations of legacy machinery to extend life, improve efficiency, and meet current safety standards.',
      features: ['Equipment Upgrades', 'Safety Compliance', 'Efficiency Improvements', 'Life Extension'],
      coverImage: 'https://borxtnmxkmisnyjzrqlm.supabase.co/storage/v1/object/public/krheroslide/our%20services/excavators-exhibition.jpg'
    }
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-blue mb-6">
            Our Core Services
          </h2>
          <p className="text-xl font-open-sans text-secondary-grey max-w-3xl mx-auto">
            IK Engineering offers a full range of fabrication, maintenance, and on-site engineering services designed for heavy industry, commercial projects, and specialized manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.filter(service => service.title !== 'Machine Rebuilds & Retrofits').map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden cursor-pointer h-full transform hover:scale-105 hover:-translate-y-1"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => navigate(`/services#${service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`)}
              >
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-2 shadow-lg">
                    <ExternalLink className="h-4 w-4 text-primary-blue" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="relative mb-4 flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-700 ${
                      hoveredService === index 
                        ? 'bg-accent-yellow text-primary-blue scale-110' 
                        : 'bg-primary-blue/10 text-primary-blue'
                    }`}>
                      <IconComponent className={`h-6 w-6 transition-transform duration-700 ${hoveredService === index ? 'animate-pulse' : ''}`} />
                    </div>
                    <h3 className="text-xl font-montserrat font-semibold text-primary-blue group-hover:text-accent-yellow transition-colors duration-700">
                      {service.title}
                    </h3>
                  </div>

                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg transition-transform duration-700 group-hover:shadow-lg">
                    <img 
                      src={service.coverImage} 
                      alt={`${service.title}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary-blue/0 group-hover:bg-primary-blue/20 transition-all duration-700"></div>
                  </div>

                  <CardContent className="p-0">
                    <p className="font-open-sans text-secondary-grey mb-4 line-clamp-3 transition-all duration-700 group-hover:text-gray-800">
                      {service.description}
                    </p>

                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default Services;
