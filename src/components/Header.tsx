
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold gradient-text">DataPortfolio</a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('about')} className="nav-link relative hover:text-ds-blue transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('skills')} className="nav-link relative hover:text-ds-blue transition-colors">
            Skills
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link relative hover:text-ds-blue transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link relative hover:text-ds-blue transition-colors">
            Contact
          </button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col p-4 space-y-3">
            <button onClick={() => scrollToSection('about')} className="py-2 hover:text-ds-blue transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="py-2 hover:text-ds-blue transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="py-2 hover:text-ds-blue transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="py-2 hover:text-ds-blue transition-colors">
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
