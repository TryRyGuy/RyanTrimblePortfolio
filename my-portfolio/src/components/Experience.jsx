import React from 'react';

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Teidore',
    period: 'June 2024 - Sept 2024',
    responsibilities: [
        'Implemented new filtering groups to the product storefront and refactored Supabase query code to reduce request times by 17%',
        'Repopulated company database with more accurate catalog data from partnered retailers, removing duplicate/improper entries',
        'Developed training document to introduce other intern groups to web scraping with Selenium for a joint assignment',
      ],
  },
  // More experiences...
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-primary">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
              <h4 className="text-lg text-secondary mb-2">{exp.company}</h4>
              <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside text-gray-700">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}