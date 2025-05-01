
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Customer Churn Prediction',
      description: 'Developed a machine learning model to predict customer churn with 85% accuracy, helping retain valuable customers.',
      tags: ['Python', 'Scikit-Learn', 'XGBoost', 'Classification'],
      category: 'machine-learning',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Natural Language Processing for Sentiment Analysis',
      description: 'Built an NLP system that analyzes customer feedback to determine sentiment and extract key insights.',
      tags: ['Python', 'NLTK', 'SpaCy', 'BERT', 'NLP'],
      category: 'deep-learning',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Sales Forecasting Dashboard',
      description: 'Created an interactive dashboard that forecasts sales using time series analysis.',
      tags: ['Python', 'Prophet', 'Streamlit', 'Time Series'],
      category: 'data-analysis',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 4,
      title: 'Image Classification with Deep Learning',
      description: 'Implemented a convolutional neural network for image classification achieving 92% accuracy.',
      tags: ['Python', 'TensorFlow', 'CNN', 'Computer Vision'],
      category: 'deep-learning',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 5,
      title: 'Big Data Processing Pipeline',
      description: 'Designed and implemented a data processing pipeline handling millions of records daily.',
      tags: ['PySpark', 'Hadoop', 'AWS', 'Big Data'],
      category: 'big-data',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 6,
      title: 'Recommendation System',
      description: 'Built a collaborative filtering recommendation system for an e-commerce platform.',
      tags: ['Python', 'Pandas', 'Matrix Factorization', 'Recommender System'],
      category: 'machine-learning',
      demoUrl: '#',
      codeUrl: '#'
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
    
  return (
    <section id="projects" className="bg-white py-16">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeFilter === 'all' 
                ? 'bg-ds-purple text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setActiveFilter('machine-learning')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeFilter === 'machine-learning' 
                ? 'bg-ds-purple text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Machine Learning
          </button>
          <button 
            onClick={() => setActiveFilter('deep-learning')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeFilter === 'deep-learning' 
                ? 'bg-ds-purple text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Deep Learning
          </button>
          <button 
            onClick={() => setActiveFilter('data-analysis')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeFilter === 'data-analysis' 
                ? 'bg-ds-purple text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Data Analysis
          </button>
          <button 
            onClick={() => setActiveFilter('big-data')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeFilter === 'big-data' 
                ? 'bg-ds-purple text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Big Data
          </button>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
              className="animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
