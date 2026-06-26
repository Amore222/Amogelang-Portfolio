import { useState } from 'react';
import { motion } from 'motion/react';
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectDetail } from './ProjectDetail';
import { GlareCard } from './ui/glare-card';
import { SpotlightCard } from './ui/spotlight-card';
import { ModernCarousel } from './ui/modern-carousel';
import melula_p from '../assets/melula.png';
import recipe_p from '../assets/recipe.png';
import streaming from '../assets/movie.png';
import task from '../assets/task-todo.png';
import hospi from '../assets/hospi_2.png';
import youbeauty from '../assets/youbeauty.png';
import taskManagement from '../assets/task_management.png';
import portfolio from '../assets/portfolio.png';

const projects = [
  {
    id: 1,
    title: 'Recipe Finder',
    description: 'Find and explore recipes easily with a simple, interactive interface.',
    image: recipe_p,
    tags: ['React', 'JavaScript', 'Tailwindcss'],
    gradient: 'from-purple-500 to-pink-500',
    demoUrl: 'https://recipe-finder-app-r3vk.vercel.app/',
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
    title: 'Task Todo',
    description: 'Keep track of your tasks and stay organized effortlessly.',
    image: task,
    tags: ['React', 'JavaScript','Tailwindcss'],
    gradient: 'from-pink-500 to-orange-500',
    demoUrl: 'https://task-tracker-app-drn3.vercel.app/',
    codeUrl: 'https://github.com/Amore222/TaskTracker-App.git',
  },
  {
    id: 4,
    title: 'Hospital File Management System',
    description: 'Help hospitals manage patient records and daily tasks smoothly.',
    image: hospi,
    tags: ['React', 'JavaScript','HTML','CSS'],
    gradient: 'from-pink-500 to-orange-500',
    demoUrl: '#',
    codeUrl: 'https://github.com/JonathanKeamogetswe/TechMasters-Hospital-file-management-sys.git',
  },
  {
    id: 5,
    title: 'You-Beauty',
    description: 'An online store that makes shopping simple, fast, and secure.',
    image: youbeauty,
    tags: ['React', 'JavaScript','HTML','Tailwindcss'],
    gradient: 'from-pink-500 to-orange-500',
    demoUrl: 'https://you-beauty-app.vercel.app/',
    codeUrl: 'https://github.com/Amore222/You-beauty.App.git',
  },
   {
    id: 6,
    title: 'Task management system',
    description: 'A productivity platform for managing tasks, tracking progress, and improving team collaboration.',
    image: taskManagement,
    tags: ['React', 'TypeScript','Tailwindcss', 'Nodejs', 'MongoDB'],
    gradient: 'from-pink-500 to-orange-500',
    demoUrl: 'https://task-management-v91m.onrender.com',
    codeUrl: 'https://github.com/Amore222/Task_Todo.App.git',
  },
  {
    id: 7,
    title: 'Portfolio',
    description: 'A portfolio website for showcasing projects and skills.',
    image: portfolio,
    tags: ['React', 'TypeScript','Tailwindcss', 'Framer-motion'],
    gradient: 'from-pink-500 to-orange-500',
    demoUrl: 'https://amogelang-portfolio-fvm6.vercel.app/',
    codeUrl: 'https://github.com/Amore222/Amogelang-Portfolio.git',
  },
];


export function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const renderProjectCard = (project: typeof projects[0], isActive: boolean) => (
    <div className="h-full group">
      <SpotlightCard className="h-full" spotlightColor="rgba(6, 182, 212, 0.15)">
        <GlareCard className="flex flex-col h-full bg-card relative z-10 border border-primary/20 bg-card/80 backdrop-blur-sm">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <motion.div
              whileHover={isActive ? { scale: 1.1 } : {}}
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
            <h3 className="mb-2 font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-accent/50 text-xs border border-primary/20 backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-3 py-1 rounded-full bg-accent/50 text-xs border border-primary/20 backdrop-blur-md">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProjectId(project.id);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-md"
              >
                View Details
              </motion.button>

              <div className="flex gap-3">
                {project.demoUrl && project.demoUrl !== '#' && (
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 flex-1 px-4 py-2 rounded-lg bg-black/40 text-white text-sm border border-white/10 hover:border-cyan-500/50 transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Demo
                  </motion.a>
                )}

                {project.codeUrl && (
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 flex-1 px-4 py-2 rounded-lg bg-black/40 text-white text-sm border border-white/10 hover:border-purple-500/50 transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    Code
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </GlareCard>
      </SpotlightCard>
    </div>
  );

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden" id="projects">
      {/* Background line with glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_30px_rgba(168,85,247,0.5)]" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-4">
            <FiStar className="w-4 h-4 text-cyan-500" />
            <span className="text-sm">Featured Work</span>
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent text-4xl font-bold">
            Epic Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the quests I've completed. Each project is a unique adventure showcasing different skills and technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ModernCarousel
            items={projects}
            renderItem={renderProjectCard}
          />
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetail
        projectId={selectedProjectId || 0}
        isOpen={selectedProjectId !== null}
        onClose={() => setSelectedProjectId(null)}
      />
    </section>
  );
}
