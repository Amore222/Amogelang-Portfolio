// import { motion } from 'motion/react';
// import { Mail, MessageSquare, Send, MapPin } from 'lucide-react';
// import { Button } from './ui/button';
// import { Input } from './ui/input';
// import { Textarea } from './ui/textarea';

// export function Contact() {
//   return (
//     <section className="py-20 px-4 relative overflow-hidden" id="contact">
//       {/* Background decoration */}
//       <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 mb-4">
//             <MessageSquare className="w-4 h-4 text-green-500" />
//             <span className="text-sm">Let's Connect</span>
//           </div>
//           <h2 className="mb-4 bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
//             Start a Quest Together
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Have a project in mind or just want to chat? Drop me a message and let's create something amazing!
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="space-y-6"
//           >
//             <div className="rounded-2xl overflow-hidden border-2 border-primary/20 bg-card/50 backdrop-blur-sm p-8">
//               <h3 className="mb-6">Contact Information</h3>
              
//               <div className="space-y-4">
//                 <motion.div
//                   whileHover={{ x: 5 }}
//                   className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-primary/20"
//                 >
//                   <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
//                     <Mail className="w-5 h-5 text-white" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-muted-foreground">Email</div>
//                     <div>ntiarose3@gmail.com</div>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ x: 5 }}
//                   className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-primary/20"
//                 >
//                   <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
//                     <MapPin className="w-5 h-5 text-white" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-muted-foreground">Location</div>
//                     <div>Remote</div>
//                   </div>
//                 </motion.div>
//               </div>

//               {/* Fun fact box */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className="mt-8 p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-primary/20"
//               >
//                 <div className="flex items-center gap-2 mb-2">
//                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                   <span className="text-sm">Available for work</span>
//                 </div>
//                 <p className="text-xs text-muted-foreground">
//                   Currently accepting freelance projects and collaborations. Response time: usually within 24 hours!
//                 </p>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="rounded-2xl overflow-hidden border-2 border-primary/20 bg-card/50 backdrop-blur-sm p-8">
//               <h3 className="mb-6">Send a Message</h3>
              
//               <form className="space-y-4">
//                 <div>
//                   <label className="block mb-2 text-sm">Name</label>
//                   <Input
//                     placeholder="Enter your name"
//                     className="bg-accent/50 border-primary/20 focus:border-purple-500/50"
//                   />
//                 </div>

//                 <div>
//                   <label className="block mb-2 text-sm">Email</label>
//                   <Input
//                     type="email"
//                     placeholder="your@email.com"
//                     className="bg-accent/50 border-primary/20 focus:border-cyan-500/50"
//                   />
//                 </div>

//                 <div>
//                   <label className="block mb-2 text-sm">Message</label>
//                   <Textarea
//                     placeholder="Tell me about your project..."
//                     rows={5}
//                     className="bg-accent/50 border-primary/20 focus:border-pink-500/50 resize-none"
//                   />
//                 </div>

//                 <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                   <Button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:opacity-90 transition-opacity"
//                   >
//                     <Send className="w-4 h-4 mr-2" />
//                     Send Message
//                   </Button>
//                 </motion.div>
//               </form>

//               {/* Pixel decorations */}
//               <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-cyan-500/50" />
//               <div className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-purple-500/50" />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
