import React from 'react';
import { motion } from 'framer-motion';
import STMG from '../images/STMG.png';
import UCSCScheduler from '../images/UCSCScheduler.png'

const projects = [
  {
    title: 'UCSC Course Preparation Tool',
    description: 'A secure companion tool for UCSC students to plan classes and generate reminders',
    image: UCSCScheduler,
    link: 'https://github.com/TryRyGuy/UCSCCourseScheduler',
    workingLink: null
  },
  {
    title: 'StopThrowingMyGames.com',
    description: 'An intuitive REST framework-based League of Legends matchup checker',
    image: STMG,
    link: 'https://github.com/TryRyGuy/StopThrowingMyGames',
    workingLink: null
  },
  // More projects...
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-primary">Projects</h2>
        <p className=" mb-8 text-center text-primary"> **For some projects, where there were either software/API credential issues preventing open hosting or private github repository access, buttons/links may be missing but access/demos can be provided upon request. Feel free to get in contact via my email or LinkedIn (below) and I can provide them! </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a href={project.link} className="text-primary hover:text-blue-700">View Project</a>
                {/* Conditionally render the button if workingLink is present */}
                {project.workingLink && (
                  <a
                    href={project.workingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 bg-primary text-white text-center py-2 px-4 rounded shadow hover:bg-blue-600 transition"
                  >
                    View Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}