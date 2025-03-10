
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden border border-border/40 transition-all duration-300 hover:border-border hover:shadow-md">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="p-6 relative z-10">
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="font-semibold text-lg mb-2 group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
