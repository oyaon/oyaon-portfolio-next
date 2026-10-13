export type Project = {
  number: string;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  status: string;
  sourceHref?: string;
  demoHref?: string;
};

export const projects: Project[] = [
  {
    number: '01',
    title: 'Cognitive Engine Explorer',
    category: 'Interactive systems',
    summary:
      'A dashboard simulating policy-based model-tier selection under a cost budget, with policy comparisons and decision traces. Cost estimates are modeled; it makes no live model calls.',
    stack: ['Next.js', 'TypeScript'],
    status: 'Simulation',
    sourceHref: 'https://github.com/oyaon/cognitive-engine-explorer',
    demoHref: 'https://cognitive-engine-explorer.vercel.app/',
  },
  {
    number: '02',
    title: 'FAQ Bot',
    category: 'Applied AI · Search',
    summary:
      'A semantic-search FAQ chatbot with locally generated embeddings, vector similarity search, and confidence-based answer, clarification, or fallback routing.',
    stack: ['NestJS', 'TypeScript', 'Transformers.js', 'Supabase pgvector'],
    status: 'Live demo',
    sourceHref: 'https://github.com/oyaon/FAQ-bot',
    demoHref: 'https://faq-bot-lwt1.onrender.com/',
  },
  {
    number: '03',
    title: 'Dengue Case Prediction',
    category: 'Applied AI · Research',
    summary:
      'Notebook-based forecasting of daily dengue cases in Dhaka (2020–2024) using lag and calendar features with time-series cross-validation. Experimental: the repository reports an XGBoost R² of 0.88; this result has not been independently reproduced.',
    stack: ['Python', 'XGBoost', 'LSTM', 'Prophet', 'SARIMA'],
    status: 'Experimental',
    sourceHref: 'https://github.com/oyaon/ML-Dengue-Prediction',
  },
  {
    number: '04',
    title: 'Marketplace Backend API',
    category: 'Backend engineering',
    summary:
      'A REST API with authentication, role-based access control, and project and request workflows for buyers and solvers.',
    stack: ['Node.js', 'Express.js', 'Prisma', 'PostgreSQL'],
    status: 'Source available',
    sourceHref: 'https://github.com/oyaon/Marketplace-Platform-',
  },
  {
    number: '05',
    title: 'Lemon Lime Canteen Management System',
    category: 'Full-stack application',
    summary:
      'A canteen management project covering order tracking, inventory, sales monitoring, and an administrative dashboard.',
    stack: ['PHP', 'JavaScript', 'MySQL'],
    status: 'Repository link pending',
  },
];
