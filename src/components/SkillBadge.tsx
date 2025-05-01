
import React from 'react';
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
}

const SkillBadge = ({ name, icon, className }: SkillBadgeProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg p-3 flex items-center gap-3 shadow-skill card-hover",
        className
      )}
    >
      {icon && <div className="text-ds-purple">{icon}</div>}
      <span className="font-medium">{name}</span>
    </div>
  );
};

export default SkillBadge;
