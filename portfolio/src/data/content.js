// All content sourced directly from Adamya Mehta's resume.
// No invented companies, metrics, or experience.

export const personal = {
  name: 'Adamya Mehta',
  roles: [
    'Full Stack Developer',
    'MERN Developer',
    'AI Engineer',
    'Backend Developer',
    'Node.js Developer',
  ],
  location: 'Ujjain / Madhya Pradesh, India',
  email: 'mehtaadamya7@gmail.com',
  phone: '+91 9183155787',
  linkedin: 'https://linkedin.com/in/adamya-mehta',
  github: 'https://github.com/AdamyaMehta07',
  summary:
    "Computer Science graduate and Full Stack + AI Developer with 204+ production Git commits. Experienced in MERN stack development and Groq AI API integration, with a focus on responsive UI design, secure JWT authentication, and optimized backend architectures.",
  tagline:
    "I build production-grade web applications — from secure authentication systems to AI-powered tools that turn raw data into finished products.",
};

export const quickFacts = [
  { label: 'Location', value: 'Ujjain, Madhya Pradesh' },
  { label: 'Education', value: 'B.Tech, Computer Science' },
  { label: 'Focus', value: 'MERN Stack + AI Integration' },
  { label: 'Experience', value: '2 Internships · 204+ Commits' },
];

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript (ES6+)', 'Java', 'Python', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Tailwind CSS', 'TanStack Query', 'Recharts', 'Framer Motion', 'Responsive Design'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST API', 'JWT', 'bcrypt', 'Rate Limiting', 'Helmet'],
  },
  {
    category: 'Databases & Tools',
    items: ['MongoDB', 'Mongoose', 'SQL', 'Git / GitHub', 'Postman', 'Vercel', 'Render'],
  },
  {
    category: 'Core CS',
    items: ['Data Structures', 'Operating Systems', 'DBMS', 'Computer Networks'],
  },
];

