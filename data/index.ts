/** @format */

import { Code, Database, Globe, Settings } from 'lucide-react';
import { CVData, Experience, SkillGroup, User, CVType } from '../models';
export const user: User = {
  fullName: 'Pham Quoc Vu',
  email: 'phamquocvu19992@gmail.com',
  phone: '0932720897',
  address: 'Go Vap District, HCMC',
  birthDate: 'Born 1992',
  position: 'Senior Fullstack Developer (.NET)',
  infos: [
    `Full-stack Developer with 4 years of experience, specializing in C# .Net, and modern frontend frameworks including ReactJS, AngularJS`,
    `Skilled in databases (MySQL, PostgreSQL, MongoDB, SQL server), API integration (REST, GraphQL), and system architecture & design`,
    `Proficient in Cloud & DevOps (AWS, Docker, Kubernetes, Jenkins, CI/CD) with solid knowledge of Agile/Scrum methodologies`,
    `Proven leadership with strong analytical and problem-solving skills, delivering scalable and secure solutions.`,
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    icon: {
      iconType: Code,
      className: 'w-5 h-5 text-blue-600',
    },
    markerClassName: 'w-2 h-2 rounded-full bg-blue-600',
    name: 'Backend Skills',
    child: [
      '.NET Core (C#)',
      'ASP.NET Web API',
      'Entity Framework',
      'SignalR',
      'Node.js',
      'Microservices Architecture',
      'Clean Architecture',
      'LINQ',
    ],
  },
  {
    icon: {
      iconType: Globe,
      className: 'w-5 h-5 text-blue-600',
    },
    markerClassName: 'w-2 h-2 rounded-full bg-cyan-600',
    name: 'Frontend Skills',
    child: [
      'Angular, NgRX, RxJS',
      'ReactJS, Next.js',
      'TypeScript',
      'Redux Saga',
      'Micro Frontend',
      'HTML/CSS',
      'Tailwind CSS',
      'Bootstrap',
      'SCSS/Less',
      'PrimeNG',
      'Ant Design',
      'Webpack',
      'Vite',
    ],
  },
  {
    icon: {
      iconType: Database,
      className: 'w-5 h-5 text-blue-600',
    },
    markerClassName: 'w-2 h-2 rounded-full bg-blue-600',
    name: 'Database & Others',
    child: [
      'SQL Server',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'ElasticSearch',
    ],
  },
  {
    name: 'Tools',
    markerClassName: 'w-2 h-2 rounded-full bg-cyan-600',
    icon: {
      iconType: Settings,
      className: 'w-5 h-5 text-blue-600',
    },
    child: ['Jira', 'Postman', 'Swagger', 'Git', 'Jenkins', 'Agile/Scrum'],
  },
];

export const experiences: Experience[] = [
  {
    company: 'Athena Pros (Partner Dragon Capital)',
    position: 'Fullstack Engineer',
    period: 'April 2022 - Oct 2025',
    responsibilities: [
      `Core developer of <strong>IRIS</strong>, an enterprise-grade investment fund management system used to support <strong>Dragon Capital</strong>’s fund operations, including portfolio management, fund performance evaluation, risk monitoring, and investor reporting. `,
      `Participate in the complete redevelopment of an old monolithic system built with <strong>ASP.NET MVC (.NET Core 2.0)</strong> to a new modern microservice-based architecture using <strong>.NET 6, Angular</strong> and <strong>ElasticSearch</strong>.`,
      `Implemented backend logic using .NET Core WebAPI and Entity Framework Core to handle real-time market data and custom user watchlists.`,
      `Collaborated with DevOps team using <strong>Azure DevOps</strong> for CI/CD and version control.`,
      `Contributed to system performance enhancements and migrated data to upgraded <strong>SQL Server.</strong>`,
      `<strong>Revamped UI/UX</strong> for a modern, intuitive experience, enhancing real-time portfolio tracking, investor management, and performance analytics.`,
      `<strong>Optimized performance</strong>, reducing load times by <strong>30%</strong> and improving responsiveness by <strong>40%</strong> through <strong>lazy loading, code splitting, and caching</strong>.`,
      `Developed and maintained <strong>shared UI component libraries</strong> to ensure design consistency across multiple <strong>Micro-frontend</strong> applications.`,
      `<strong>Figma to High-Quality Code</strong>: Directly translated complex design mockups from <strong>Figma</strong> into pixel-perfect, reusable UI components, ensuring a consistent and professional user experience.`,
      `<strong>State Management & Performance</strong>: Leveraged <strong>NgRX</strong> and <strong>RxJS</strong> to manage complex application states and handle real-time market data streams efficiently.`,
      `<strong>Real-time Integration</strong>: Implemented <strong>SignalR</strong> to facilitate live price updates and instant notifications without page reloads.`,
      `<strong>Custom Visualization</strong>: Developed specialized <strong>Custom Pages</strong> and <strong>Custom Charts</strong> to visualize intricate financial data, improving the analytical capabilities of fund managers.`,
    ],
    technologies: [
      '.Net core 2',
      '.Net 6',
      'SQL Server',
      'Microservices',
      'ElasticSearch',
      'Redis',
      'SignalR',
      'Clean Architecture',
      'APM',
      'Angular 16',
      'PrimeNG',
      'Micro front-end',
    ],
  },
  {
    company: 'CMS Social Network',
    position: 'Fullstack Engineer (Freelancer)',
    period: 'Feb 2022 - Apr 2022',
    responsibilities: [
      `A social network, the system that allows posting of paid content images has 2 types of users: content creator with normal users`,
    ],
    technologies: [
      'React js',
      'Nextjs',
      'AntD',
      'Mongodb',
      'Redis',
      'Websocket',
    ],
  },
  {
    company: 'DAT VIET SOFTWARE',
    position: 'Fullstack Engineer',
    period: 'Jun 2021 - Nov 2021',
    responsibilities: [
      `A C# program and <strong>ASP.NET MVC 5</strong> help teacher administration to manage Document and student, manage teacher work, calculate kpi teacher, material management school`,
      `<strong>SignalR</strong> make a chat app for teachers, <strong>One signal</strong> to notifaction`,
      `Api for app android, ios`,
      `Export report word excel by user template`,
    ],
    technologies: [
      'Asp.net',
      'Sql sever',
      'Ajax, jquery',
      'css, BOOTSTRAP',
      'fire base',
      'One signal',
    ],
  },
];

