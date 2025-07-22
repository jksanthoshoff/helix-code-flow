import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BioNavigation from '@/components/BioNavigation';
import GenomeSection from '@/components/sections/GenomeSection';
import TranscriptionSection from '@/components/sections/TranscriptionSection';
import TranslationSection from '@/components/sections/TranslationSection';
import ExpressionSection from '@/components/sections/ExpressionSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('genome');

  // Smooth scroll to section
  const navigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['genome', 'transcription', 'translation', 'expression', 'replication'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Bio Navigation */}
      <BioNavigation activeSection={activeSection} onNavigate={navigateToSection} />

      {/* Cursor Trail Effect */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-primary/30 rounded-full pointer-events-none z-40 mix-blend-screen"
        animate={{
          x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
          y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Page Sections */}
      <main>
        {/* Genome Section - Landing/Hero */}
        <GenomeSection onNavigate={navigateToSection} />

        {/* Transcription Section - About */}
        <TranscriptionSection />

        {/* Translation Section - Projects */}
        <TranslationSection />

        {/* Expression Section - Skills */}
        <ExpressionSection />

        {/* Replication Section - Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border/30 bg-card/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-dna rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="font-code text-xl font-bold text-primary">&lt;Biocode/&gt;</span>
            </div>
            
            <p className="text-muted-foreground font-code">
              © 2024 Santhosh J.K. - Where Biology Meets Technology
            </p>
            
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <span>Genome Sequence: v2.0.24</span>
              <span>•</span>
              <span>Expression: ACTIVE</span>
              <span>•</span>
              <span>Replication: ONGOING</span>
            </div>
            
            <div className="text-xs text-muted-foreground font-code max-w-2xl mx-auto leading-relaxed">
              "Just as DNA stores the instructions for life, code stores the instructions for innovation. 
              This portfolio is a living document of my journey in bridging biological systems with digital solutions."
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
