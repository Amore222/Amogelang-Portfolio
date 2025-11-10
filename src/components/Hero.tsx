import { Github, Linkedin, Twitter, Mail, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImage from '../assets/MyPic.jpeg';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Amore222', label: 'GitHub', color: 'hover:text-purple-500' },
  { icon: Linkedin, href: 'www.linkedin.com/in/amogelang-ntia-3030b616b', label: 'LinkedIn', color: 'hover:text-blue-500' },
  { icon: Mail, href: 'ntiarose3@gmail.com', label: 'Email', color: 'hover:text-pink-500' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Social Links - Top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-4 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className={`w-12 h-12 rounded-lg bg-accent/50 backdrop-blur-sm border-2 border-primary/20 flex items-center justify-center transition-colors ${social.color}`}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-3xl blur-xl"
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <div className="relative w-64 md:w-80  rounded-3xl overflow-hidden border-4 border-primary/20 bg-accent/50 backdrop-blur-sm">
              <ImageWithFallback
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover "
              />
              {/* Pixel corner decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-4 border-t-4 border-purple-500" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-4 border-t-4 border-cyan-500" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-4 border-b-4 border-pink-500" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-4 border-b-4 border-purple-500" />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-4 flex items-center justify-center md:justify-start gap-2"
            >
              <Code2 className="w-6 h-6 text-cyan-500" />
              <span className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-sm">
                Software Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent"
            >
              Level Up Your Code
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-6 text-muted-foreground"
            >
              <p className="mb-2">Hi, I'm <span className="text-primary">Amogelang Ntia</span> 👋</p>
              <p>Software developer crafting digital experiences with code and creativity.</p>
              <p className="mt-2 font-mono text-sm">
                <span className="text-purple-500">{'>'}</span> console.log(<span className="text-cyan-500">"Let's build something amazing!"</span>)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white relative overflow-hidden group"
              >
                <span className="relative z-10">View Projects</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg border-2 border-primary/20 bg-accent/50 backdrop-blur-sm hover:border-cyan-500/50 transition-colors"
              >
                Download CV
              </motion.button>
            </motion.div>

            {/* Gaming Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
            >
         
                
        
        
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
