import { motion, AnimatePresence } from "motion/react";
import { projectsDetails } from "../data/projectsData";
import amo from '../assets/amo.jpg';

interface ProjectDetailProps {
  projectId: number;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetail({ projectId, isOpen, onClose }: ProjectDetailProps) {
  const project = projectsDetails.find((p) => p.id === projectId);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
            onClick={onClose}
          >
            <motion.div
              key="modal"
              className="relative w-full max-w-2xl bg-[#11111b] border border-white/10 rounded-2xl flex flex-col shadow-2xl my-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Top Bar (Close) */}
              <div className="sticky top-0 z-20 flex justify-between items-center p-4 bg-[#11111b]/90 backdrop-blur-xl border-b border-white/5 rounded-t-2xl">
                <h2 className="text-white font-bold text-lg px-2">Project Post</h2>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 py-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <span className="text-sm font-medium">Close</span>
                </motion.button>
              </div>

              <div className="p-4 sm:p-6">
                {/* ── Social Post Header ── */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3 items-center">
                    <img 
                      src={amo} 
                      alt="Amogelang Ntia" 
                      className="w-12 h-12 rounded-full object-cover border border-primary/20"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-white hover:underline cursor-pointer">Amogelang Ntia</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mt-0.5">
                        <span>@amore_dev</span>
                        <span>·</span>
                        <span className="text-cyan-400 font-medium">{project.role}</span>
                        <span>·</span>
                        <span>Just shipped</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Caption (Overview) ── */}
                <div className="mb-4">
                  <p className="text-gray-100 text-[15px] leading-relaxed whitespace-pre-wrap">
                    Just finished building <strong>{project.title}</strong>! {project.fullDescription}
                  </p>
                  
                  {/* Hashtags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-cyan-400 text-sm hover:underline cursor-pointer">
                        #{tag.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── The Image (Uncropped) ── */}
                <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#0a0a0f]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-contain max-h-[60vh]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/800x400/1a1a2e/a855f7?text=Project';
                    }}
                  />
                </div>

                {/* ── Action Metrics ── */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-gray-400 text-sm py-3 border-b border-white/5">
                  <span className="hover:text-pink-500 cursor-pointer transition-colors"><strong>{project.duration}</strong> timeline</span>
                  <span className="hover:text-cyan-500 cursor-pointer transition-colors"><strong>{project.teamType}</strong> effort</span>
                  <span className="hover:text-purple-500 cursor-pointer transition-colors"><strong>{project.projectType}</strong> project</span>
                </div>

                {/* ── Social Engagement Bar Removed ── */}

                {/* ── "Comments" Thread (Challenges & Solutions) ── */}
                  <div className="mt-2 pt-4 border-t border-white/5">
                    <h3 className="text-white font-bold mb-6 px-2">Development Thread</h3>
                    
                    {project.challenges.map((challenge, i) => {
                      const threadTopics = ["Architecture & Planning", "Core Implementation", "Refinement & Polish", "Performance & Scaling"];
                      const currentTopic = threadTopics[i % threadTopics.length];
                      
                      return (
                      <div key={i} className="flex gap-3 mb-6 relative px-2">
                        {/* Thread line connecting avatars if not last */}
                        {i !== project.challenges.length - 1 && (
                          <div className="absolute left-8 top-12 bottom-[-16px] w-[2px] bg-white/10" />
                        )}
                        
                        <img 
                          src={amo} 
                          alt="Amogelang Ntia" 
                          className="w-10 h-10 rounded-full object-cover shrink-0 relative z-10 border border-primary/20"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="font-bold text-white text-sm">Amogelang Ntia</span>
                            <span className="text-gray-500 text-sm">· {currentTopic}</span>
                          </div>
                          
                          <div className="text-gray-300 text-sm leading-relaxed mb-3">
                            <span className="text-pink-400 font-semibold">Problem:</span> {challenge}
                          </div>
                          
                          {project.solutions[i] && (
                            <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 mt-2">
                              <p className="text-cyan-100 text-sm leading-relaxed">
                                <span className="text-cyan-400 font-semibold">Resolution:</span> {project.solutions[i]}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )})}
                  </div>

                {/* ── Actual Functional CTAs ── */}
                <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                  {project.demoUrl && project.demoUrl !== '#' && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3.5 rounded-full text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
                    >
                      View Live Demo
                    </a>
                  )}
                  {project.codeUrl && project.codeUrl !== '#' && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3.5 rounded-full border border-cyan-500/30 text-cyan-400 font-semibold flex items-center justify-center gap-2 bg-transparent hover:bg-cyan-500/10 transition-colors shadow-lg"
                    >
                      View Source Code
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
