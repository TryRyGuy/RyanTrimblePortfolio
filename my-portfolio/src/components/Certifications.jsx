import React from 'react';

// Sample data for certifications and memberships
const certifications = [
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'The Linux Foundation',
    date: 'March 2023'
  },
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    date: 'January 2023'
  },
  // Add more certifications or memberships here
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-primary">Certifications & Memberships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <h4 className="text-lg text-secondary mb-2">{cert.issuer}</h4>
              <p className="text-sm text-gray-500">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}