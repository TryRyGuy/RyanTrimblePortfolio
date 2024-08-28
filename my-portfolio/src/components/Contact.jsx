import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">Contact</h2>
        <p className="text-lg text-gray-700 mb-6">
          {"I'd love to hear from you! Reach out to me at rjtrimble22@gmail.com or connect with me on LinkedIn."}
        </p>
        <a href="mailto:your.email@example.com" className="bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-blue-600 transition">
          Email Me
        </a>
      </div>
    </section>
  );
}