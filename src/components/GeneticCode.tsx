import { motion } from 'framer-motion';

interface GeneticCodeProps {
  className?: string;
}

export default function GeneticCode({ className = "" }: GeneticCodeProps) {
  const codeSnippet = `const genome = {
  startCodon: "ATG",
  developer: "Santhosh J.K.",
  specialization: ["Web Dev", "Biotech"],
  skills: {
    frontend: ["React", "Next.js", "TypeScript"],
    backend: ["Node.js", "Python", "PostgreSQL"],
    biotech: ["Genomics", "Protein Analysis", "Bioinformatics"]
  },
  function: () => {
    return "Building the future where biology meets technology";
  },
  expression: "ACTIVE",
  location: "India"
};

// Gene Expression Protocol
if (genome.expression === "ACTIVE") {
  genome.function();
}`;

  return (
    <motion.div 
      className={`relative bg-card border border-border rounded-lg p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-4 right-4 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      
      <pre className="font-code text-sm text-foreground leading-relaxed overflow-x-auto">
        <code dangerouslySetInnerHTML={{ __html: highlightCode(codeSnippet) }} />
      </pre>
      
      <div className="mt-4 text-xs text-muted-foreground font-code">
        // Genetic Information System v2.0 - Living Portfolio
      </div>
    </motion.div>
  );
}

function highlightCode(code: string): string {
  return code
    .replace(/(".*?")/g, '<span style="color: hsl(var(--enzyme-yellow))">$1</span>')
    .replace(/(const|if|return)/g, '<span style="color: hsl(var(--ribosome-red))">$1</span>')
    .replace(/(genome|startCodon|developer|specialization|skills|function|expression|location)/g, '<span style="color: hsl(var(--dna-blue))">$1</span>')
    .replace(/(\/\/.*)/g, '<span style="color: hsl(var(--muted-foreground))">$1</span>');
}