export type Project = {
  number: string;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  status: 'Evidence to verify' | 'Prototype' | 'Research';
  href?: string;
};

// Keep claims conservative until each repository, demo and outcome is verified.
export const projects: Project[] = [
  { number: '01', title: 'Marketplace Backend API', category: 'Backend engineering', summary: 'A role-based marketplace workflow for buyers, solvers and administrators, built around project requests and status transitions.', stack: ['Node.js', 'Express', 'Prisma', 'PostgreSQL'], status: 'Evidence to verify' },
  { number: '02', title: 'Dengue Forecasting Research', category: 'Applied AI · Data', summary: 'A Dhaka-focused study exploring time-series forecasting with dengue case history, weather context and model comparisons.', stack: ['Python', 'Pandas', 'XGBoost', 'Prophet', 'Time series'], status: 'Research' },
  { number: '03', title: 'Library Management System', category: 'Application development', summary: 'A library workflow project. Feature scope, implementation details and reported usage figures will be published only after repository evidence is checked.', stack: ['Web application', 'Database'], status: 'Evidence to verify' },
  { number: '04', title: 'Lemon Lime Canteen System', category: 'Full-stack application', summary: 'A canteen management project; final case-study details will be based on the actual source and screenshots.', stack: ['Web development', 'Database'], status: 'Evidence to verify' },
  { number: '05', title: 'Cognitive Engine Explorer', category: 'Interactive systems', summary: 'An interface concept for exploring layered AI system architecture. Current functionality and repository status still need validation.', stack: ['Next.js', 'TypeScript'], status: 'Prototype' },
  { number: '06', title: 'AgriFund AI', category: 'Applied AI · Prototype', summary: 'A voice-first agricultural assistant concept for Bangladeshi farmers, with emphasis on accessible guidance and disease-identification workflows.', stack: ['Python', 'ML', 'Bangla UX'], status: 'Prototype' },
];
