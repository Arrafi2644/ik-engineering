
import React from 'react';
import { SEO } from '../components/SEO';
import { organizationSchema, breadcrumbSchema } from '../utils/structuredData';
import Timeline from '../components/about/Timeline';
import MissionVision from '../components/about/MissionVision';

const About = () => {
  const structuredData = {
    "@graph": [
      organizationSchema,
      breadcrumbSchema([
        { name: "Home", url: "https://ikengineering.co.nz" },
        { name: "About", url: "https://ikengineering.co.nz/about" }
      ])
    ]
  };

  return (
    <div>
      <SEO
        title="About IK Engineering | Skilled Labour & Engineering NZ"
        description="Since 2004, IK Engineering has delivered skilled labour hire, welding, fabrication & structural engineering services across New Zealand with 98% satisfaction."
        keywords="about IK Engineering, skilled labour hire NZ, engineering company, welding services, fabrication, New Zealand"
        url="https://ikengineering.co.nz/about"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-blue to-secondary"></div>

        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 border border-accent-yellow/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 border border-accent-yellow/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent-yellow/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-accent-yellow/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Content Column */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-yellow/10 border border-accent-yellow/20 backdrop-blur-sm">
                  <span className="text-accent-yellow font-open-sans text-sm font-medium">EST. 2012</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white leading-tight">
                  About
                  <span className="block text-accent-yellow">IK Engineering.</span>
                </h1>
              </div>

              <div className="space-y-6 text-gray-300">
                <p className="text-lg md:text-xl font-open-sans leading-relaxed">
                  Founded in 2012, IK Engineering is led by a team of seasoned engineers with over 40 years of combined experience. We are driven by a passion for solving complex engineering challenges with practical, cost-effective solutions.
                </p>

                <p className="text-lg md:text-xl font-open-sans leading-relaxed">
                  Our core capabilities include <span className="text-accent-yellow font-semibold">heavy machinery, precision tooling, and infrastructure fabrication</span>. We aim to exceed expectations by delivering innovative, tailored solutions that stand the test of time.
                </p>
              </div>
            </div>

            {/* Stats Column */}
            <div className="lg:col-span-4">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 space-y-8">
                <h3 className="text-xl font-montserrat font-bold text-white mb-6">By the Numbers</h3>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-montserrat font-bold text-accent-yellow mb-2">40+</div>
                    <div className="text-sm font-open-sans text-white/80">Years Combined Experience</div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-montserrat font-bold text-accent-yellow mb-2">50+</div>
                    <div className="text-sm font-open-sans text-white/80">Team Members</div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-montserrat font-bold text-accent-yellow mb-2">98%</div>
                    <div className="text-sm font-open-sans text-white/80">Client Satisfaction</div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-montserrat font-bold text-accent-yellow mb-2">12+</div>
                    <div className="text-sm font-open-sans text-white/80">Years of Excellence</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-accent-yellow animate-pulse"></div>
                    <span className="text-sm font-open-sans text-white/70">Engineering Excellence Across New Zealand</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Timeline />
      <MissionVision />
    </div>
  );
};

export default About;
