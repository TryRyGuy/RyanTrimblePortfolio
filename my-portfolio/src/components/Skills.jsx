import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaAws, FaJs, FaHtml5 } from 'react-icons/fa'; // Added JavaScript icon
import { SiC, SiCplusplus, SiDjango, SiMongodb, SiSupabase, SiCss3, SiExpress, SiSelenium  } from 'react-icons/si'; // Icons for other skills

const skills = [
  {
    name: 'React',
    icon: <FaReact size={50} className="text-blue-500" />,
    link: 'https://reactjs.org/', // Official React website
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs size={50} className="text-green-500" />,
    link: 'https://nodejs.org/',  // Official Node.js website
  },
  {
    name: 'Python',
    icon: <FaPython size={50} className="text-yellow-500" />,
    link: 'https://www.python.org/', // Official Python website
  },
  {
    name: 'Java',
    icon: <FaJava size={50} className="text-red-500" />,
    link: 'https://www.oracle.com/java/', // Official Java website by Oracle
  },
  {
    name: 'C',
    icon: <SiC size={50} className="text-blue-600" />,
    link: 'https://en.wikipedia.org/wiki/C_(programming_language)', // Wikipedia page for C (no official website)
  },
  {
    name: 'C++',
    icon: <SiCplusplus size={50} className="text-blue-700" />,
    link: 'https://isocpp.org/', // Official C++ website by ISO
  },
  {
    name: 'Django',
    icon: <SiDjango size={50} className="text-green-800" />,
    link: 'https://www.djangoproject.com/', // Official Django website
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb size={50} className="text-green-600" />,
    link: 'https://www.mongodb.com/', // Official MongoDB website
  },
  {
    name: 'Supabase',
    icon: <SiSupabase size={50} className="text-green-500" />,
    link: 'https://supabase.com/', // Official Supabase website
  },
  {
    name: 'CSS',
    icon: <SiCss3 size={50} className="text-blue-500" />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', // MDN Web Docs for CSS (most authoritative source)
  },
  {
    name: 'Express.js',
    icon: <SiExpress size={50} className="text-gray-800" />,
    link: 'https://expressjs.com/', // Official Express.js website
  },
  {
    name: 'Docker',
    icon: <FaDocker size={50} className="text-blue-600" />,
    link: 'https://www.docker.com/', // Official Docker website
  },
  {
    name: 'AWS',
    icon: <FaAws size={50} className="text-orange-500" />,
    link: 'https://aws.amazon.com/', // Official AWS website
  },
  {
    name: 'JavaScript',
    icon: <FaJs size={50} className="text-yellow-500" />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', // MDN Web Docs for JavaScript (most authoritative source)
  },{
    name: 'HTML',
    icon: <FaHtml5 size={50} className="text-orange-500" />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', // MDN Web Docs for HTML (most authoritative source)
  },
  {
    name: 'Selenium',
    icon: <SiSelenium size={50} className="text-green-500" />,
    link: 'https://www.selenium.dev/', // Official Selenium website
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">Skills</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 hover:text-primary transition"
            >
              {skill.icon}
              <span className="text-sm font-medium">{skill.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}