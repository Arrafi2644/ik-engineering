
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-montserrat font-bold mb-6 text-primary-blue">
          Contact Information
        </h2>
        <p className="text-secondary-grey mb-8">
          Our team is ready to answer any questions you might have about our engineering services,
          equipment hire, or project management solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-blue/10 rounded-full">
                <Phone className="w-6 h-6 text-primary-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-blue mb-1">Phone</h3>
                <p className="text-secondary-grey">+64 210 535 740</p>
                <p className="text-secondary-grey">+64 210 535 740</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-blue/10 rounded-full">
                <Mail className="w-6 h-6 text-primary-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-blue mb-1">Email</h3>
                <p className="text-secondary-grey">info@ikengineering.co.nz</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-blue/10 rounded-full">
                <Clock className="w-6 h-6 text-primary-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-blue mb-1">Hours</h3>
                <p className="text-secondary-grey">Mon-Fri: 8:00am - 5:00pm</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="pt-6">
        <h3 className="text-xl font-montserrat font-semibold mb-4 text-primary-blue">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/ikengineering.newzealand" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-blue text-white rounded-full hover:bg-accent-yellow hover:text-primary-blue transition-colors duration-300">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/ikengineering.newzealand" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-blue text-white rounded-full hover:bg-accent-yellow hover:text-primary-blue transition-colors duration-300">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/company/kr-engineeringnz" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-blue text-white rounded-full hover:bg-accent-yellow hover:text-primary-blue transition-colors duration-300">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};
