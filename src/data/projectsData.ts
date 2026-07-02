import recipe_p from '../assets/recipe.png';
import streaming from '../assets/movie.png';
import task from '../assets/task-todo.png';
import hospi from '../assets/hospi_2.png';
import youbeauty from '../assets/youbeauty.png';
import taskManagement from '../assets/task_management.png';
import portfolio from '../assets/portfolio.png';
import posImg from '../assets/POS.png';

export const projectsDetails = [
  {
    id: 1,
    title: '0.0S POS',
    description: 'A Point of Sale system with cashier till, owner/admin dashboards, real-time transactions, and role-based staff permissions.',
    fullDescription: 'A comprehensive, cloud-based Point of Sale (POS) Software-as-a-Service solution. It features a high-performance cashier till interface, real-time transaction processing, role-based access for staff, and extensive admin dashboards for business owners to track analytics and sales.',
    image: posImg,
    tags: ['Next.js', 'Express', 'TypeScript', 'Prisma', 'Supabase', 'PostgreSQL', 'Tailwindcss', 'Turborepo'],
    gradient: 'from-purple-500 to-cyan-500',
    demoUrl: 'https://www.00s.co.za/',
    codeUrl: '#',
    teamType: 'Team',
    projectType: 'Client',
    challenges: [
      'Building a highly responsive, real-time cashier till interface',
      'Implementing secure role-based access control (RBAC)',
      'Designing a scalable multi-tenant database architecture'
    ],
    solutions: [
      'Utilized Next.js and Supabase for real-time data synchronization',
      'Configured secure permissions using Prisma and custom middleware',
      'Architected a robust PostgreSQL database structure for multi-tenant SaaS'
    ],
    duration: '2 months',
    role: 'Full Stack Developer'
  },
  {
    id: 2,
    title: 'Streaming Movies',
    description: 'Watch your favorite movies online with a smooth, easy-to-use platform.',
    fullDescription: 'A full-featured streaming platform with movie catalog, user authentication, and playback functionality.',
    image: streaming,
    tags: ['React', 'JavaScript', 'Node.js', 'Tailwindcss', 'Express', 'MongoDB','TMDB API'],
    gradient: 'from-cyan-500 to-blue-500',
    demoUrl: 'https://streaming-cinego-app-3.onrender.com',
    codeUrl: 'https://github.com/amogelang/finbridge',
    teamType: 'Individual',
    projectType: 'Experience',
    challenges: [
      'Streaming video quality optimization',
      'User authentication and payment integration',
      'Database optimization for large media files'
    ],
    solutions: [
      'Implemented adaptive bitrate streaming',
      'Integrated Stripe for secure payments',
      'Used MongoDB with proper indexing for fast queries'
    ],
    duration: '6 weeks',
    role: 'Full Stack Developer'
  },
  {
    id: 3,
    title: 'Task Todo',
    description: 'Keep track of your tasks and stay organized effortlessly.',
    fullDescription: 'Task management application with CRUD operations, local storage, and priority levels.',
    image: task,
    tags: ['React', 'JavaScript', 'Tailwindcss'],
    gradient: 'from-pink-500 to-orange-500',
    demoUrl: 'https://task-tracker-app-drn3.vercel.app/',
    codeUrl: 'https://github.com/Amore222/TaskTracker-App.git',
    teamType: 'Individual',
    projectType: 'Experience',
    challenges: [
      'Implementing persistent data storage',
      'Building an intuitive UI for task management',
      'Adding real-time notifications'
    ],
    solutions: [
      'Used browser local storage with JSON serialization',
      'Designed simple drag-and-drop interface',
      'Implemented toast notifications for user feedback'
    ],
    duration: '4 weeks',
    role: 'Full Stack Developer'
  },
  {
    id: 4,
    title: 'Hospital File Management System',
    description: 'Help hospitals manage patient records and daily tasks smoothly.',
    fullDescription: 'Enterprise-level system for managing patient files, appointments, and hospital operations.',
    image: hospi,
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    gradient: 'from-pink-500 to-orange-500',
    demoUrl: '#',
    codeUrl: 'https://github.com/JonathanKeamogetswe/TechMasters-Hospital-file-management-sys.git',
    teamType: 'Team',
    projectType: 'Client',
    challenges: [
      'Handling sensitive patient data securely',
      'Designing an intuitive system for healthcare staff',
      'Ensuring HIPAA compliance'
    ],
    solutions: [
      'Implemented role-based access control',
      'Created comprehensive user training documentation',
      'Followed healthcare data protection best practices'
    ],
    duration: '8 weeks',
    role: 'Lead Frontend Developer'
  },
  {
    id: 5,
    title: 'You-Beauty',
    description: 'An online store that makes shopping simple, fast, and secure.',
    fullDescription: 'E-commerce platform with product catalog, shopping cart, and secure checkout process.',
    image: youbeauty,
    tags: ['React', 'JavaScript', 'HTML', 'Tailwindcss'],
    gradient: 'from-pink-500 to-orange-500',
    demoUrl: 'https://you-beauty-app.vercel.app/',
    codeUrl: 'https://github.com/Amore222/You-beauty.App.git',
    teamType: 'Individual',
    projectType: 'Experience',
    challenges: [
      'Building a secure shopping cart system',
      'Implementing product filtering and search',
      'Creating an intuitive checkout flow'
    ],
    solutions: [
      'Used local storage with encryption for cart data',
      'Built advanced filtering with multiple categories',
      'Designed a step-by-step checkout with form validation'
    ],
    duration: '6 weeks',
    role: 'Full Stack Developer'
  },
  {
    id: 6,
    title: 'Task management system',
    description: 'A productivity platform for managing tasks, tracking progress, and improving team collaboration.',
    fullDescription: 'A comprehensive task management platform designed to streamline team collaboration, track project progress, and manage daily workflows efficiently.',
    image: taskManagement,
    tags: ['React', 'TypeScript', 'Tailwindcss', 'Nodejs', 'MongoDB'],
    gradient: 'from-pink-500 to-orange-500',
    demoUrl: 'https://task-management-v91m.onrender.com',
    codeUrl: 'https://github.com/Amore222/Task_Todo.App.git',
    teamType: 'Individual',
    projectType: 'Experience',
    challenges: [
      'Building real-time synchronization for team collaboration',
      'Implementing complex drag-and-drop kanban boards',
      'Designing a scalable backend architecture with MongoDB'
    ],
    solutions: [
      'Utilized WebSockets for real-time updates across clients',
      'Implemented optimized rendering for complex UI components',
      'Designed efficient database schemas for fast querying'
    ],
    duration: '3 months',
    role: 'Full Stack Developer'
  },
  {
    id: 7,
    title: 'Portfolio',
    description: 'A portfolio website for showcasing projects and skills.',
    fullDescription: 'A personal portfolio website built with modern web technologies to showcase projects, skills, and professional experience with interactive animations.',
    image: portfolio,
    tags: ['React', 'TypeScript', 'Tailwindcss', 'Framer-motion'],
    gradient: 'from-pink-500 to-orange-500',
    demoUrl: 'https://amogelang-portfolio-fvm6.vercel.app/',
    codeUrl: 'https://github.com/Amore222/Amogelang-Portfolio.git',
    teamType: 'Individual',
    projectType: 'Experience',
    challenges: [
      'Creating smooth and performant animations',
      'Designing an engaging and responsive user interface',
      'Optimizing performance and accessibility'
    ],
    solutions: [
      'Used Framer Motion for complex, high-performance animations',
      'Implemented responsive design principles with Tailwind CSS',
      'Ensured semantic HTML and proper accessibility attributes'
    ],
    duration: '8 months',
    role: 'Full Stack Developer'
  },
  
  {
    id: 8,
    title: 'Recipe Finder',
    description: 'Find and explore recipes easily with a simple, interactive interface.',
    fullDescription: 'A comprehensive recipe search application that allows users to discover recipes based on ingredients and cuisines.',
    image: recipe_p,
    tags: ['React', 'JavaScript', 'Tailwindcss'],
    gradient: 'from-purple-500 to-pink-500',
    demoUrl: 'https://recipe-finder-app-r3vk.vercel.app/',
    codeUrl: 'https://github.com/AmogelangNtia/gaming-dashboard',
    teamType: 'Individual',
    projectType: 'Experience',
    challenges: [
      'Handling large datasets of recipes efficiently',
      'Implementing search filters without performance issues',
      'Creating a responsive design for mobile users'
    ],
    solutions: [
      'Implemented pagination and lazy loading for better performance',
      'Used debouncing for search input to reduce API calls',
      'Built mobile-first responsive design with Tailwind CSS'
    ],
    duration: '3 weeks',
    role: 'Frontend Developer'
  },
];

