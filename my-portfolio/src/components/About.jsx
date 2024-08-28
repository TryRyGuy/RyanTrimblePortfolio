import React from 'react';
import { motion } from 'framer-motion';
import headshot from '../images/RyanT_Headshot.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="text-4xl font-bold mb-6 text-primary">About Me</h2>
          <p className="text-lg text-gray-700 mb-6">
            {"I am a passionate software engineer, currently specializing in creating meticulous, scalable, and user-friendly applications/services. I enjoy engaging myself with new materials/tools in this everchanging industry, so be sure to check back here to keep up to date with what I've been doing lately"}
          </p>
          <img src={headshot} alt="Profile" className="mx-auto rounded-full w-48 h-48 border-4 border-primary" />
        </motion.div>
      </div>
    </section>
  );
}