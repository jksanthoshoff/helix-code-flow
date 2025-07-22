import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dna, FlaskConical, Code, User, GraduationCap, Mail } from 'lucide-react';

interface BioNavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function BioNavigation({ activeSection, onNavigate }: BioNavigationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'genome', label: 'Genome', icon: Dna, codon: 'ATG' },
    { id: 'transcription', label: 'About', icon: User, codon: 'AAA' },
    { id: 'translation', label: 'Projects', icon: Code, codon: 'GCA' },
    { id: 'expression', label: 'Skills', icon: FlaskConical, codon: 'UUU' },
    { id: 'evolution', label: 'Education', icon: GraduationCap, codon: 'CCC' },
    { id: 'replication', label: 'Contact', icon: Mail, codon: 'UAG' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 bg-gradient-dna rounded-full flex items-center justify-center">
                  <Dna className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-code text-lg font-bold text-primary">
                  &lt;Biocode/&gt;
                </span>
              </motion.div>

              {/* Navigation Items */}
              <div className="hidden md:flex items-center space-x-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <motion.div key={item.id} whileHover={{ scale: 1.05 }}>
                      <Button
                        variant={isActive ? "default" : "ghost"}
                        size="sm"
                        onClick={() => onNavigate(item.id)}
                        className={`
                          flex items-center space-x-2 font-code text-xs
                          ${isActive 
                            ? 'bg-primary text-primary-foreground shadow-glow' 
                            : 'hover:bg-primary/10 hover:text-primary'
                          }
                        `}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="hidden lg:block">{item.label}</span>
                        <span className="text-[10px] opacity-60 font-mono">
                          {item.codon}
                        </span>
                      </Button>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile Menu */}
              <div className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Dna className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <motion.div
            className="h-1 bg-gradient-dna"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            style={{ transformOrigin: 'left' }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
        </motion.nav>
      )}
    </AnimatePresence>
  );
}