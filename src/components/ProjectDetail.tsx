import { FiExternalLink, FiGithub, FiX, FiClock, FiUsers, FiBriefcase, FiCode, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { projectsDetails } from "../data/projectsData";

interface ProjectDetailProps {
  projectId: number;
  isOpen: boolean;
  onClose: () => void;
}

const tabs = ['Overview', 'Challenges', 'Tech Stack'] as const;
type Tab = typeof tabs[number];

export function ProjectDetail({ projectId, isOpen, onClose }: ProjectDetailProps) {
  const project = projectsDetails.find((p) => p.id === projectId);
  const [activeTab, setActiveTab] = useState<Tab>('Overview');

  return (
    <AnimatePresence onExitComplete={() => setActiveTab('Overview')}>
      {isOpen && project && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* ── Floating Particles behind modal ── */}
          <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-purple-400/60"
                style={{
                  left: `${15 + i * 11}%`,
                  top: `${30 + (i % 3) * 15}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          {/* ── Modal ── */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              key="modal"
              className="relative w-full max-w-2xl max-h-[92vh] overflow-hidden rounded-3xl flex flex-col"
              style={{
                background: 'linear-gradient(135deg, #0a0a0f 0%, #11111b 50%, #0a0a0f 100%)',
                boxShadow: '0 0 0 1px rgba(168,85,247,0.2), 0 25px 80px rgba(0,0,0,0.8), 0 0 60px rgba(168,85,247,0.08)',
              }}
              initial={{ opacity: 0, scale: 0.8, y: 80, rotateX: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 80 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* ── Animated corner accents ── */}
              <motion.div className="absolute top-0 left-0 w-16 h-16 pointer-events-none z-20"
                animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity }}>
                <div className="absolute top-0 left-0 w-6 h-px bg-gradient-to-r from-purple-500 to-transparent" />
                <div className="absolute top-0 left-0 w-px h-6 bg-gradient-to-b from-purple-500 to-transparent" />
              </motion.div>
              <motion.div className="absolute top-0 right-0 w-16 h-16 pointer-events-none z-20"
                animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}>
                <div className="absolute top-0 right-0 w-6 h-px bg-gradient-to-l from-cyan-500 to-transparent" />
                <div className="absolute top-0 right-0 w-px h-6 bg-gradient-to-b from-cyan-500 to-transparent" />
              </motion.div>
              <motion.div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none z-20"
                animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}>
                <div className="absolute bottom-0 left-0 w-6 h-px bg-gradient-to-r from-pink-500 to-transparent" />
                <div className="absolute bottom-0 left-0 w-px h-6 bg-gradient-to-t from-pink-500 to-transparent" />
              </motion.div>
              <motion.div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none z-20"
                animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}>
                <div className="absolute bottom-0 right-0 w-6 h-px bg-gradient-to-l from-purple-500 to-transparent" />
                <div className="absolute bottom-0 right-0 w-px h-6 bg-gradient-to-t from-purple-500 to-transparent" />
              </motion.div>

              {/* ── Hero Image with cinematic overlay ── */}
              <div className="relative h-56 shrink-0 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://placehold.co/800x400/1a1a2e/a855f7?text=Project';
                  }}
                />
                {/* Multi-layer cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-cyan-900/30" />

                {/* Animated scan-line */}
                <motion.div
                  className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
                  animate={{ top: ['0%', '100%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
                />

                {/* Close button */}
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 text-white hover:border-red-500/60 hover:bg-red-500/10 transition-all z-10"
                >
                  <FiX className="w-4 h-4" />
                </motion.button>

                {/* Project ID badge */}
                <motion.div
                  className="absolute top-4 left-4 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-purple-500/30 font-mono text-xs text-purple-400"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  PROJECT_{String(project.id).padStart(2, '0')}
                </motion.div>

                {/* Title at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <motion.div
                    className="flex items-center gap-2 mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <FiChevronRight className="w-3 h-3 text-purple-400" />
                    <span className="text-purple-400 text-xs font-mono uppercase tracking-[0.2em]">
                      {project.projectType} Project
                    </span>
                  </motion.div>
                  <motion.h2
                    className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    {project.title}
                  </motion.h2>
                </div>
              </div>

              {/* ── Meta stat row ── */}
              <motion.div
                className="grid grid-cols-4 border-y border-white/5 shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                {[
                  { icon: FiUsers, label: 'Team', value: project.teamType, color: '#a855f7' },
                  { icon: FiBriefcase, label: 'Type', value: project.projectType, color: '#ec4899' },
                  { icon: FiClock, label: 'Duration', value: project.duration, color: '#22d3ee' },
                  { icon: FiCode, label: 'Role', value: project.role, color: '#818cf8' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex flex-col items-center gap-1 py-3 border-r border-white/5 last:border-0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.06 }}
                    style={{ borderBottom: `2px solid transparent` }}
                    whileHover={{ background: `${item.color}08` }}
                  >
                    <item.icon className="w-3.5 h-3.5" style={{ color: item.color }} />
                    <span className="text-[9px] text-gray-500 uppercase tracking-wider">{item.label}</span>
                    <span className="font-semibold text-[11px] text-center leading-tight" style={{ color: item.color }}>
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* ── Tab Bar ── */}
              <div className="flex border-b border-white/5 px-5 shrink-0">
                {tabs.map((tab, i) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="relative px-4 py-3 text-xs font-semibold tracking-wider uppercase transition-colors"
                    style={{ color: activeTab === tab ? '#a855f7' : '#6b7280' }}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + i * 0.05 }}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-purple-500 to-cyan-500"
                        layoutId="tab-indicator"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* ── Tab Content ── */}
              <div className="overflow-y-auto flex-1 min-h-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="p-5 space-y-5"
                  >
                    {activeTab === 'Overview' && (
                      <>
                        {/* Description */}
                        <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {project.fullDescription}
                          </p>
                        </div>

                        {/* Solutions as highlights */}
                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-3 flex items-center gap-2">
                            <span className="w-4 h-px bg-cyan-400" /> Key Solutions
                          </h3>
                          <div className="space-y-2">
                            {project.solutions.map((s, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.07 }}
                                className="flex gap-3 items-start group"
                              >
                                <motion.span
                                  className="mt-0.5 w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 text-[10px] font-bold text-cyan-400 group-hover:bg-cyan-500/20 transition-colors"
                                >
                                  {i + 1}
                                </motion.span>
                                <p className="text-gray-300 text-sm leading-relaxed">{s}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* CTA buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                          {project.demoUrl !== '#' && (
                            <motion.a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              className="flex-1 px-5 py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 relative overflow-hidden group"
                              style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
                            >
                              <motion.div
                                className="absolute inset-0"
                                style={{ background: 'linear-gradient(135deg, #ec4899, #22d3ee)' }}
                                initial={{ x: '100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                              />
                              <FiExternalLink className="w-4 h-4 relative z-10" />
                              <span className="relative z-10 text-sm">View Live Demo</span>
                            </motion.a>
                          )}
                          <motion.a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03, borderColor: 'rgba(34,211,238,0.6)' }}
                            whileTap={{ scale: 0.97 }}
                            className="flex-1 px-5 py-3 rounded-xl border border-cyan-500/30 text-cyan-400 font-semibold flex items-center justify-center gap-2 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all text-sm"
                          >
                            <FiGithub className="w-4 h-4" />
                            View Source
                          </motion.a>
                        </div>
                      </>
                    )}

                    {activeTab === 'Challenges' && (
                      <div className="space-y-3">
                        <p className="text-xs text-gray-500 mb-4">
                          Real problems encountered and how I conquered them:
                        </p>
                        {project.challenges.map((c, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative p-4 rounded-2xl border border-pink-500/10 bg-pink-500/5 overflow-hidden"
                            whileHover={{ borderColor: 'rgba(236,72,153,0.3)', background: 'rgba(236,72,153,0.08)' }}
                          >
                            <motion.div
                              className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-pink-500 to-purple-500"
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: 1 }}
                              transition={{ delay: i * 0.1 + 0.15, duration: 0.4 }}
                            />
                            <div className="pl-3 flex gap-3 items-start">
                              <span className="text-pink-500 font-black text-lg leading-none mt-0.5">!</span>
                              <p className="text-gray-300 text-sm leading-relaxed">{c}</p>
                            </div>
                            {/* Solution below each challenge */}
                            {project.solutions[i] && (
                              <div className="pl-3 mt-3 pt-3 border-t border-white/5 flex gap-3 items-start">
                                <span className="text-cyan-500 font-black leading-none mt-0.5">✓</span>
                                <p className="text-gray-400 text-xs leading-relaxed">{project.solutions[i]}</p>
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'Tech Stack' && (
                      <div className="space-y-6">
                        {/* Tag pills */}
                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-3">Technologies</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <motion.span
                                key={tag}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.07 }}
                                whileHover={{ scale: 1.1 }}
                                className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium cursor-default relative overflow-hidden group"
                              >
                                <motion.div
                                  className="absolute inset-0 bg-purple-500/10"
                                  initial={{ opacity: 0 }}
                                  whileHover={{ opacity: 1 }}
                                />
                                <span className="relative z-10">{tag}</span>
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Involvement Areas as icon cards */}
                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4">Involvement Areas</h3>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: 'Frontend Dev', icon: '🖥️', color: '#22d3ee', bg: 'rgba(34,211,238,0.06)', border: 'rgba(34,211,238,0.2)' },
                              { label: 'Backend Dev', icon: '⚙️', color: '#a855f7', bg: 'rgba(168,85,247,0.06)', border: 'rgba(168,85,247,0.2)' },
                              { label: 'UI / UX Design', icon: '🎨', color: '#ec4899', bg: 'rgba(236,72,153,0.06)', border: 'rgba(236,72,153,0.2)' },
                              { label: 'Testing & QA', icon: '🧪', color: '#818cf8', bg: 'rgba(129,140,248,0.06)', border: 'rgba(129,140,248,0.2)' },
                            ].map((area, i) => (
                              <motion.div
                                key={area.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 + i * 0.07 }}
                                whileHover={{ scale: 1.04 }}
                                className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border text-center cursor-default"
                                style={{ background: area.bg, borderColor: area.border }}
                              >
                                <span className="text-2xl">{area.icon}</span>
                                <span className="text-xs font-semibold" style={{ color: area.color }}>{area.label}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
