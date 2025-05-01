
import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ds-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-xl gradient-text">DataPortfolio</span>
          </div>
          
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">© {currentYear} Your Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
