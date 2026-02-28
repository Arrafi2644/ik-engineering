
import React from 'react';
import { SEO } from '../components/SEO';
import { organizationSchema, websiteSchema, serviceSchema, breadcrumbSchema } from '../utils/structuredData';
import Hero from '../components/home/Hero';
import StatsSection from '../components/home/StatsSection';
import Services from '../components/home/Services';
import BusinessProcess from '../components/home/BusinessProcess';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FeaturedProjects from '../components/home/FeaturedProjects';
import MissionVisionSection from '../components/home/MissionVisionSection';

const Home = () => {
  const structuredData = {
    "@graph": [
      organizationSchema,
      websiteSchema,
      serviceSchema,
      breadcrumbSchema([
        { name: "Home", url: "https://ikengineering.co.nz" }
      ])
    ]
  };

  return (
    <div>
      <SEO
        title="Engineering & Skilled Labour Services NZ | IK Engineering"
        description="IK Engineering provides skilled labour hire, welders, structural steel fabrication, machine rebuilds & full engineering project services across New Zealand."
        keywords="engineering project services NZ, skilled labour hire NZ, welding services, structural steel fabrication, machine rebuilds, New Zealand"
        url="https://ikengineering.co.nz"
        structuredData={structuredData}
      />
      <Hero />
      <StatsSection />
      <MissionVisionSection />
      <Services />
      <BusinessProcess />
      <WhyChooseUs />
      <FeaturedProjects />
    </div>
  );
};

export default Home;
