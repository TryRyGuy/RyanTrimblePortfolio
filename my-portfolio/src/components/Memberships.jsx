import React from 'react';

// Sample data for memberships
const memberships = [
  {
    organization: 'Tau Beta Pi - National Engineering Honor Society',
    role: 'Chapter Vice President',
    date: 'Since Sept 2024'
  },
  {
    organization: 'Tau Beta Pi - National Engineering Honor Society',
    role: 'Member',
    date: 'Since December 2023'
  },
  // Add more memberships here
];

export default function Memberships() {
  return (
    <section id="memberships" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-primary">Memberships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {memberships.map((membership, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{membership.organization}</h3>
              <h4 className="text-lg text-secondary mb-2">{membership.role}</h4>
              <p className="text-sm text-gray-500">{membership.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
