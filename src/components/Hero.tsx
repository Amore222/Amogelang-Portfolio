/// <reference path="../vite-env.d.ts" />
import { FiGithub, FiLinkedin, FiMail, FiCode } from 'react-icons/fi';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import featuredProjectImg from '../assets/task_management.png';
import { Floating3DObject } from './ui/Floating3DObject';

const socialLinks = [
	{
		icon: FiGithub,
		href: 'https://github.com/Amore222',
		label: 'GitHub',
		color: 'hover:text-purple-500',
	},
	{
		icon: FiLinkedin,
		href: 'https://linkedin.com/in/amogelang-ntia-3030b616b',
		label: 'LinkedIn',
		color: 'hover:text-blue-500',
	},
	{
		icon: FiMail,
		href: 'mailto:ntiarose3@gmail.com',
		label: 'Email',
		color: 'hover:text-pink-500',
	},
];

// 3D Tilt Card wrapper for profile image
function TiltCard({ children }: { children: React.ReactNode }) {
	const ref = useRef<HTMLDivElement>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const springX = useSpring(x, { stiffness: 150, damping: 20 });
	const springY = useSpring(y, { stiffness: 150, damping: 20 });

	const rotateX = useTransform(springY, [-0.5, 0.5], ['17deg', '-17deg']);
	const rotateY = useTransform(springX, [-0.5, 0.5], ['-17deg', '17deg']);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = ref.current?.getBoundingClientRect();
		if (!rect) return;
		const px = (e.clientX - rect.left) / rect.width - 0.5;
		const py = (e.clientY - rect.top) / rect.height - 0.5;
		x.set(px);
		y.set(py);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<motion.div
			ref={ref}
			style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className="relative cursor-pointer"
		>
			{children}
		</motion.div>
	);
}

export function Hero() {
	// Mouse parallax for background orbs
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const springMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
	const springMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

	const orb1X = useTransform(springMouseX, (v) => -v * 30);
	const orb1Y = useTransform(springMouseY, (v) => -v * 30);
	const orb2X = useTransform(springMouseX, (v) => v * 30);
	const orb2Y = useTransform(springMouseY, (v) => v * 30);

	const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
		const { clientX, clientY, currentTarget } = e;
		const rect = currentTarget.getBoundingClientRect();
		const normX = (clientX - rect.left) / rect.width - 0.5;
		const normY = (clientY - rect.top) / rect.height - 0.5;
		mouseX.set(normX);
		mouseY.set(normY);
	};

	return (
		<section
			className="relative w-full min-h-screen flex items-center justify-center overflow-hidden p-0 m-0 -mt-20"
			onMouseMove={handleMouseMove}
		>
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:15px_15px]" />

			{/* Parallax orb */}
			<motion.div
				className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl pointer-events-none"
				style={{ x: orb1X, y: orb1Y }}
				animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
				transition={{ duration: 8, repeat: Infinity }}
			/>
			
			{/* 3D Interactive Floating Object */}
			<div className="absolute inset-0 z-0 pointer-events-auto opacity-60">
				<Floating3DObject />
			</div>

			<div className="relative z-10 max-w-6xl mx-auto">
				<div className="flex flex-col md:flex-row items-center gap-12">
					{/* Social Links - Left Column */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="flex flex-col gap-4 md:order-first"
					>
						{socialLinks.map((social, index) => (
							<motion.a
								key={social.label}
								href={social.href}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.9 }}
								className={`w-12 h-12 rounded-lg bg-accent/50 backdrop-blur-sm border-2 border-primary/20 flex items-center justify-center transition-colors ${social.color}`}
							>
								<social.icon className="w-5 h-5" />
							</motion.a>
						))}
					</motion.div>

					{/* Profile image with 3D tilt effect */}
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
								
					</motion.div>

					<div className="flex-1 text-center md:text-left md:ml-12">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="mb-4 flex items-center justify-center md:justify-start gap-2"
						>
							<FiCode className="w-6 h-6 text-cyan-500" />
							<span className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-sm">
								Software Developer
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent text-5xl md:text-7xl font-extrabold tracking-tight"
						>
							Crafting Digital Experiences
						</motion.h1>

						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
							className="mb-6 text-muted-foreground"
						>
							<p className="mb-2">
								Hi, I'm{' '}
								<span className="text-primary">Amogelang Ntia</span>
							</p>
							<p>
								Software developer crafting digital experiences with code and
								creativity.
							</p>
							<p className="mt-2 font-mono text-sm">
								<span className="text-purple-500">{'>'}</span> console.log(
								<span className="text-cyan-500">
									"Let's build something amazing!"
								</span>
								)
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.7 }}
							className="flex flex-wrap gap-4 justify-center md:justify-start"
						>
							<motion.a
								href="#projects"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white relative overflow-hidden group cursor-pointer shadow-lg shadow-purple-500/20 text-lg font-bold"
							>
								<span className="relative z-10">Explore My Work</span>
								<motion.div
									className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
								/>
							</motion.a>

							<motion.a
								href="#contact"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-3 rounded-lg border-2 border-primary/20 bg-accent/50 backdrop-blur-sm hover:border-cyan-500/50 transition-colors cursor-pointer"
							>
								Let's connect
							</motion.a>
						</motion.div>
					</div>
				</div>
			</div>

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
