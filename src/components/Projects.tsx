import { motion } from 'motion/react';
import { ExternalLink, Github, Hospital, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import melula_p from '../assets/melula.png';
import recipe_p from '../assets/recipe.png';
import streaming from '../assets/Streaming.png';
import task from '../assets/task-todo.png';
import hospi from '../assets/hospital.png';

const projects = [
  {
    id: 1,
    title: 'Recipe Finder',
    description: 'Find and explore recipes easily with a simple, interactive interface.',
    image: recipe_p,
    tags: ['React', 'JavaScript', 'Tailwindcss'],
    gradient: 'from-purple-500 to-pink-500',
    demoUrl: 'https://recipe-finder-app-bice-zeta.vercel.app/',
    codeUrl: 'https://github.com/AmogelangNtia/gaming-dashboard',
  },
  {
    id: 2,
    title: 'Streaming Movies',
    description: 'Watch your favorite movies online with a smooth, easy-to-use platform.',
    image: streaming,
    tags: ['React', 'JavaScript', 'Node.js', 'Tailwindcss'],
    gradient: 'from-cyan-500 to-blue-500',
    demoUrl: 'https://streaming-cinego-app-3.onrender.com',
    codeUrl: 'https://github.com/amogelang/finbridge',
  },
  {
    id: 3,
    title: 'Melula',
    description: 'An online store that makes shopping simple, fast, and secure.',
    image: melula_p,
    tags: ['React', 'JavaScript', 'HTML','CSS'],
    gradient: 'from-pink-500 to-orange-500',
    demoUrl: 'https://melula-app-7mlm.vercel.app/',
    codeUrl: 'https://github.com/Amore222/Melula-App.git',
  },
  {
    id: 4,
    title: 'Task Todo',
    description: 'Keep track of your tasks and stay organized effortlessly.',
    image: task,
    tags: ['React', 'JavaScript','Tailwind'],
    gradient: 'from-pink-500 to-orange-500',
    demoUrl: 'https://task-tracker-app-drn3.vercel.app/',
    codeUrl: 'https://github.com/Amore222/TaskTracker-App.git',
  },
  {
    id: 5,
    title: 'Hospital File Management System',
    description: 'Help hospitals manage patient records and daily tasks smoothly.',
    image: hospi,
    tags: ['React', 'JavaScript','HTML','CSS'],
    gradient: 'from-pink-500 to-orange-500',
    demoUrl: '#',
    codeUrl: 'https://github.com/JonathanKeamogetswe/TechMasters-Hospital-file-management-sys.git',
  },
];


export function Projects() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="projects">
      {/* Background line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span className="text-sm">Featured Work</span>
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent text-3xl font-bold">
            Epic Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the quests I've completed. Each project is a unique adventure showcasing different skills and technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}
                  />
                  <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-white" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-white" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-accent text-xs border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.a>
                    )}

                    {project.codeUrl && (
                      <motion.a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/20 bg-accent/50 text-sm hover:border-cyan-500/50 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Glow effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} blur-xl -z-10 opacity-50`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
