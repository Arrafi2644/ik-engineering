
import React from 'react';

export const ContactHero = () => {
  return (
    <section className="relative bg-primary-blue text-white">
      <div className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-6">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-accent-yellow mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-open-sans mb-8">
            Let's discuss how IK Engineering can help bring your project to life with
            our expert team and top-tier equipment.
          </p>
        </div>
      </div>
    </section>
  );
};
