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
import { Code2, Database, Laptop, Boxes } from "lucide-react";

const techCategories = [
  {
    title: "Frontend",
    icon: Laptop,
    color: "from-purple-500 to-pink-500",
    techs: [
      { name: "React / React Native", icon: <FaReact className="text-cyan-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Angular", icon: <FaAngular className="text-red-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    title: "Backend",
    icon: Database,
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
    icon: Code2,
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
    icon: Boxes,
    color: "from-green-500 to-teal-500",
    techs: [
      { name: "REST API", icon: <FaProjectDiagram className="text-green-500" /> },
      { name: "Agile", icon: <FaTools className="text-gray-400" /> },
      { name: "Authentication (JWT)", icon: <FaLock className="text-gray-500" /> },
      { name: "API Documentation (Swagger)", icon: <SiSwagger className="text-green-600" /> },
    ],
  },
];

export function TechStack() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-4">
            <Code2 className="w-4 h-4 text-cyan-500" />
            <span className="text-sm">Tech Stack</span>
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My development toolkit - weapons of choice for building amazing digital experiences.
          </p>
        </motion.div>

        {/* Tech categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="relative group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-card border border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                {/* Icon header */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3>{category.title}</h3>
                </div>

                {/* Tech list */}
                <div className="space-y-2">
                  {category.techs.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + index * 0.05,
                      }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-sm group/item"
                    >
                      {tech.icon}
                      <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Pixel corners */}
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-primary/20 group-hover:border-primary/60 transition-colors" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-primary/20 group-hover:border-primary/60 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {[
            { label: "⚡ Performance", desc: "Optimization" },
            { label: "🎨 UI/UX", desc: "Design Enthusiast" },
            { label: "🚀 Ship Fast", desc: "Agile Developer" },
          ].map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="px-6 py-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="text-sm">{badge.label}</div>
              <div className="text-xs text-muted-foreground">{badge.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
