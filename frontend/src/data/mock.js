export const profile = {
  name: 'Chirag N',
  firstName: 'Chirag',
  logo: 'Chirag',
  role: 'Python Developer',
  headlineTitle: 'Python Developer & BCA Graduate',
  heroName: 'Chirag N',
  location: 'Mysuru, India',
  email: 'chiragn005@gmail.com',
  phone: '+91 76762 04125',
  whatsapp: '917676204125',
  linkedin: 'https://www.linkedin.com/in/chirag-n-94a3a3367',
  github: 'https://github.com/chiragmys',
  instagram: 'https://instagram.com/chiragn_005', // add your profile URL, e.g. 'https://instagram.com/yourhandle' — icon stays hidden until this is set
  avatar: '/me.jpeg',
  copyright: 'Chirag N. All Rights Reserved',
  heroTagline: `Aspiring IT professional with strong foundations in Python, SQL, computer networks, and operating systems. I build clean, data-driven solutions and love turning real-world problems into elegant software.`,
  heroHighlight: 'SDM Degree College, Ujire',
  stats: [
    { value: '8.6', suffix: 'CGPA', label: 'BCA Aggregate' },
    { value: '4+', suffix: '', label: 'Full-stack & Data Projects' },
  ],
};

export const about = {
  heading: 'Every great product begins with an even',
  headingAccent: 'greater purpose',
  paragraphs: [
    `I'm Chirag N, a passionate BCA graduate from SDM Degree College, Ujire, with a strong interest in Python development, SQL analytics, and full-stack web engineering. I enjoy designing clean, data-driven solutions and turning complex problems into intuitive software.`,
    `My recent work includes CanvasFlow, a real-time collaborative whiteboard built on the MERN stack with Google OAuth authentication, live drawing sync, chat, presence, history replay and export support. I've also delivered an end-to-end SQL analytics project on the Zepto e-commerce inventory dataset, focused on data cleaning, pricing and stock-issue detection.`,
    `Alongside academics, I served as Event Head for 'Nevermore Conundrum', a state-level IT Quiz Competition, and I'm an active member of the IT Club. I'm now looking for an entry-level IT role where I can apply my skills, contribute to real-world tasks, and grow as an engineer.`,
  ],
};

export const timeline = [
  {
    date: 'Mar 2026',
    title: 'CanvasFlow — Real-Time Collaborative Whiteboard',
    org: 'Personal Project · MERN Stack',
    tag: 'PROJECT',
    points: [
      'Developed a full-stack MERN application for real-time collaborative drawing on a shared canvas.',
      'Integrated Google OAuth authentication with Node.js and MongoDB for secure data management.',
      'Implemented live drawing sync, in-app chat, user presence, history replay and export support.',
    ],
  },
  {
    date: 'Sep 2025',
    title: 'Zepto Inventory Data Analysis',
    org: 'SQL Analytics Project',
    tag: 'PROJECT',
    points: [
      'Built an end-to-end SQL analytics project using a real e-commerce inventory dataset (Zepto).',
      'Performed data cleaning and exploratory analysis to identify inventory, pricing and stock issues.',
      'Delivered structured insights on stock-outs, mispriced SKUs and category-wise performance.',
    ],
  },
  {
    date: 'Mar 2026',
    title: "Event Head — 'Nevermore Conundrum'",
    org: 'State-Level IT Quiz Competition',
    tag: 'LEADERSHIP',
    points: [
      'Led the planning, coordination and execution of a state-level IT quiz competition.',
      'Managed team assignments, timelines, event flow and cross-team communication.',
      'Coordinated with faculty, sponsors and participating colleges for smooth execution.',
    ],
  },
  {
    date: 'Aug 2023 – May 2026',
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'SDM Degree College, Ujire · 8.6 CGPA',
    tag: 'EDUCATION',
    points: [
      'Coursework in Python, Data Structures, DBMS, Computer Networks and Operating Systems.',
      'Active member of the IT Club, participating in technical and collaborative activities.',
      'Consistent academic performance with a strong project-based learning mindset.',
    ],
  },
  {
    date: '2021 – 2023',
    title: 'Pre-University (PUC)',
    org: 'Vijaya Vittala PU College, Mysuru · 87.6%',
    tag: 'EDUCATION',
    points: [
      'EBAC stream with strong scores in Mathematics and Computer Science.',
      'Built foundational programming and analytical thinking skills.',
    ],
  },
  {
    date: '2021',
    title: 'SSLC (Class 10)',
    org: 'The Acme School, Mysuru · 85.9%',
    tag: 'EDUCATION',
    points: [
      'Completed schooling with distinction and a keen interest in computers.',
    ],
  },
];

export const services = [
  { title: 'Python Development', desc: 'I write clean, modular Python for automation, scripting, and backend logic — with a focus on readability and correctness.', badge: 'Core Language' },
  { title: 'SQL & Data Analysis', desc: 'End-to-end SQL analytics: schema design, joins, data cleaning and business-focused insight reporting.', badge: 'SQL Certified' },
  { title: 'Full Stack Web (MERN)', desc: 'Real-time apps like CanvasFlow using MongoDB, Express, React and Node.js with authentication and live sync.', badge: '1+ Project' },
  { title: 'Computer Networks', desc: 'Solid grasp of TCP/IP, HTTP, DNS and network fundamentals — useful for debugging and building networked apps.', badge: 'Academic Strength' },
  { title: 'Operating Systems', desc: 'Comfortable with OS internals — processes, threads, scheduling and memory — used in system-aware software.', badge: 'Academic Strength' },
  // { title: 'Customer Churn Analysis', desc: 'Performed data preprocessing, SQL querying, exploratory analysis, and visualization to uncover key factors influencing customer churn.', badge: 'Soft Skill' },
  { title: 'Authentication & OAuth', desc: 'Integrated Google OAuth with Node.js and MongoDB in CanvasFlow for secure, production-style user sessions.', badge: 'Hands-on' },
];

export const skills = [
  { name: 'Python', level: 88 },
  { name: 'SQL', level: 90 },
  { name: 'MongoDB', level: 72 },
  { name: 'React.js', level: 70 },
  { name: 'Node.js & Express', level: 68 },
  { name: 'Computer Networks', level: 80 },
  { name: 'Operating Systems', level: 78 },
  { name: 'Git & GitHub', level: 75 },
];

export const certifications = [
  { title: 'Master SQL — From Basics to Pro', issuer: 'Udemy', year: '2025' },
  { title: 'Node.js and React.js', issuer: 'CodeLab Systems', year: '2026' },
];