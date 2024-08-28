import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white h-screen w-screen flex items-center justify-center relative">
      <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl font-bold mb-6">{"Ryan Trimble"}</h1>
          <p className="text-2xl mb-8">{"Aspiring Software Engineer | 4th Year Computer Engineering Student @ The University of California, Santa Cruz"}</p>
          <a href="#projects" className="bg-white text-primary font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">View My Work</a>
        </motion.div>
      </div>
    </section>
  );
}