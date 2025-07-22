import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function ExpressionSection() {
  const skillDomains = [
    {
      domain: "Frontend Development",
      type: "enzyme",
      skills: [
        { name: "React/Next.js", level: 90, codon: "AUG" },
        { name: "TypeScript", level: 85, codon: "GCA" },
        { name: "Tailwind CSS", level: 88, codon: "UUU" },
        { name: "Three.js", level: 75, codon: "CCC" }
      ]
    },
    {
      domain: "Backend Development",
      type: "protein",
      skills: [
        { name: "Node.js", level: 85, codon: "AAA" },
        { name: "Python", level: 80, codon: "GGG" },
        { name: "PostgreSQL", level: 82, codon: "CUU" },
        { name: "MongoDB", level: 78, codon: "AGA" }
      ]
    },
    {
      domain: "Biotechnology",
      type: "ribosome",
      skills: [
        { name: "Bioinformatics", level: 85, codon: "UAC" },
        { name: "Genomics", level: 80, codon: "CAG" },
        { name: "Data Analysis", level: 88, codon: "UGG" },
        { name: "Research", level: 90, codon: "CGC" }
      ]
    }
  ];

  const certifications = [
    { name: "Full Stack Web Development", issuer: "FreeCodeCamp", year: "2023", type: "enzyme" },
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2023", type: "protein" },
    { name: "Bioinformatics Specialization", issuer: "UC San Diego", year: "2022", type: "ribosome" },
    { name: "Advanced React Development", issuer: "Meta", year: "2023", type: "enzyme" }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'enzyme': return 'text-enzyme border-enzyme/30 bg-enzyme/10';
      case 'protein': return 'text-protein border-protein/30 bg-protein/10';
      case 'ribosome': return 'text-ribosome border-ribosome/30 bg-ribosome/10';
      default: return 'text-primary border-primary/30 bg-primary/10';
    }
  };

  return (
    <section id="expression" className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-protein">Expression</span> Phase
          </h2>
          <p className="text-xl text-muted-foreground font-code">
            // Functional protein domains and enzymatic activities
          </p>
        </motion.div>

        {/* Skills Domains */}
        <div className="space-y-12">
          {skillDomains.map((domain, domainIndex) => (
            <motion.div
              key={domain.domain}
              initial={{ opacity: 0, x: domainIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: domainIndex * 0.2 }}
            >
              <Card className={`${getTypeColor(domain.type)} border-2`}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full bg-current opacity-60`} />
                    {domain.domain}
                    <Badge variant="outline" className="font-code text-xs">
                      Protein Domain
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {domain.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + skillIndex * 0.1 }}
                        className="space-y-3"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-foreground">{skill.name}</span>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="font-code text-xs">
                              {skill.codon}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted"
                        />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications - Post-translational Modifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Post-translational Modifications
            <span className="block text-lg font-normal text-muted-foreground mt-2">
              Professional Certifications & Training
            </span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className={`h-full ${getTypeColor(cert.type)} hover:shadow-glow transition-all duration-300`}>
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <div className={`w-12 h-12 mx-auto rounded-full bg-current opacity-20 flex items-center justify-center mb-3`}>
                        <div className={`w-6 h-6 rounded-full bg-current opacity-80`} />
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                    <Badge variant="outline" className="text-xs">
                      {cert.year}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enzyme Activity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Enzymatic Activity Profile
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { activity: "Problem Solving", efficiency: "95%", color: "text-enzyme" },
                  { activity: "Code Quality", efficiency: "90%", color: "text-protein" },
                  { activity: "Team Collaboration", efficiency: "92%", color: "text-dna-blue" },
                  { activity: "Innovation", efficiency: "88%", color: "text-ribosome" }
                ].map((activity, index) => (
                  <motion.div
                    key={activity.activity}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`text-3xl font-bold ${activity.color} mb-2`}>
                      {activity.efficiency}
                    </div>
                    <div className="text-sm text-muted-foreground">{activity.activity}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}