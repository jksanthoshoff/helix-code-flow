import { motion } from 'framer-motion';

interface DNAHelixFallbackProps {
  className?: string;
}

export default function DNAHelixFallback({ className = "" }: DNAHelixFallbackProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <div className="relative w-32 h-80">
        {/* DNA Strands */}
        <div className="absolute inset-0">
          {/* Left Strand */}
          <motion.div
            className="absolute left-4 top-0 w-1 h-full bg-gradient-to-b from-dna-blue to-ribosome rounded-full"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Right Strand */}
          <motion.div
            className="absolute right-4 top-0 w-1 h-full bg-gradient-to-b from-dna-blue to-ribosome rounded-full"
            animate={{
              rotateY: [180, 540],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Base Pairs */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full flex items-center justify-between"
            style={{ top: `${(i * 100) / 12}%` }}
            animate={{
              rotateZ: [(i * 30), (i * 30) + 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.1
            }}
          >
            {/* Base pair connection */}
            <div className="w-full h-0.5 bg-gradient-to-r from-enzyme via-protein to-enzyme opacity-60" />
            
            {/* Left base */}
            <motion.div
              className={`absolute left-3 w-3 h-3 rounded-full ${
                i % 4 === 0 ? 'bg-dna-blue' : 
                i % 4 === 1 ? 'bg-ribosome' : 
                i % 4 === 2 ? 'bg-enzyme' : 
                'bg-protein'
              }`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
            
            {/* Right base */}
            <motion.div
              className={`absolute right-3 w-3 h-3 rounded-full ${
                i % 4 === 0 ? 'bg-enzyme' : 
                i % 4 === 1 ? 'bg-protein' : 
                i % 4 === 2 ? 'bg-dna-blue' : 
                'bg-ribosome'
              }`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2 + 0.1
              }}
            />
          </motion.div>
        ))}

        {/* Floating particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}