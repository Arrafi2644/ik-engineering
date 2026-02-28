import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';
import ikLogo from '@/assets/ik-Logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary-blue to-primary-blue/95 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Company Brand & Description */}
            <div className="lg:col-span-5">
              <div className="mb-8">
                {/* Logo with integrated company name */}
                <div className="inline-flex items-center gap-4 group">
                  {/* Logo with subtle effects for visibility */}
                  <div className="relative">
                    <img 
                      src={ikLogo} 
                      alt="IK Engineering" 
                      className="h-16 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
                      style={{
                        filter: 'brightness(0) invert(1) drop-shadow(0 0 15px rgba(255, 255, 255, 0.4))'
                      }}
                    />
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-white/10 blur-xl opacity-50 pointer-events-none" />
                  </div>
                  
                  {/* Company Name - integrated with logo */}
                  <div className="border-l-2 border-white/30 pl-4">
                    <h2 className="font-montserrat font-bold text-2xl text-white tracking-wide">
                      IK Engineering
                    </h2>
                    <p className="font-open-sans text-xs text-gray-300 mt-1">
                      Excellence in Skilled Labour
                    </p>
                  </div>
                </div>
              </div>
              <p className="font-open-sans text-gray-200 leading-relaxed mb-8 text-lg">
                Established in 2004, IK Engineering delivers high-quality skilled labour services with a focus on safety, reliability, and excellence. With 50+ experienced workers and proven leadership, we proudly maintain a 98% client satisfaction rate across New Zealand.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/ikengineering.newzealand" 
                  className="group bg-white/10 hover:bg-accent-yellow backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5 text-white group-hover:text-primary-blue transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/kr-engineeringnz" 
                  className="group bg-white/10 hover:bg-accent-yellow backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
                  aria-label="Connect with us on LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-white group-hover:text-primary-blue transition-colors" />
                </a>
                <a 
                  href="https://www.instagram.com/ikengineering.newzealand" 
                  className="group bg-white/10 hover:bg-accent-yellow backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5 text-white group-hover:text-primary-blue transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h3 className="font-montserrat font-bold text-xl mb-6 text-white">
                Quick Links
              </h3>
              <nav className="space-y-4">
                <Link 
                  to="/services" 
                  className="group flex items-center font-open-sans text-gray-200 hover:text-accent-yellow transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-accent-yellow/50 group-hover:bg-accent-yellow rounded-full mr-3 transition-colors"></span>
                  Services
                </Link>
                <Link 
                  to="/about" 
                  className="group flex items-center font-open-sans text-gray-200 hover:text-accent-yellow transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-accent-yellow/50 group-hover:bg-accent-yellow rounded-full mr-3 transition-colors"></span>
                  About Us
                </Link>
                <Link 
                  to="/our-people" 
                  className="group flex items-center font-open-sans text-gray-200 hover:text-accent-yellow transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-accent-yellow/50 group-hover:bg-accent-yellow rounded-full mr-3 transition-colors"></span>
                  Our People
                </Link>
                <Link 
                  to="/careers" 
                  className="group flex items-center font-open-sans text-gray-200 hover:text-accent-yellow transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-accent-yellow/50 group-hover:bg-accent-yellow rounded-full mr-3 transition-colors"></span>
                  Careers
                </Link>
                <Link 
                  to="/contact" 
                  className="group flex items-center font-open-sans text-gray-200 hover:text-accent-yellow transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-accent-yellow/50 group-hover:bg-accent-yellow rounded-full mr-3 transition-colors"></span>
                  Contact
                </Link>
              </nav>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-4">
              <h3 className="font-montserrat font-bold text-xl mb-6 text-white">
                Get In Touch
              </h3>
              <div className="space-y-5">
                <div className="group flex items-center space-x-4">
                  <div className="bg-accent-yellow/20 group-hover:bg-accent-yellow/30 rounded-full p-3 transition-colors">
                    <Phone className="h-5 w-5 text-accent-yellow" />
                  </div>
                  <div>
                    <p className="font-open-sans text-gray-300 text-sm">Phone</p>
                    <a href="tel:+64 210 535 740" className="font-open-sans text-white hover:text-accent-yellow transition-colors">
                      +64 210 535 740
                    </a>
                  </div>
                </div>
                
                <div className="group flex items-center space-x-4">
                  <div className="bg-accent-yellow/20 group-hover:bg-accent-yellow/30 rounded-full p-3 transition-colors">
                    <Phone className="h-5 w-5 text-accent-yellow" />
                  </div>
                  <div>
                    <p className="font-open-sans text-gray-300 text-sm">Mobile</p>
                    <a href="tel:0210535740" className="font-open-sans text-white hover:text-accent-yellow transition-colors">
                      +64 210 535 740
                    </a>
                  </div>
                </div>
                
                <div className="group flex items-center space-x-4">
                  <div className="bg-accent-yellow/20 group-hover:bg-accent-yellow/30 rounded-full p-3 transition-colors">
                    <Mail className="h-5 w-5 text-accent-yellow" />
                  </div>
                  <div>
                    <p className="font-open-sans text-gray-300 text-sm">Email</p>
                    <a href="mailto:info@ikengineering.co.nz" className="font-open-sans text-white hover:text-accent-yellow transition-colors">
                      info@ikengineering.co.nz
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-open-sans text-gray-300 text-sm">
              © {new Date().getFullYear()} IK Engineering. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="font-open-sans text-gray-300 hover:text-accent-yellow transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <span className="text-gray-500">|</span>
              <a 
                href="#" 
                className="font-open-sans text-gray-300 hover:text-accent-yellow transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
