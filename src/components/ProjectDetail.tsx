import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Github } from "lucide-react";
import { projectsDetails } from "../data/projectsData";

interface ProjectDetailProps {
  projectId: number;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetail({ projectId, isOpen, onClose }: ProjectDetailProps) {
  const project = projectsDetails.find((p) => p.id === projectId);
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

        
          <motion.div
            className="hidden sm:flex fixed inset-0 items-center justify-center z-50 p-4"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ duration: 0.25 }}
          >
            <div className="relative w-full max-w-2xl max-h-[80vh] bg-card/90 border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden">

      
              <button
                onClick={onClose}
                className="absolute top-3 right-3 p-2 rounded-lg bg-accent/30 hover:bg-accent/50 transition"
              >
                <X className="w-5 h-5" />
              </button>

             
              <div className="overflow-y-auto max-h-[80vh] px-6 pt-12 pb-8 space-y-8">

                
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                  {project.title}
                </h2>

               
                <p className="text-muted-foreground text-base leading-relaxed">
                  {project.fullDescription}
                </p>

             
                <div className="grid grid-cols-2 gap-4 bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
                  <MetaItem label="Team Type" value={project.teamType} color="text-purple-400" />
                  <MetaItem label="Project Type" value={project.projectType} color="text-pink-400" />
                  <MetaItem label="Duration" value={project.duration} color="text-cyan-400" />
                  <MetaItem label="Role" value={project.role} color="text-indigo-400" />
                </div>

         
                <Section title="Challenges Faced" color="pink">
                  {project.challenges.map((c, i) => (
                    <p key={i} className="flex gap-3 text-sm">
                      <span className="text-pink-500 font-bold">→</span> {c}
                    </p>
                  ))}
                </Section>

           
                <Section title="How I Overcame Them" color="cyan">
                  {project.solutions.map((s, i) => (
                    <p key={i} className="flex gap-3 text-sm">
                      <span className="text-cyan-500 font-bold">✓</span> {s}
                    </p>
                  ))}
                </Section>

                <Section title="Technologies Used" color="purple">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-sm font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Section>

               
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Demo
                    </a>
                  )}

                  <a
                    href={project.codeUrl}
                    target="_blank"
                    className="flex-1 px-6 py-3 rounded-xl border border-cyan-500 text-cyan-400 font-semibold flex items-center justify-center gap-2 bg-cyan-500/10 hover:bg-cyan-500/20 transition"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

      
          <motion.div
            className="sm:hidden fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-card p-6 border-t border-purple-500/20 shadow-xl"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
           
            <div className="w-10 h-1 bg-white/30 rounded-full mx-auto mb-4" />

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <button onClick={onClose} className="p-2 rounded-lg bg-accent/30">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-muted-foreground text-sm mb-4">{project.fullDescription}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((t) => (
                <span key={t} className="px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/40 text-xs">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {project.demoUrl !== "#" && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg flex items-center gap-2 justify-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              )}

              <a
                href={project.codeUrl}
                target="_blank"
                className="w-full px-4 py-2 border border-cyan-400 text-cyan-300 rounded-lg flex items-center gap-2 justify-center"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}



function MetaItem({ label, value, color }: any) {
  return (
    <div className="text-center">
      <p className="text-xs text-muted-foreground uppercase font-semibold">{label}</p>
      <p className={`font-bold text-lg ${color}`}>{value}</p>
    </div>
  );
}

function Section({ title, color, children }: any) {
  return (
    <div className="space-y-3">
      <h3 className={`text-xl font-bold text-${color}-500`}>{title}</h3>
      <div className={`p-4 rounded-xl border border-${color}-500/20 bg-${color}-500/5 space-y-2`}>
        {children}
      </div>
    </div>
  );
}
