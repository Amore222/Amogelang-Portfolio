import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { FiUser } from 'react-icons/fi';
import myPicImg from '../assets/amo.jpg';

export function MobileShowcase() {
  const [time, setTime] = useState('08:00');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative w-full py-24 flex flex-col items-center justify-center overflow-hidden bg-transparent">
      
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl mx-auto px-4 text-center mb-16 relative z-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-4 shadow-lg shadow-purple-500/10">
          <FiUser className="w-4 h-4 text-cyan-500" />
          <span className="text-sm font-medium tracking-wide">Developer & Creator</span>
        </div>
        <h2 className="mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent text-4xl md:text-5xl font-extrabold tracking-tight">
          About Me
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Step into my developer environment. I specialize in blending clean, robust code with premium interactive designs to build memorable digital experiences.
        </p>
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* Left Side: Developer Mode Terminal */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full max-w-lg rounded-xl overflow-hidden border border-primary/30 bg-black/80 backdrop-blur-xl shadow-2xl shadow-primary/20 flex flex-col h-[400px] md:h-[500px]"
        >
          <div className="bg-gray-900 border-b border-primary/30 p-3 flex items-center">
            <div className="flex gap-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs font-mono text-gray-400">about-me ~ bash</span>
          </div>
          <div className="p-4 md:p-6 font-mono text-sm text-gray-300 flex-1 overflow-y-auto">
            <p className="mb-2"><span className="text-green-500">➜</span> <span className="text-cyan-500">~</span> whoami</p>
            <p className="mb-6 text-gray-100">Amogelang Ntia - Software Developer</p>
            
            <p className="mb-2"><span className="text-green-500">➜</span> <span className="text-cyan-500">~</span> cat experience.txt</p>
            <p className="mb-6 text-yellow-400 font-medium">▹ 2 Years of Professional Experience</p>
            
            <p className="mb-2"><span className="text-green-500">➜</span> <span className="text-cyan-500">~</span> cat passion.json</p>
            <pre className="mb-6 text-purple-400 whitespace-pre-wrap font-mono text-xs md:text-sm">
{`{
  "focus": "Building dynamic user interfaces",
  "style": "Aesthetic & Interactive",
  "tools": ["React", "Motion", "Tailwind"]
}`}
            </pre>
            
            <p className="mb-2"><span className="text-green-500">➜</span> <span className="text-cyan-500">~</span> ./init_creative_mode.sh</p>
            <p className="text-pink-400 animate-pulse">Injecting styles... [OK]</p>
            <p className="text-cyan-400 mt-2 animate-pulse">Rendering mobile preview... [OK]</p>
            <p className="mt-4 flex items-center">
              <span className="text-green-500 mr-2">➜</span> <span className="text-cyan-500 mr-2">~</span>
              <motion.span 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ repeat: Infinity, duration: 1 }}
                className="w-2 h-4 bg-gray-300 inline-block"
              />
            </p>
          </div>
        </motion.div>

        {/* Right Side: Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          className="flex-1 flex justify-center relative"
        >
          {/* Decorative background glow */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-full blur-3xl" 
          />
          
          {/* Premium Phone Mockup Frame with continuous floating animation */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <motion.div 
              whileHover={{ y: -15, rotateY: -5, rotateX: 5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="relative w-[300px] h-[620px] md:w-[320px] md:h-[650px] rounded-[3.5rem] bg-gray-900 p-[2px] shadow-2xl shadow-purple-500/40 z-10 transform-gpu preserve-3d"
            >
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-br from-gray-700 via-gray-900 to-black pointer-events-none" />
            <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-tr from-purple-500/50 via-transparent to-cyan-500/50 opacity-50 pointer-events-none mix-blend-overlay" />
            
            {/* Phone Body (Inner Bezels) */}
            <div className="absolute inset-[6px] rounded-[3rem] bg-black overflow-hidden flex flex-col shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[110px] h-[32px] bg-black rounded-full z-30 flex items-center justify-between px-3 shadow-md border border-gray-800/80">
                 {/* Camera lens detail */}
                 <div className="w-3 h-3 rounded-full bg-gray-900/90 border border-gray-700/50 flex items-center justify-center overflow-hidden">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-900/40 blur-[0.5px]" />
                 </div>
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500/80 animate-pulse" /> {/* Camera active dot */}
              </div>
              
              {/* Screen Content */}
              <div className="relative w-full h-full bg-[#111] overflow-hidden group">
                <img 
                  src={myPicImg} 
                  alt="Profile showcase" 
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                
                {/* Glossy Glare Sweep Effect */}
                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20 pointer-events-none" />

                {/* UI Overlay elements to make it look like a phone screen */}
                <div className="absolute top-0 left-0 right-0 p-5 pt-11 flex justify-between items-center text-white/90 text-xs font-semibold z-10 bg-gradient-to-b from-black/60 via-black/20 to-transparent tracking-wide">
                   <span className="ml-2 drop-shadow-md">{time}</span>
                   <div className="flex gap-2 items-center mr-1">
                      <svg className="w-4 h-4 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                      <div className="w-5 h-2.5 border border-white/90 rounded-sm p-[1px] flex justify-start drop-shadow-md bg-black/20">
                         <div className="w-[85%] h-full bg-white rounded-[1px]" />
                      </div>
                   </div>
                </div>

                {/* Bottom gradient overlay & Text */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none flex flex-col justify-end p-6 z-10">
                   <motion.div 
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ delay: 0.3 }}
                   >
                    
                   </motion.div>
                </div>
                
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-white/70 rounded-full z-20 backdrop-blur-md" />
              </div>
            </div>

            {/* Hardware Buttons */}
            <div className="absolute top-[120px] -left-[2px] w-[3px] h-[30px] bg-gray-700 rounded-l-md shadow-sm" /> {/* Action Button */}
            <div className="absolute top-[170px] -left-[2px] w-[3px] h-[50px] bg-gray-700 rounded-l-md shadow-sm" /> {/* Vol Up */}
            <div className="absolute top-[230px] -left-[2px] w-[3px] h-[50px] bg-gray-700 rounded-l-md shadow-sm" /> {/* Vol Down */}
            <div className="absolute top-[180px] -right-[2px] w-[3px] h-[70px] bg-gray-700 rounded-r-md shadow-sm" /> {/* Power Button */}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
