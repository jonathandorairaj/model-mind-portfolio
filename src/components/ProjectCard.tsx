
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChartBar, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  codeUrl?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  codeUrl,
  className
}: ProjectCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl overflow-hidden shadow-md card-hover",
      className
    )}>
      <div className="h-48 overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-ds-blue/80 to-ds-purple/80 flex items-center justify-center">
            <ChartBar size={48} className="text-white" />
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-ds-light-purple text-ds-purple text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {demoUrl && (
            <Button 
              asChild
              className="bg-ds-blue hover:bg-ds-blue/80"
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                View Demo
              </a>
            </Button>
          )}
          
          {codeUrl && (
            <Button 
              variant="outline" 
              asChild
              className="border-ds-purple text-ds-purple hover:bg-ds-light-purple/20"
            >
              <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