export const projects = [
  {
    id: 'ai-code-reviewer',
    name: 'AI Code Reviewer',
    tagline: 'Turn GitHub repos into a recruiter-ready portfolio review.',
    overview:
      "A full-stack MERN application that submits a GitHub repository and returns an AI-generated review covering code quality, security, architecture, and a recruiter's perspective — all in one dashboard.",
    problem:
      'Developers struggle to know how their public repositories actually read to a recruiter or reviewer — there was no fast, structured way to get objective feedback on code quality, security, and architecture at a glance.',
    solution:
      'Built a pipeline that pulls repository data via the GitHub REST API, filters it down to signal-carrying files, and sends it to Groq AI (LLaMA 3.1) for structured analysis. Results are rendered as scored breakdowns across multiple engineering dimensions.',
    architecture:
      'React frontend with TanStack Query for server-state caching, an Express/Node backend with JWT-based auth and role-based routing, and a MongoDB store for project history and scores. Groq AI handles the review generation layer.',
    features: [
      'JWT authentication with role-based routing',
      'GitHub REST API integration to fetch and parse repositories',
      'AI-generated scoring across code quality, security, architecture & performance',
      'Portfolio Builder to curate and share featured projects publicly',
      'Score radar chart and detailed breakdown per project',
    ],
    challenges:
      'Raw repository payloads from GitHub included large amounts of non-essential files and metadata. A filtering pipeline was engineered to strip noise before sending data to the AI model, which cut processing overhead by 35% and kept review latency low.',
    engineeringDecisions: [
      'Chose Groq AI (LLaMA 3.1) for fast inference on repository analysis',
      'Used TanStack Query to cache server state, cutting loading times by 50%',
      'Implemented role-based route protection to separate public portfolio views from authenticated dashboards',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Groq AI', 'JWT', 'TanStack Query', 'GitHub API'],
    role: 'Solo Full Stack Developer',
    timeline: 'Personal Project',
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Overhead reduced', value: '35%' },
      { label: 'Load time cut', value: '50%' },
    ],
    live: 'https://aicodereviewer-ten.vercel.app/',
    githubUrl: 'https://github.com/AdamyaMehta07/aicodereviewer',
    images: ['aicodereviewer-landing', 'aicodereviewer-dashboard', 'aicodereviewer-review'],
  },
  {
    id: 'ai-resume-to-portfolio',
    name: 'AI Resume to Portfolio Builder',
    tagline: 'Deployment-ready portfolios generated from a resume in under 10 seconds.',
    overview:
      'An AI-powered SaaS tool that converts an uploaded resume into a fully deployable portfolio website — extracting structured data automatically and rendering it into a polished, exportable template.',
    problem:
      "Turning a resume into a presentable personal portfolio site normally takes hours of manual formatting and web development — a barrier for many developers who'd rather spend that time building.",
    solution:
      'Built an upload-to-deploy pipeline: a resume PDF is parsed and passed to Groq AI for structured data extraction (name, skills, experience, projects, education), which is then mapped into a live-editable portfolio template the user can export as standalone HTML.',
    architecture:
      'React frontend with a live preview pane, Node.js/Express backend handling PDF parsing and AI extraction requests, MongoDB for user accounts and saved portfolios, and JWT-protected routes for authenticated actions like editing and exporting.',
    features: [
      'Resume upload (PDF/TXT) with AI-based structured data extraction',
      'Two selectable portfolio templates — Modern Developer and Minimal',
      'Live in-browser preview before export',
      'Full content editing via an in-app Edit Portfolio panel',
      'One-click export to a standalone HTML file',
      'Daily generation limits with authenticated accounts',
    ],
    challenges:
      'Resumes arrive in wildly inconsistent formats and layouts. The extraction prompt and parsing logic needed to reliably normalize varied resume structures into a single consistent schema the frontend could render — while keeping manual data entry to a minimum.',
    engineeringDecisions: [
      'Used Groq AI for structured data extraction, cutting manual creation time by 85%',
      'Secured endpoints with input validation, JWT-protected routing, and API rate limiting',
      'Designed a fallback to a demo portfolio when the extraction backend is unavailable, so the UI never breaks',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'Groq AI', 'JWT', 'Express'],
    role: 'Solo Full Stack Developer',
    timeline: 'Personal Project',
    metrics: [
      { label: 'Manual time cut', value: '85%' },
      { label: 'Generation time', value: '<10s' },
      { label: 'Templates', value: '2' },
    ],
    live: 'https://ai-resume2portfolio.vercel.app/',
    githubUrl: 'https://github.com/AdamyaMehta07/AI-resume2portfolio',
    images: ['resume2portfolio-home', 'resume2portfolio-result', 'resume2portfolio-edit'],
  },
  {
    id: 'invoiceforge',
    name: 'InvoiceForge',
    tagline: 'A fast, local-first invoice generator with zero-layout-shift PDF export.',
    overview:
      'A React-based invoice generator with a live preview, multiple export templates, and fully local data persistence — no backend required to create, manage, and export professional invoices.',
    problem:
      'Freelancers and small teams need a lightweight way to generate professional invoices without paying for or setting up a full accounting SaaS product.',
    solution:
      'Built a three-state invoice workflow (Draft, Sent, Paid) with a live-updating preview pane, backed entirely by LocalStorage for zero-setup persistence, and PDF export engineered for zero layout shift between the on-screen preview and the exported document.',
    architecture:
      'Single-page React app using Tailwind CSS for styling and the jsPDF library for client-side PDF generation. All invoice data — 50+ invoices supported — is stored and retrieved from LocalStorage, keeping the app fully client-side.',
    features: [
      'Live invoice preview updating as fields are filled in',
      'Three selectable export templates — Minimal, Modern, Corporate',
      'Dashboard with revenue, outstanding balance, and invoice status filters',
      'Draft / Sent / Paid / Overdue status workflow',
      'One-click PDF export with no layout shift',
    ],
    challenges:
      'Matching the exported PDF pixel-for-pixel to the live on-screen preview required carefully controlling how jsPDF rendered dynamic content, since naive exports introduced layout shift between what the user saw and what they downloaded.',
    engineeringDecisions: [
      'Chose LocalStorage over a backend for a zero-setup, fully client-side tool',
      'Optimized frontend delivery via lazy loading, increasing page load speed by 40%',
      'Engineered the PDF export path specifically to avoid layout shift against the live preview',
    ],
    stack: ['React', 'Tailwind CSS', 'jsPDF', 'LocalStorage'],
    role: 'Solo Frontend Developer',
    timeline: 'Personal Project',
    metrics: [
      { label: 'Load speed gain', value: '40%' },
      { label: 'Invoices supported', value: '50+' },
      { label: 'Templates', value: '3' },
    ],
    live: 'https://invoice-forge-beige.vercel.app/',
    githubUrl: 'https://github.com/AdamyaMehta07/InvoiceForge',
    images: ['invoiceforge-dashboard', 'invoiceforge-create', 'invoiceforge-preview'],
  },
];

export const experience = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Affimentus',
    location: 'Indore, MP',
    period: 'July 2025 – Nov 2025',
    points: [
      'Developed full-stack MERN applications using the MVC pattern, boosting query performance by 25% via indexing.',
      'Built reusable React components to standardize state management and improve maintainability.',
      'Implemented secure user authentication workflows using JWT tokens and bcrypt encryption.',
      'Managed codebase and deployments using structured Git workflows, pull requests, and conflict resolution.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Jobsence',
    location: 'Ujjain, MP',
    period: 'Aug 2023 – Oct 2023',
    points: [
      'Created responsive layouts with 100% cross-browser rendering accuracy using HTML5, CSS3, and JavaScript.',
      'Built interactive UI modules using modern layout techniques like CSS Flexbox and Grid.',
      'Collaborated in Git-based feature teams to write clean, semantic markup.',
    ],
  },
];

export const education = [
  {
    school: 'Mahakal Institute of Technology (RGPV)',
    location: 'Ujjain, MP',
    degree: 'B.Tech in Computer Science',
    detail: 'CGPA: 7.00 / 10',
    period: '2022 – 2026',
  },
  {
    school: 'Lokmanya Tilak School (MP Board)',
    location: 'Ujjain, MP',
    degree: 'Higher Secondary Education',
    detail: 'CGPA: 7.2 / 10',
    period: '2020 – 2022',
  },
];

export const achievements = [
  { label: 'Production Git Commits', value: 204, suffix: '+' },
  { label: 'Shipped Projects', value: 3, suffix: '' },
  { label: 'Internships Completed', value: 2, suffix: '' },
  { label: 'Uptime on Live Apps', value: 99.9, suffix: '%' },
];
