
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-white to-ds-light-blue/30 py-16">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-lg">
              I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-ds-light-blue p-3 rounded-full">
                  <Mail className="text-ds-blue" size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:your.email@example.com" className="text-ds-blue hover:underline">
                    your.email@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-ds-light-purple p-3 rounded-full">
                  <Linkedin className="text-ds-purple" size={24} />
                </div>
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-ds-blue hover:underline">
                    linkedin.com/in/yourprofile
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-ds-light-blue p-3 rounded-full">
                  <Github className="text-ds-blue" size={24} />
                </div>
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-ds-blue hover:underline">
                    github.com/yourusername
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                className="btn-primary"
                asChild
              >
                <a href="mailto:your.email@example.com">
                  <Mail className="mr-2" size={18} />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send me a message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ds-blue"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ds-blue"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ds-blue"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ds-blue"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <Button className="w-full btn-primary">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
