import React from 'react';

const PeopleAchievements = () => {
  const achievements = [
    "Established in 2004",
    "Grown to a team of 50+ skilled workers",
    "98% client satisfaction rate",
    "Maintains a proud record of zero safety incidents",
    "Led successful digital transformation initiatives"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-blue mb-6">
            Key <span className="text-accent-yellow">Achievements</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <li 
                key={index}
                className="flex items-start animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="inline-block w-2 h-2 bg-accent-yellow rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="text-lg font-open-sans text-gray-700">{achievement}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 text-center">
            <p className="text-lg font-open-sans text-gray-600 italic">
              "We remain committed to our original vision of delivering exceptional engineering services 
              while fostering a culture of safety, innovation, and continuous improvement."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleAchievements;