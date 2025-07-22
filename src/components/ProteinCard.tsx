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
      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.6, type: "spring" }}
      className={`protein-fold ${className}`}
    >
      <Card className={`
        relative group cursor-pointer transition-all duration-500
        ${styles.border} ${styles.glow}
        hover:border-opacity-100 border-opacity-30
        bg-card/80 backdrop-blur-sm
      `}>
        {/* Gradient overlay */}
        <div className={`
          absolute inset-0 ${styles.gradient} opacity-5 
          group-hover:opacity-20 transition-opacity duration-300 rounded-lg
        `} />
        
        <CardHeader className="relative z-10">
          <CardTitle className="text-lg font-semibold text-foreground">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="relative z-10 space-y-4">
          {/* Tech Stack as Molecular Components */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="text-xs bg-muted/50 hover:bg-muted border-border"
              >
                {tech}
              </Badge>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            {githubUrl && (
              <Button 
                size="sm" 
                variant="outline"
                className="flex items-center gap-2 text-xs"
                onClick={() => window.open(githubUrl, '_blank')}
              >
                <Github className="w-3 h-3" />
                Code
              </Button>
            )}
            {demoUrl && (
              <Button 
                size="sm" 
                variant="default"
                className="flex items-center gap-2 text-xs"
                onClick={() => window.open(demoUrl, '_blank')}
              >
                <ExternalLink className="w-3 h-3" />
                Demo
              </Button>
            )}
          </div>
        </CardContent>
        
        {/* Bio-luminescent particles */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
        </div>
      </Card>
    </motion.div>
  );
}