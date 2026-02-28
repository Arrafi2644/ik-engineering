
import React from 'react';
import { SEO } from '../components/SEO';
import { organizationSchema, breadcrumbSchema } from '../utils/structuredData';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactInfo } from '../components/contact/ContactInfo';

const Contact = () => {
  const structuredData = {
    "@graph": [
      organizationSchema,
      breadcrumbSchema([
        { name: "Home", url: "https://ikengineering.co.nz" },
        { name: "Contact", url: "https://ikengineering.co.nz/contact" }
      ])
    ]
  };

  return (
    <div className="bg-white">
      <SEO
        title="Contact IK Engineering | Engineering Services Auckland NZ"
        description="Get in touch with IK Engineering in Auckland, NZ. Expert skilled labour hire, welding, fabrication & engineering project services. Call us today."
        keywords="contact IK Engineering, engineering services Auckland, skilled labour hire contact, welding services contact"
        url="https://ikengineering.co.nz/contact"
        structuredData={structuredData}
      />
      <ContactHero />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
