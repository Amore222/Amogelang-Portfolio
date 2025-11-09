import { motion } from 'motion/react';
import { Heart, Terminal, Github, Linkedin, Twitter, Mail, ArrowUp, Code2, Zap } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Amore222', label: 'GitHub', color: 'hover:text-purple-500' },
  { icon: Linkedin, href: 'linkedin.com/in/amogelang-ntia-3030b616b', label: 'LinkedIn', color: 'hover:text-blue-500' },
  { icon: Mail, href: 'ntiarose3@gmail.com', label: 'Email', color: 'hover:text-pink-500' },
];

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-primary/20 bg-card/30 backdrop-blur-sm">
      {/* Animated gradient lines */}
      <motion.div
        className="absolute top-0 left-0 h-px bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
        animate={{ 
          x: ['-100%', '100%'],
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
      />
      
      {/* Animated background orbs */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
            </motion.div>
            <p className="text-sm text-muted-foreground mb-4">
              Crafting digital experiences with clean code and creative solutions.
            </p>
            
            {/* Tech Stack Icons */}
            <div className="flex gap-2">
              {[Code2, Terminal, Zap].map((Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-primary/20 flex items-center justify-center"
                >
                  <Icon className="w-4 h-4" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-4 text-sm">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                    whileHover={{ scale: 1.5 }}
                  />
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social & Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-4 text-sm">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-primary/20 flex items-center justify-center transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-3 rounded-lg bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30"
            >
              <div className="flex items-center gap-2 text-sm">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-muted-foreground">Available for work</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-6">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
            animate={{ 
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Terminal className="w-4 h-4" />
            <span>© 2025 Amogelang Ntia. All rights reserved.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span>Built with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            </motion.div>
            <span>React, TypeScript & Tailwind</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-sm text-muted-foreground font-mono"
          >
            <span className="text-green-500">{'>'}</span> 
            <span>status:</span>
            <motion.span 
              className="text-cyan-500"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              online
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/50 transition-shadow group"
      >
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.div>
        
        {/* Pixel corners on button */}
        <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-white/50" />
        <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-white/50" />
      </motion.button>

      {/* Pixel decorations */}
      <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-purple-500/30" />
      <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-cyan-500/30" />
    </footer>
  );
}
