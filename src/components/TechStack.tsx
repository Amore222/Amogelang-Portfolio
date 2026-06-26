import { motion } from "motion/react";
import {
  FaReact,
  FaGitAlt,
  FaFigma,
  FaAngular,
  FaLock,
  FaTools,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiSwagger,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiTrello,
} from "react-icons/si";
import { FiCode, FiDatabase, FiMonitor, FiBox } from 'react-icons/fi';
import { InfiniteMarquee } from "./ui/infinite-marquee";

const techCategories = [
  {
    title: "Frontend",
    icon: FiMonitor,
    color: "from-purple-500 to-pink-500",
    techs: [
      { name: "React / Native", icon: <FaReact className="text-cyan-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Angular", icon: <FaAngular className="text-red-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    title: "Backend",
    icon: FiDatabase,
    color: "from-cyan-500 to-blue-500",
    techs: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-400" /> },
      { name: "SQL / MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    ],
  },
  {
    title: "Tools",
    icon: FiCode,
    color: "from-pink-500 to-orange-500",
    techs: [
      { name: "Git / GitHub", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Trello", icon: <SiTrello className="text-gray-400" /> },
    ],
  },
  {
    title: "Other",
    icon: FiBox,
    color: "from-green-500 to-teal-500",
    techs: [
      { name: "REST API", icon: <FaProjectDiagram className="text-green-500" /> },
      { name: "Agile", icon: <FaTools className="text-gray-400" /> },
      { name: "Auth (JWT)", icon: <FaLock className="text-gray-500" /> },
      { name: "Swagger", icon: <SiSwagger className="text-green-600" /> },
    ],
  },
];

// Flatten the techCategories for the marquee
const techItems = techCategories.flatMap((category) =>
  category.techs.map((tech) => ({
    name: tech.name,
    icon: tech.icon,
  }))
);

export function TechStack() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-4">
            <FiCode className="w-4 h-4 text-cyan-500" />
            <span className="text-sm">Tech Stack</span>
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent text-4xl font-bold">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My development toolkit - weapons of choice for building amazing digital experiences.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 relative z-10">
          {techCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-card/40 backdrop-blur-md p-8 hover:bg-card/60 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 backdrop-blur-sm border border-white/10`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                {category.techs.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-accent/30 border border-primary/10 hover:border-primary/40 transition-all cursor-default shadow-sm hover:shadow-cyan-500/20"
                  >
                    <div className="text-2xl bg-black/20 p-2 rounded-lg">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-200">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Background Glow */}
              <div className={`absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Infinite Marquee */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="mt-10"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-muted-foreground/80">Continuous Learning & Adapting</h3>
          </div>
          <div className="flex flex-col gap-4">
            <InfiniteMarquee items={techItems} direction="left" speed="slow" />
            <InfiniteMarquee items={[...techItems].reverse()} direction="right" speed="slow" />
          </div>
        </motion.div>

        {/* Achievement badges */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.6 }}
           className="mt-20 pt-8 border-t border-primary/20 flex flex-wrap justify-center gap-4"
        >
          {[
            { label: "Performance", desc: "Optimization" },
            { label: "UI/UX", desc: "Design Enthusiast" },
            { label: "Ship Fast", desc: "Agile Developer" },
          ].map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="px-6 py-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-primary/20 hover:border-primary/40 transition-colors cursor-default"
            >
              <div className="text-sm font-semibold">{badge.label}</div>
              <div className="text-xs text-muted-foreground">{badge.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
