
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-white to-ds-light-blue/30">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-ds-light-purple/30 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-ds-light-blue/30 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span>Hi, I'm</span>
            <span className="gradient-text block mt-2">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">Data Scientist & Machine Learning Engineer</p>
          <p className="text-gray-600 mb-8 text-lg">Transforming complex data into actionable insights and building intelligent solutions that drive business value.</p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={scrollToProjects}
              className="btn-primary"
            >
              View My Projects
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              className="border-ds-blue text-ds-blue hover:bg-ds-light-blue/20"
            >
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-ds-blue to-ds-purple rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute inset-4 bg-white rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* You can replace this with your actual profile photo */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-ds-blue/90 to-ds-purple/90 flex items-center justify-center text-white text-6xl font-bold">
                YN
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
