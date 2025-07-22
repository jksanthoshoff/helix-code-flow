import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface CodonButtonProps {
  codon: string;
  aminoAcid: string;
  description: string;
  isActive?: boolean;
  onClick: () => void;
  className?: string;
}

export default function CodonButton({ 
  codon, 
  aminoAcid, 
  description, 
  isActive = false, 
  onClick,
  className = ""
}: CodonButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      <Button
        onClick={onClick}
        variant="outline"
        className={`
          relative group font-code text-sm px-6 py-8 h-auto
          border-2 transition-all duration-300
          ${isActive 
            ? 'border-primary bg-primary/10 text-primary codon-active' 
            : 'border-muted hover:border-primary/50 hover:bg-primary/5'
          }
          hover:shadow-glow
        `}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="text-lg font-bold tracking-wider text-dna-cyan">
            {codon}
          </div>
          <div className="text-xs opacity-70">
            → {aminoAcid}
          </div>
          <div className="text-xs text-center opacity-60 max-w-20">
            {description}
          </div>
        </div>
        
        {/* Bio-luminescent effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Button>
    </motion.div>
  );
}