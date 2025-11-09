import { motion } from 'motion/react';
import { Terminal, Gamepad2, Coffee, Zap } from 'lucide-react';

const features = [
  {
    icon: Terminal,
    title: 'Code Debugger',
    description: 'Battling bugs and shipping features since day one.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Gamepad2,
    title: 'Gaming Mindset',
    description: 'Every problem is a level to beat, every solution is an achievement unlocked.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Coffee,
    title: 'Fueled by Caffeine',
    description: 'Coffee in, code out. The endless loop of productivity.',
    color: 'from-orange-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'Always leveling up with new technologies and frameworks.',
    color: 'from-green-500 to-cyan-500',
  },
];

export function About() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="about">
      {/* Animated background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-orange-500/20 border border-pink-500/30 mb-4">
            <Gamepad2 className="w-4 h-4 text-pink-500" />
            <span className="text-sm">Developer Profile</span>
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a software developer who treats coding like a game - strategic, challenging, and incredibly rewarding.
          </p>
        </motion.div>

        {/* Console-style about section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
            {/* Terminal header */}
            <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-b border-primary/20 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm text-muted-foreground font-mono">~/developer-profile</span>
            </div>
            
            {/* Terminal content */}
            <div className="p-6 font-mono text-sm space-y-2">
              <div>
                <span className="text-green-500">$</span>
                <span className="text-muted-foreground"> cat about.txt</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground pl-4 space-y-1"
              >
                <p>{'> Passionate about creating intuitive and performant web applications'}</p>
                <p>{'> 1+ years of experience in front-end development'}</p>
                <p>{'> Love solving complex problems with elegant solutions'}</p>
                <p>{'> Open source contributor and continuous learner'}</p>
                <p>{'> When not coding: tv series, coffee, repeat'}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="text-green-500">$</span>
                <motion.span
                  className="inline-block w-2 h-4 bg-green-500 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-card border border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>

                {/* Pixel decorations */}
                <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-primary/30" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-primary/30" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress bars - gaming style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 max-w-3xl mx-auto space-y-4"
        >
          {[
            { skill: 'Frontend Development', level: 95, color: 'from-purple-500 to-pink-500' },
            { skill: 'Backend Development', level: 70, color: 'from-cyan-500 to-blue-500' },
            { skill: 'UI/UX Design', level: 80, color: 'from-pink-500 to-orange-500' },
            { skill: 'Problem Solving', level: 98, color: 'from-green-500 to-cyan-500' },
          ].map((item, index) => (
            <motion.div
              key={item.skill}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm">{item.skill}</span>
              </div>
              <div className="h-3 rounded-full bg-accent border border-primary/20 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                  className={`h-full bg-gradient-to-r ${item.color} relative overflow-hidden`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
