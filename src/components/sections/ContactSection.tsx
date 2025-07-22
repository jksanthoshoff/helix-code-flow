import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isBinding, setIsBinding] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBinding(true);
    
    // Simulate ligand-receptor binding
    setTimeout(() => {
      setIsBinding(false);
      toast.success("Message transcribed successfully! I'll respond soon.", {
        description: "Ligand-receptor binding completed"
      });
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const contactMethods = [
    {
      type: "Email Receptor",
      codon: "AUG",
      value: "jksanthosh159@gmail.com",
      icon: Mail,
      href: "mailto:jksanthosh159@gmail.com",
      color: "text-enzyme"
    },
    {
      type: "GitHub Profile",
      codon: "GCA",
      value: "santhoshjk159",
      icon: Github,
      href: "https://github.com/santhoshjk159",
      color: "text-protein"
    },
    {
      type: "LinkedIn Network",
      codon: "UUU",
      value: "santhosh-jk",
      icon: Linkedin,
      href: "https://linkedin.com/in/santhosh-jk",
      color: "text-dna-blue"
    },
    {
      type: "Location Marker",
      codon: "CCC",
      value: "India",
      icon: MapPin,
      href: "#",
      color: "text-ribosome"
    }
  ];

  return (
    <section id="replication" className="min-h-screen py-20 bg-gradient-to-br from-background to-background/90">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-primary">Replication</span> Phase
          </h2>
          <p className="text-xl text-muted-foreground font-code">
            // Ligand-receptor binding for information exchange
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Form (Ligand Binding) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-dna rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary-foreground" />
                  </div>
                  Message Transcription
                </CardTitle>
                <p className="text-muted-foreground">
                  Send your ligand (message) to bind with my receptor (inbox)
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input - mRNA Cap */}
                  <div>
                    <label className="text-sm font-code text-muted-foreground mb-2 block">
                      Name (mRNA Cap) <Badge variant="outline" className="ml-2 text-xs">Required</Badge>
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your name..."
                      required
                      className="border-border focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Email Input - Start Codon */}
                  <div>
                    <label className="text-sm font-code text-muted-foreground mb-2 block">
                      Email (Start Codon) <Badge variant="outline" className="ml-2 text-xs">AUG</Badge>
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@domain.com"
                      required
                      className="border-border focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Message Input - Gene Body */}
                  <div>
                    <label className="text-sm font-code text-muted-foreground mb-2 block">
                      Message (Gene Body) <Badge variant="outline" className="ml-2 text-xs">Sequence</Badge>
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Write your message here..."
                      rows={5}
                      required
                      className="border-border focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button - Translation Trigger */}
                  <Button
                    type="submit"
                    disabled={isBinding}
                    className={`
                      w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg
                      ${isBinding ? 'animate-pulse' : ''}
                      shadow-glow
                    `}
                  >
                    {isBinding ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Binding in progress...
                      </span>
                    ) : (
                      'Initiate Translation 🧬'
                    )}
                  </Button>
                </form>

                {/* Binding Animation */}
                {isBinding && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-4"
                  >
                    <div className="flex items-center justify-center space-x-4">
                      <motion.div
                        animate={{ x: [0, 20, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-6 h-6 bg-primary rounded-full"
                      />
                      <span className="text-muted-foreground font-code">→</span>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-8 h-8 bg-primary/30 rounded-full border-2 border-primary"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Ligand binding to receptor...
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Right - Contact Methods (Receptor Types) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="bg-card/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Available Receptors
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  Multiple binding sites for different types of interactions
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.div
                      key={method.type}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card 
                        className={`
                          cursor-pointer transition-all duration-300 
                          hover:border-current ${method.color} border-border/30
                          hover:shadow-glow
                        `}
                        onClick={() => method.href !== '#' && window.open(method.href, '_blank')}
                      >
                        <CardContent className="p-4 flex items-center space-x-4">
                          <div className={`w-10 h-10 rounded-full bg-current opacity-20 flex items-center justify-center`}>
                            <Icon className={`w-5 h-5 ${method.color}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-foreground">{method.type}</span>
                              <Badge variant="outline" className="font-code text-xs">
                                {method.codon}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{method.value}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-semibold text-foreground">System Status: ACTIVE</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    All receptors are functional and ready for ligand binding
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 font-code">
                    Response time: ~24 hours | Success rate: 99.9%
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}