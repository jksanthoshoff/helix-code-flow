
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProteinCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  type: 'enzyme' | 'protein' | 'ribosome';
  className?: string;
}

export default function ProteinCard({
  title,
  description,
  techStack,
  githubUrl,
  demoUrl,
  type,
  className = ""
}: ProteinCardProps) {
  const getTypeStyles = () => {
    switch (type) {
      case 'enzyme':
        return {
          gradient: 'bg-gradient-enzyme',
          border: 'border-enzyme',
          glow: 'hover:shadow-[0_0_20px_hsl(var(--enzyme-yellow)/0.5)]'
        };
      case 'protein':
        return {
          gradient: 'bg-gradient-protein',
          border: 'border-protein',
          glow: 'hover:shadow-[0_0_20px_hsl(var(--protein-green)/0.5)]'
        };
      case 'ribosome':
        return {
          gradient: 'bg-gradient-ribosome',
          border: 'border-ribosome',
          glow: 'hover:shadow-[0_0_20px_hsl(var(--ribosome-red)/0.5)]'
        };
    }
  };

  const styles = getTypeStyles();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3, type: "spring" }}
      className={`h-full ${className}`}
    >
      <Card className={`
        relative group cursor-pointer transition-all duration-300 h-full
        ${styles.border} ${styles.glow}
        hover:border-opacity-100 border-opacity-30
        bg-card/80 backdrop-blur-sm
      `}>
        {/* Gradient overlay */}
        <div className={`
          absolute inset-0 ${styles.gradient} opacity-5 
          group-hover:opacity-20 transition-opacity duration-300 rounded-lg
        `} />
        
        <CardHeader className="relative z-10 pb-3">
          <CardTitle className="text-base md:text-lg font-semibold text-foreground line-clamp-2">
            {title}
          </CardTitle>
          <CardDescription className="text-xs md:text-sm text-muted-foreground line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="relative z-10 space-y-4 pt-0">
          {/* Tech Stack as Molecular Components */}
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {techStack.slice(0, 4).map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="text-xs bg-muted/50 hover:bg-muted border-border px-2 py-1"
              >
                {tech}
              </Badge>
            ))}
            {techStack.length > 4 && (
              <Badge 
                variant="secondary"
                className="text-xs bg-muted/50 border-border px-2 py-1"
              >
                +{techStack.length - 4}
              </Badge>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2 md:gap-3 pt-2">
            {githubUrl && (
              <Button 
                size="sm" 
                variant="outline"
                className="flex items-center gap-1.5 text-xs flex-1 md:flex-none"
                onClick={() => window.open(githubUrl, '_blank')}
              >
                <Github className="w-3 h-3" />
                <span className="hidden sm:inline">Code</span>
              </Button>
            )}
            {demoUrl && (
              <Button 
                size="sm" 
                variant="default"
                className="flex items-center gap-1.5 text-xs flex-1 md:flex-none"
                onClick={() => window.open(demoUrl, '_blank')}
              >
                <ExternalLink className="w-3 h-3" />
                <span className="hidden sm:inline">Demo</span>
              </Button>
            )}
          </div>
        </CardContent>
        
        {/* Bio-luminescent particles - Only show on hover and larger screens */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
          <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
        </div>
      </Card>
    </motion.div>
  );
}
