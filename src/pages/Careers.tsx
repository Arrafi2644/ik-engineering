
import React from 'react';
import { SEO } from '../components/SEO';
import { jobPostingSchema, breadcrumbSchema } from '../utils/structuredData';
import CareerHero from '../components/careers/CareerHero';
import CompanyPerks from '../components/careers/CompanyPerks';
import HiringProcess from '../components/careers/HiringProcess';
import JobApplicationModal from '../components/careers/JobApplicationModal';

const Careers = () => {
  const structuredData = {
    "@graph": [
      jobPostingSchema,
      breadcrumbSchema([
        { name: "Home", url: "https://ikengineering.co.nz" },
        { name: "Careers", url: "https://ikengineering.co.nz/careers" }
      ])
    ]
  };

  return (
    <div>
      <SEO
        title="Careers at IK Engineering | Skilled Labour Jobs NZ"
        description="Join IK Engineering — New Zealand's leader in skilled labour hire, welding, fabrication & engineering jobs. Competitive pay, training & zero-harm safety culture."
        keywords="engineering jobs NZ, skilled labour careers, welding jobs, fabrication careers, construction jobs New Zealand"
        url="https://ikengineering.co.nz/careers"
        structuredData={structuredData}
      />
      <CareerHero />
      <CompanyPerks />
      <HiringProcess />
      <JobApplicationModal />
    </div>
  );
};

export default Careers;
