import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import DNAHelix from '@/components/DNAHelix';
import GeneticCode from '@/components/GeneticCode';
import CodonButton from '@/components/CodonButton';
import heroImage from '@/assets/dna-hero.jpg';

interface GenomeSectionProps {
  onNavigate: (section: string) => void;
}

export default function GenomeSection({ onNavigate }: GenomeSectionProps) {
  const codons = [
    { code: 'ATG', amino: 'Met', desc: 'Start', section: 'transcription' },
    { code: 'GCA', amino: 'Ala', desc: 'Projects', section: 'translation' },
    { code: 'UUU', amino: 'Phe', desc: 'Skills', section: 'expression' },
    { code: 'CCC', amino: 'Pro', desc: 'Education', section: 'evolution' },
    { code: 'UAG', amino: 'Stop', desc: 'Contact', section: 'replication' },
  ];

  return (
    <section 
      id="genome" 
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-background/90"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            animate={{
              x: [0, Math.random() * window.innerWidth],
              y: [0, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main Title */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-sm font-code text-primary"
              >
                &gt; Initializing Biocode_Portfolio.exe
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-foreground">Hi, I'm</span>
                <br />
                <span className="bg-gradient-dna bg-clip-text text-transparent">
                  Santhosh J.K.
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-xl lg:text-2xl text-muted-foreground"
              >
                A <span className="text-enzyme font-semibold">Full Stack Developer</span> & 
                <span className="text-protein font-semibold"> Biotech Innovator</span>
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="text-lg text-muted-foreground max-w-lg leading-relaxed"
              >
                Bridging the gap between <span className="text-dna-blue">biology</span> and 
                <span className="text-ribosome"> technology</span>. 
                Crafting innovative web solutions with modern technologies and a passion for problem-solving.
              </motion.p>
            </div>

            {/* Genetic Code Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 }}
            >
              <GeneticCode />
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => onNavigate('translation')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg shadow-glow"
              >
                &lt;/&gt; View My Work
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('replication')}
                className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg"
              >
                🧬 Let's Connect
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-8"
          >
            {/* 3D DNA Helix */}
            <div className="h-96 relative">
              <DNAHelix className="dna-helix" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
            </div>

            {/* Interactive Codons */}
            <div className="space-y-4">
              <h3 className="text-lg font-code text-center text-muted-foreground">
                Click a codon to explore →
              </h3>
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">
                {codons.map((codon, index) => (
                  <motion.div
                    key={codon.code}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.7 + index * 0.2 }}
                  >
                    <CodonButton
                      codon={codon.code}
                      aminoAcid={codon.amino}
                      description={codon.desc}
                      onClick={() => onNavigate(codon.section)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm font-code">Scroll to decode genome</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}