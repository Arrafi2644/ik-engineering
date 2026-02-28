import React from 'react';

const PeopleStory = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-primary-blue via-primary-blue/95 to-primary-blue/90 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 border border-accent-yellow/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-accent-yellow/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Content Column */}
          <div className="lg:col-span-8">
            <div className="inline-block px-4 py-2 bg-accent-yellow/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-accent-yellow font-montserrat font-semibold">EST. 2004</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-8">
              Our <span className="text-accent-yellow">Story</span>
            </h2>

            <div className="space-y-6 text-gray-100 font-open-sans text-lg leading-relaxed">
              <p>
                Founded in 2004, IK Engineering has grown from a small workshop into one of New Zealand's
                leading providers of skilled labour and engineering services. What started as a vision to
                deliver exceptional craftsmanship has evolved into a comprehensive engineering powerhouse.
              </p>

              <p>
                Our journey has been marked by continuous growth, innovation, and an unwavering commitment
                to quality. From our first major industrial contract to becoming a trusted partner for
                complex engineering projects across multiple industries, we've built our reputation on
                reliability, expertise, and safety.
              </p>

              <p>
                Today, with over 50 skilled professionals and state-of-the-art equipment, we continue to
                push boundaries in welding, fabrication, machine operation, and project management. Our
                success is built on the foundation of our people – their expertise, dedication, and
                commitment to excellence drives everything we do.
              </p>
            </div>
          </div>

          {/* Stats Card */}
          <div className="lg:col-span-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-montserrat font-bold text-white mb-8">By the Numbers</h3>

              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-montserrat font-bold text-accent-yellow">20+</div>
                  <div className="text-gray-100">Years Experience</div>
                </div>

                <div>
                  <div className="text-3xl font-montserrat font-bold text-accent-yellow">50+</div>
                  <div className="text-gray-100">Team Members</div>
                </div>

                <div>
                  <div className="text-3xl font-montserrat font-bold text-accent-yellow">98%</div>
                  <div className="text-gray-100">Client Satisfaction</div>
                </div>

                <div>
                  <div className="text-3xl font-montserrat font-bold text-accent-yellow">15+</div>
                  <div className="text-gray-100">Project Management Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleStory;
