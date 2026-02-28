
import React from 'react';
import { SEO } from '../components/SEO';
import { organizationSchema, breadcrumbSchema } from '../utils/structuredData';
import PeopleHero from '../components/people/PeopleHero';
import PeopleStory from '../components/people/PeopleStory';
import PeopleAchievements from '../components/people/PeopleAchievements';
import SkillsMatrix from '../components/people/SkillsMatrix';

const OurPeople = () => {
  const structuredData = {
    "@graph": [
      organizationSchema,
      breadcrumbSchema([
        { name: "Home", url: "https://ikengineering.co.nz" },
        { name: "Our People", url: "https://ikengineering.co.nz/our-people" }
      ])
    ]
  };

  return (
    <div>
      <SEO
        title="Our People | IK Engineering Team & Leadership NZ"
        description="Meet the skilled professionals at IK Engineering. Our experienced team delivers expert welding, fabrication & engineering services across New Zealand."
        keywords="IK Engineering team, skilled labour professionals, engineering team NZ, welding experts, fabrication specialists"
        url="https://ikengineering.co.nz/our-people"
        structuredData={structuredData}
      />
      <PeopleHero />
      <PeopleStory />
      <PeopleAchievements />
      <SkillsMatrix />
    </div>
  );
};

export default OurPeople;
