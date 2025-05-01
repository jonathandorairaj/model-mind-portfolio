
import React from 'react';
import { Database, Code, ChartBar, ChartLine } from 'lucide-react';
import SkillBadge from './SkillBadge';

const Skills = () => {
  const dataSkills = [
    { name: "Python", icon: <Code size={20} /> },
    { name: "SQL", icon: <Database size={20} /> },
    { name: "Pandas", icon: <ChartBar size={20} /> },
    { name: "NumPy", icon: <ChartLine size={20} /> },
    { name: "SciPy", icon: <ChartLine size={20} /> },
    { name: "R", icon: <Code size={20} /> },
  ];
  
  const mlSkills = [
    { name: "TensorFlow", icon: <Code size={20} /> },
    { name: "PyTorch", icon: <Code size={20} /> },
    { name: "Scikit-Learn", icon: <ChartLine size={20} /> },
    { name: "Deep Learning", icon: <ChartBar size={20} /> },
    { name: "NLP", icon: <Database size={20} /> },
    { name: "Computer Vision", icon: <Code size={20} /> },
  ];
  
  const bigDataSkills = [
    { name: "Spark", icon: <Database size={20} /> },
    { name: "Hadoop", icon: <Database size={20} /> },
    { name: "AWS", icon: <Code size={20} /> },
    { name: "GCP", icon: <Database size={20} /> },
    { name: "Kafka", icon: <Code size={20} /> },
    { name: "Airflow", icon: <ChartLine size={20} /> },
  ];
  
  const toolsSkills = [
    { name: "Git", icon: <Code size={20} /> },
    { name: "Docker", icon: <Database size={20} /> },
    { name: "Jupyter", icon: <ChartBar size={20} /> },
    { name: "Tableau", icon: <ChartLine size={20} /> },
    { name: "Power BI", icon: <ChartBar size={20} /> },
    { name: "Excel", icon: <ChartLine size={20} /> },
  ];

  return (
    <section id="skills" className="bg-gray-50 py-16">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Data Analysis */}
          <div className="bg-white p-6 rounded-xl shadow-md animate-fade-in">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Data Analysis</h3>
            <div className="grid grid-cols-2 gap-3">
              {dataSkills.map((skill, index) => (
                <SkillBadge 
                  key={index} 
                  name={skill.name} 
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
          
          {/* Machine Learning */}
          <div className="bg-white p-6 rounded-xl shadow-md animate-fade-in" style={{animationDelay: "0.1s"}}>
            <h3 className="text-xl font-semibold mb-4 gradient-text">Machine Learning</h3>
            <div className="grid grid-cols-2 gap-3">
              {mlSkills.map((skill, index) => (
                <SkillBadge 
                  key={index} 
                  name={skill.name} 
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
          
          {/* Big Data */}
          <div className="bg-white p-6 rounded-xl shadow-md animate-fade-in" style={{animationDelay: "0.2s"}}>
            <h3 className="text-xl font-semibold mb-4 gradient-text">Big Data</h3>
            <div className="grid grid-cols-2 gap-3">
              {bigDataSkills.map((skill, index) => (
                <SkillBadge 
                  key={index} 
                  name={skill.name} 
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
          
          {/* Tools */}
          <div className="bg-white p-6 rounded-xl shadow-md animate-fade-in" style={{animationDelay: "0.3s"}}>
            <h3 className="text-xl font-semibold mb-4 gradient-text">Tools</h3>
            <div className="grid grid-cols-2 gap-3">
              {toolsSkills.map((skill, index) => (
                <SkillBadge 
                  key={index} 
                  name={skill.name} 
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
