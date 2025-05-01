
import React from 'react';
import { User, Briefcase, FileText, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg">
              I am a passionate data scientist and machine learning engineer with expertise in developing 
              data-driven solutions that solve complex business problems. With a strong foundation in 
              statistics, machine learning, and software engineering, I transform raw data into 
              meaningful insights and build intelligent systems.
            </p>
            <p className="text-lg">
              My approach combines analytical thinking with creative problem-solving to design 
              and implement solutions that are not only technically sound but also deliver real business value.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-ds-light-purple p-2 rounded-md">
                  <User className="text-ds-purple" size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Name</h3>
                  <p className="text-gray-600">Your Name</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-ds-light-blue p-2 rounded-md">
                  <Briefcase className="text-ds-blue" size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Current Role</h3>
                  <p className="text-gray-600">Data Scientist at Company Name</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-ds-light-purple p-2 rounded-md">
                  <FileText className="text-ds-purple" size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Education</h3>
                  <p className="text-gray-600">MS in Data Science, University Name</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-ds-light-blue p-2 rounded-md">
                  <Mail className="text-ds-blue" size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">your.email@example.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg animate-fade-in-right">
              {/* Replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-ds-blue to-ds-purple flex items-center justify-center text-white text-9xl font-bold">
                YN
              </div>
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 animate-fade-in">
              <div className="text-center">
                <span className="block text-3xl font-bold gradient-text">3+</span>
                <span className="block text-gray-600">Years Experience</span>
              </div>
            </div>
            
            {/* Projects badge */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 animate-fade-in">
              <div className="text-center">
                <span className="block text-3xl font-bold gradient-text">15+</span>
                <span className="block text-gray-600">Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
