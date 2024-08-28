import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">© {new Date().getFullYear()} {`RyanTrimble`}. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/TryRyGuy" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
          <a href="https://www.linkedin.com/in/ryan-trimble-7791b9281/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
          <a href="https://x.com/TryRyGuy" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
        </div>
      </div>
    </footer>
  );
}