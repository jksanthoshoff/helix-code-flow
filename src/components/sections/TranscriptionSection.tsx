import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import santhoshImage from '@/assets/santhosh-bio.jpg';

export default function TranscriptionSection() {
  const traits = [
    { codon: 'AUG', trait: 'Problem Solver', description: 'Analytical thinking meets creative solutions' },
    { codon: 'GUU', trait: 'Tech Enthusiast', description: 'Passionate about emerging technologies' },
    { codon: 'CAA', trait: 'Bio-Innovator', description: 'Bridging biology and technology' },
    { codon: 'UCA', trait: 'Team Player', description: 'Collaborative and communicative' },
  ];

  return (
    <section id="transcription" className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-ribosome">Transcription</span> Phase
          </h2>
          <p className="text-xl text-muted-foreground font-code">
            // Converting DNA blueprint into functional mRNA
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              <img
                src={santhoshImage}
                alt="Santhosh J.K."
                className="rounded-2xl shadow-deep w-full max-w-md mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-dna opacity-20 rounded-2xl group-hover:opacity-30 transition-opacity duration-300" />
              
              {/* Floating DNA Particles */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-dna-blue rounded-full animate-ping opacity-75" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-enzyme rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* Right - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  About My Genetic Code
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a <span className="text-primary font-semibold">Full Stack Developer</span> with 
                  a unique background in <span className="text-protein font-semibold">Biotechnology</span>. 
                  My journey combines the precision of molecular biology with the creativity of web development.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Just as DNA transcribes into mRNA to create functional proteins, I transform ideas 
                  into digital solutions that bridge the gap between <span className="text-dna-blue">biological systems</span> and 
                  <span className="text-ribosome"> modern technology</span>.
                </p>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Core Traits:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {traits.map((trait, index) => (
                      <motion.div
                        key={trait.codon}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="transcription"
                      >
                        <Card className="bg-muted/20 border-border/30 hover:border-primary/50 transition-all duration-300">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3 mb-2">
                              <Badge variant="outline" className="font-code text-xs">
                                {trait.codon}
                              </Badge>
                              <span className="font-semibold text-sm">{trait.trait}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{trait.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gene Expression Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4"
            >
              <Card className="text-center bg-card/30 border-dna-blue/30">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-dna-blue">3+</div>
                  <div className="text-xs text-muted-foreground">Years Coding</div>
                </CardContent>
              </Card>
              <Card className="text-center bg-card/30 border-enzyme/30">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-enzyme">15+</div>
                  <div className="text-xs text-muted-foreground">Projects Built</div>
                </CardContent>
              </Card>
              <Card className="text-center bg-card/30 border-protein/30">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-protein">∞</div>
                  <div className="text-xs text-muted-foreground">Learning</div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}