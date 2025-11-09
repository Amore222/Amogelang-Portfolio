import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Trophy, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'Tshimologong Digital Innovation Precinct',
    period: 'July 2025 - Present',
    description: 'Contributing to the development of responsive and user-friendly web applications, collaborating with cross-functional teams, implementing best coding practices, and learning full-stack development in a real-world environment.',
  },
  {
    title: 'Front-end Developer',
    company: 'ICEP(Informatics Community Engagement Project)',
    period: 'Jun 2024- June 2025',
    description: 'Developed and maintained multiple client-facing applications using React, Node.js, and MySQL',
  },
];

const education = [
  {
    degree: 'Diploma in Information Technology',
    school: 'Tshwane University of Technology',
    period: '2025',
    description: 'Specialized in Software Development',
    achievements: [
      'Won 2nd place team in Varsity Hackathon',
    ],
  },
  {
    degree: 'Certifications & Courses',
    school: 'Various Platforms',
    period: '2019 - Present',
    description: 'Continuous learning through online courses and certifications.',
    achievements: [
      'AWS Academy Cloud Foundations',
      'Decision Making for Leaders(Udemy)',
      'ALX AiCE certificate',
      'Software Development certificate',
      'Full Stack Develoment certificate'
    ],
  },
];

export function Experience() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="experience">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 mb-4">
            <Trophy className="w-4 h-4 text-orange-500" />
            <span className="text-sm">Quest Log</span>
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey through the tech world - leveling up with each experience and achievement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Work Experience
              </h3>
            </motion.div>

            <div className="space-y-6 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    className="absolute left-4 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-background"
                  />

                  <div className="rounded-2xl overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/40 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-2">
                      <h4>{exp.title}</h4>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground bg-accent/50 px-3 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="text-sm text-primary mb-3">{exp.company}</div>
                    <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>

                    {/* Pixel corner */}
                    <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-primary/20 group-hover:border-pink-500/50 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Education
              </h3>
            </motion.div>

            <div className="space-y-6 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent" />

              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    className="absolute left-4 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 border-4 border-background"
                  />

                  <div className="rounded-2xl overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/40 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-2">
                      <h4>{edu.degree}</h4>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground bg-accent/50 px-3 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </div>
                    </div>
                    
                    <div className="text-sm text-primary mb-3">{edu.school}</div>
                    <p className="text-sm text-muted-foreground mb-4">{edu.description}</p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <motion.div
                          key={achievement}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Pixel corner */}
                    <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-primary/20 group-hover:border-cyan-500/50 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