export const feSkillGroup: SkillGroup[] = [
  {
    icon: {
      iconType: Code,
      className: 'w-5 h-5 text-blue-600',
    },
    markerClassName: 'w-2 h-2 rounded-full bg-blue-600',
    name: 'Backend Skills (Supporting)',
    child: [
      '.NET Core (C#)',
      'ASP.NET Web API',
      'Entity Framework',
      'SignalR',
      'Node.js',
    ],
  },
  {
    icon: {
      iconType: Globe,
      className: 'w-5 h-5 text-blue-600',
    },
    markerClassName: 'w-2 h-2 rounded-full bg-cyan-600',
    name: 'Frontend Skills (Main Strength)',
    child: [
      'Angular, NgRX, RxJS',
      'ReactJS, Next.js',
      'TypeScript',
      'Redux Saga',
      'Micro Frontend',
      'HTML/CSS',
      'Tailwind CSS',
      'Bootstrap',
      'SCSS/Less',
      'PrimeNG',
      'Ant Design',
      'Webpack',
      'Vite',
    ],
  },
  {
    icon: {
      iconType: Database,
      className: 'w-5 h-5 text-blue-600',
    },
    markerClassName: 'w-2 h-2 rounded-full bg-blue-600',
    name: 'Database & Others',
    child: ['SQL Server', 'MongoDB'],
  },
  {
    name: 'Tools',
    markerClassName: 'w-2 h-2 rounded-full bg-cyan-600',
    icon: {
      iconType: Settings,
      className: 'w-5 h-5 text-blue-600',
    },
    child: ['Jira', 'Postman', 'Swagger', 'Git', 'Jenkins', 'Agile/Scrum'],
  },
];

export const feUser: User = {
  ...user,
  position: 'Frontend Developer',
  infos: [
    `Senior Full-stack Developer with 4+ years of experience,frontend-focused with strong expertise in Angular.`,
    `Started career with ASP.NET MVC (.NET),then transitioned to modern SPA architecture using Angular and ASP.NET Core Web API.`,
    `Experienced in building large-scale enterprise systems, specializing in UI/UX implementation, state management, performance optimization, and real-time data handling, while maintaining solid backend and database knowledge.`,
  ],
};

export const feExperiences: Experience[] = [...experiences];

feExperiences[0].responsibilities = [
  `Core developer of IRIS, an enterprise-grade investment fund management system used to support Dragon Capital’s fund operations, including portfolio management, fund performance evaluation, risk monitoring, and investor reporting.`,
  `Participated in maintaining and understanding a legacy system built with <strong>ASP.NET MVC (.NET Core 2.0).</strong>`,
  `Involved in the migration process from server-side rendered MVC to a modern Angular SPA architecture.`,
  `Collaborated with DevOps team using <strong>Azure DevOps</strong> for CI/CD and version control.`,
  `<strong>Revamped UI/UX</strong> for a modern, intuitive experience, enhancing real-time portfolio tracking, investor management, and performance analytics.`,
  `<strong>Optimized performance</strong>, reducing load times by <strong>30%</strong> and improving responsiveness by <strong>40%</strong> through <strong>lazy loading, code splitting, and caching</strong>.`,
  `Developed and maintained <strong>shared UI component libraries</strong> to ensure design consistency across multiple <strong>Micro-frontend</strong> applications.`,
  `<strong>Figma to High-Quality Code</strong>: Directly translated complex design mockups from <strong>Figma</strong> into pixel-perfect, reusable UI components, ensuring a consistent and professional user experience.`,
  `<strong>State Management & Performance</strong>: Leveraged <strong>NgRX</strong> and <strong>RxJS</strong> to manage complex application states and handle real-time market data streams efficiently.`,
  `<strong>Real-time Integration</strong>: Implemented <strong>SignalR</strong> to facilitate live price updates and instant notifications without page reloads.`,
  `<strong>Custom Visualization</strong>: Developed specialized <strong>Custom Pages</strong> and <strong>Custom Charts</strong> to visualize intricate financial data, improving the analytical capabilities of fund managers.`,
];

export const cvData: CVData = {
  [CVType.FULLSTACK]: {
    user,
    skillGroups,
    experiences,
  },
  [CVType.FRONTEND]: {
    user: feUser,
    skillGroups: feSkillGroup,
    experiences: feExperiences,
  },
};
