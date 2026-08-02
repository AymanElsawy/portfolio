export const profile = {
  name: 'Ayman Elsawy Khalifa',
  role: 'Frontend Developer',
  location: 'Cairo, Egypt',
  email: 'aymn.khalifa94@gmail.com',
  phone: '+201009898383',
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/',
  summary:
    "Frontend Developer with over 4 years of experience building modern, user-friendly, and high-performance web applications. Expertise spans HTML, CSS, JavaScript, TypeScript, Angular, Tailwind CSS, Node.js, Express.js, and MongoDB, with hands-on experience in React.js, Next.js, and Flutter. Currently driving digital transformation at Banque Misr, one of Egypt's largest banks, while independently shipping full-stack web dashboards and iOS apps on the App Store.",
}

export const experience = [
  {
    period: '2024/08 — Present',
    title: 'Engineer III — Frontend Developer',
    company: 'Banque Misr',
    points: [
      "Building and maintaining responsive digital banking platforms serving millions of customers, covering both customer-facing web apps and the corporate banking portal.",
      "Crafting performant, accessible interfaces that enhance customer engagement and streamline banking experiences for one of Egypt's largest financial institutions.",
      'Working in an agile environment with sprint-based delivery cycles, collaborating closely with cross-functional teams across design, backend, and QA.',
    ],
    tags: ['Angular', 'Accessibility', 'Agile'],
  },
  {
    period: '2024/01 — 2024/08',
    title: 'Frontend Developer',
    company: 'Verto Technology',
    points: [
      'Delivered 5+ full-featured client websites end-to-end, each including a public-facing site and a custom CMS / admin dashboard.',
      'Implemented performance optimizations — lazy loading, code splitting, efficient state management — measurably improving load times.',
      'Worked closely with backend developers to integrate RESTful APIs and optimize data retrieval and presentation.',
      'Rebuilt Hewar Group (React.js) and developed Landoor, Kingdom Centre, and Mentholatum Arabia sites and dashboards (Angular). Built the Swiftrise event registration system.',
    ],
    tags: ['React.js', 'Angular', 'REST APIs', 'Performance'],
  },
  {
    period: '2022/03 — 2024/04',
    title: 'Frontend Developer',
    company: 'ThinkLoud',
    points: [
      'Developed and enhanced UI components as part of a MEAN Stack team, improving consistency and usability across products.',
      'Implemented and consumed RESTful APIs using Express.js and Node.js; managed data persistence with MongoDB.',
      'Built custom services for application state management and third-party API integrations, including social media APIs.',
      'Implemented user authentication and authorization flows.',
    ],
    tags: ['MEAN Stack', 'Node.js', 'MongoDB'],
  },
  {
    period: '2021/03 — 2022/03',
    title: 'IT Engineer',
    company: 'Ecotel',
    points: ['Network maintenance and support for a high school network project.'],
    tags: ['Networking'],
  },
]

export const projects = [
  {
    name: 'Hewar Group',
    description: 'Rebuilt the corporate website and its CMS / admin dashboard end-to-end.',
    stack: ['React.js', 'CMS', 'Admin Dashboard'],
    link: 'https://hewargroup.com',
    image: '/projects/hewar-group.jpg',
  },
  {
    name: 'Landoor',
    description: 'Public website plus a custom CMS / administrative dashboard.',
    stack: ['Angular', 'CMS'],
    link: 'https://landoor.net',
    image: '/projects/landoor.jpg',
  },
  {
    name: 'Kingdom Centre',
    description: 'Corporate website with a full administrative dashboard.',
    stack: ['Angular', 'Admin Dashboard'],
    link: 'https://kingdomcentre.com.sa',
    image: '/projects/kingdom-centre.jpg',
  },
  {
    name: 'Mentholatum Arabia',
    description: 'Product website and admin panel for content management.',
    stack: ['Angular', 'Admin Panel'],
    link: 'https://mentholatumarabia.com',
    image: '/projects/mentholatum.jpg',
  },
  {
    name: 'Sultan Al-Luhum',
    description: 'Admin dashboard plus a companion iOS app shipped to the App Store.',
    stack: ['Angular', 'Flutter', 'iOS'],
    link: 'https://admin.sultanalluhum.org',
    image: '/projects/sultan-al-luhum.jpg',
  },
  {
    name: 'Al-Mitrak',
    description: 'Admin dashboard and a native iOS app built with Flutter.',
    stack: ['Angular', 'Flutter', 'iOS'],
    link: 'https://dashboard.almitrak.org',
    image: '/projects/al-mitrak.jpg',
  },
  {
    name: 'Sindbad Tours Sharm',
    description: 'Tours & travel platform for Sharm El-Sheikh.',
    stack: ['Web'],
    link: 'https://sindbadtoursharm.com',
    image: '/projects/sindbad-tours.jpg',
  },
  {
    name: 'Tracker Freelance',
    description: 'Freelance project & time tracker iOS app, built with Claude AI assistance.',
    stack: ['Flutter', 'iOS', 'AI-assisted'],
    link: null,
    image: '/projects/tracker-freelance.svg',
  },
]

export const skills = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript'] },
  { group: 'Frameworks & Libraries', items: ['Angular', 'React.js', 'Next.js', 'Flutter (Dart)'] },
  { group: 'Styling', items: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Materialize CSS'] },
  { group: 'Backend & Database', items: ['Node.js', 'Express.js', 'MongoDB'] },
  { group: 'Tools & Practices', items: ['Git', 'RESTful APIs', 'AI-assisted development', 'Problem-solving'] },
]

export const education = {
  degree: "Bachelor's Degree — Faculty of Computers and Information Technology",
  period: '2013 — 2017',
}

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Proficient' },
]
