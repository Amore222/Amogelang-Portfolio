import { useState } from 'react';
import { motion } from 'motion/react';
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectDetail } from './ProjectDetail';
import { GlareCard } from './ui/glare-card';
import { SpotlightCard } from './ui/spotlight-card';
import { projectsDetails as projects } from '../data/projectsData';


export function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const currentProjects = projects.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage);

  const renderProjectCard = (project: typeof projects[0], isActive: boolean) => (
    <div className="h-full group relative transition-all duration-500 hover:-translate-y-2">
      <SpotlightCard className="h-full" spotlightColor="rgba(6, 182, 212, 0.15)">
        <GlareCard className="flex flex-col h-full bg-card relative z-10 border border-primary/20 bg-card/80 backdrop-blur-sm group-hover:border-cyan-500/40 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500">
          {/* Image */}
          <div className="relative h-64 overflow-hidden rounded-t-xl">
            <motion.div
              whileHover={isActive ? { scale: 1.15 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
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
          <div className="p-6 flex flex-col flex-1">
            <h3 className="mb-2 font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-accent/50 text-[11px] font-medium border border-primary/20 backdrop-blur-md text-white/90 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3 mt-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {currentProjects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                className="h-full min-h-[460px] col-span-1"
              >
                {renderProjectCard(project, true)}
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button 
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-5 py-2.5 rounded-full bg-card/80 border border-primary/20 disabled:opacity-50 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors text-white font-medium text-sm backdrop-blur-md"
          >
            Previous
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${currentPage === i + 1 ? 'bg-cyan-400' : 'bg-gray-600 hover:bg-gray-400'}`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-5 py-2.5 rounded-full bg-card/80 border border-primary/20 disabled:opacity-50 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors text-white font-medium text-sm backdrop-blur-md"
          >
            Next
          </button>
        </div>
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
