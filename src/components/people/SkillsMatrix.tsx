import React, { useState } from 'react';
import { Wrench, Cog, Users, Truck, Shield, Award } from 'lucide-react';

const SkillsMatrix = () => {
  const [selectedCategory, setSelectedCategory] = useState('welding');

  const skillsData = {
    welding: {
      title: 'Welding & Fabrication Team',
      icon: Wrench,
      description: 'Our certified welding professionals bring precision and expertise to every project.',
      roles: [
        { title: 'Senior Welder', count: 8, certifications: ['MIG/TIG Certified', 'Pressure Vessel', 'Structural'] },
        { title: 'Fabricator', count: 12, certifications: ['Steel Fabrication', 'Custom Metalwork', 'Quality Control'] },
        { title: 'Welding Inspector', count: 3, certifications: ['NDT Certified', 'Quality Assurance', 'Code Compliance'] }
      ]
    },
    machinery: {
      title: 'Machine Operations Team',
      icon: Cog,
      description: 'Skilled operators trained on the latest industrial equipment and machinery.',
      roles: [
        { title: 'Heavy Machine Operator', count: 10, certifications: ['Heavy Machinery License', 'Safety Certified', 'Hydraulics'] },
        { title: 'CNC Operator', count: 5, certifications: ['CNC Programming', 'Precision Machining', 'CAD/CAM'] },
        { title: 'Crane Operator', count: 4, certifications: ['Crane License', 'Rigging Certified', 'Load Calculations'] }
      ]
    },
    management: {
      title: 'Project Management Team',
      icon: Users,
      description: 'Experienced leaders ensuring project success from conception to completion.',
      roles: [
        { title: 'Project Manager', count: 6, certifications: ['PMP Certified', 'Risk Management', 'Client Relations'] },
        { title: 'Site Supervisor', count: 8, certifications: ['Leadership Training', 'Safety Management', 'Quality Control'] },
        { title: 'Technical Lead', count: 4, certifications: ['Engineering Degree', 'Technical Review', 'Problem Solving'] }
      ]
    },
    support: {
      title: 'Support Services Team',
      icon: Truck,
      description: 'Essential support roles that keep our operations running smoothly.',
      roles: [
        { title: 'Equipment Technician', count: 6, certifications: ['Maintenance Certified', 'Diagnostic Skills', 'Repair Expertise'] },
        { title: 'Safety Officer', count: 3, certifications: ['Safety Certification', 'Risk Assessment', 'Training Delivery'] },
        { title: 'Logistics Coordinator', count: 4, certifications: ['Supply Chain', 'Inventory Management', 'Transport Coordination'] }
      ]
    }
  };

  const categories = [
    { key: 'welding', label: 'Welding & Fabrication', icon: Wrench },
    { key: 'machinery', label: 'Machine Operations', icon: Cog },
    { key: 'management', label: 'Project Management', icon: Users },
    { key: 'support', label: 'Support Services', icon: Truck }
  ];

  const currentData = skillsData[selectedCategory as keyof typeof skillsData];

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-blue mb-6">
            Skills & <span className="text-accent-yellow">Expertise</span>
          </h2>
          <p className="text-xl font-open-sans text-secondary-grey max-w-3xl mx-auto">
            Our diverse team brings together specialized skills and certifications
            to deliver exceptional results across all project requirements.
          </p>
        </div>

        {/* Category navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`p-6 rounded-xl transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-accent-yellow text-primary-blue shadow-lg scale-105'
                    : 'bg-white text-primary-blue hover:bg-accent-yellow/10'
                }`}
              >
                <IconComponent className="h-8 w-8 mx-auto mb-3" />
                <div className="font-montserrat font-semibold text-sm">
                  {category.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* Skills content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <currentData.icon className="h-10 w-10 text-accent-yellow mr-4" />
              <div>
                <h3 className="text-2xl font-montserrat font-bold text-primary-blue">
                  {currentData.title}
                </h3>
                <p className="font-open-sans text-secondary-grey">
                  {currentData.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentData.roles.map((role, index) => (
                <div
                  key={index}
                  className="bg-light-gray rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-montserrat font-semibold text-primary-blue text-lg">
                      {role.title}
                    </h4>
                    <span className="bg-accent-yellow text-primary-blue text-sm font-semibold px-3 py-1 rounded-full">
                      {role.count}
                    </span>
                  </div>

                  <div>
                    <h5 className="font-open-sans font-medium text-secondary-grey mb-2 text-sm">
                      Key Certifications:
                    </h5>
                    <ul className="space-y-1">
                      {role.certifications.map((cert, certIndex) => (
                        <li key={certIndex} className="flex items-center text-sm font-open-sans text-secondary-grey">
                          <div className="w-1.5 h-1.5 bg-accent-yellow rounded-full mr-2"></div>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-primary-blue rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-montserrat font-bold mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-lg font-open-sans text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for skilled professionals to join our growing team.
              Explore our current openings and become part of the IK Engineering family.
            </p>
            <a
              href="/careers"
              className="inline-block bg-accent-yellow hover:bg-accent-yellow/90 text-primary-blue font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View Career Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
