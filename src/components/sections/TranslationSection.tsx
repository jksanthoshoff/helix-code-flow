import { motion } from 'framer-motion';
import ProteinCard from '@/components/ProteinCard';

export default function TranslationSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack marketplace with payment integration and real-time inventory management",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      githubUrl: "https://github.com/santhoshjk159",
      demoUrl: "https://demo-ecommerce.vercel.app",
      type: "enzyme" as const
    },
    {
      title: "Bio-Data Analyzer",
      description: "Bioinformatics tool for genomic data analysis and visualization",
      techStack: ["Python", "Pandas", "Plotly", "FastAPI", "PostgreSQL"],
      githubUrl: "https://github.com/santhoshjk159",
      demoUrl: "https://bio-analyzer.vercel.app",
      type: "protein" as const
    },
    {
      title: "Real-time Chat App",
      description: "Scalable messaging platform with WebSocket connections and media sharing",
      techStack: ["Next.js", "TypeScript", "Prisma", "WebSocket", "Redis"],
      githubUrl: "https://github.com/santhoshjk159",
      demoUrl: "https://chat-app.vercel.app",
      type: "ribosome" as const
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with Kanban boards and team features",
      techStack: ["React", "Express.js", "MySQL", "JWT", "Material-UI"],
      githubUrl: "https://github.com/santhoshjk159",
      demoUrl: "https://task-manager.vercel.app",
      type: "enzyme" as const
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Real-time weather data visualization with predictive analytics",
      techStack: ["Vue.js", "D3.js", "Python", "FastAPI", "InfluxDB"],
      githubUrl: "https://github.com/santhoshjk159",
      demoUrl: "https://weather-dashboard.vercel.app",
      type: "protein" as const
    },
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio with modern animations and 3D elements",
      techStack: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
      githubUrl: "https://github.com/santhoshjk159",
      demoUrl: "https://santhoshjk.vercel.app",
      type: "ribosome" as const
    }
  ];

  return (
    <section id="translation" className="min-h-screen py-20 bg-gradient-to-br from-background to-background/80">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-enzyme">Translation</span> Phase
          </h2>
          <p className="text-xl text-muted-foreground font-code mb-8">
            // Converting mRNA codons into functional protein applications
          </p>
          
          {/* Ribosome Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-20 h-12 bg-gradient-ribosome rounded-full opacity-80 ribosome-move" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-code text-white">
                Ribosome
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProteinCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Translation Process Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Project Development Pipeline
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "Initiation", codon: "AUG", desc: "Project planning & setup", color: "text-dna-blue" },
                { step: "Elongation", codon: "GCA", desc: "Development & iteration", color: "text-enzyme" },
                { step: "Testing", codon: "UUU", desc: "Quality assurance", color: "text-protein" },
                { step: "Termination", codon: "UAG", desc: "Deployment & monitoring", color: "text-ribosome" }
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  className="translation text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full border-2 border-current ${phase.color} flex items-center justify-center font-code text-sm font-bold`}>
                    {phase.codon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{phase.step}</h4>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}