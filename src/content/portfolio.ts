export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "blogs", label: "Blog" },
  { id: "reachme", label: "Reach me" },
] as const;

export const hero = {
  headline: "Hi, I'm",
  name: "Rohan Mahesh Rao",
  tagline:
    "Software engineer focused on full-stack development, AI, and machine learning — scalable, production-ready systems.",
  subline: "Let the problem define the approach.",
};

export const about = {
  title: "About me",
  lead: "In the tech realm, my philosophy is simple: let the problem define the approach. I care about end-to-end delivery, from APIs and data stores to cloud and ML pipelines.",
  body: [
    "B.Tech in Electronics and Communication Engineering with a minor in Computer Science from PES University (8.0/10). Four-time DAC (Distinction Award Certificate) holder.",
    "Community development volunteer with the Dept. of ECE: computer literacy sessions and team-building activities for government school students.",
    "Off the clock: guitar, basketball, and films.",
  ],
  skillsLabel: "Skills",
  skills:
    "ASP.NET, React, GenAI, MCP servers. MySQL, MongoDB, Elasticsearch, ClickHouse, PostgreSQL, Neo4j. TypeScript, JavaScript, C#, Python, shell scripting. Git, AWS, Docker, Kubernetes, Terraform, JIRA.",
};

export type ExperienceItem = {
  role: string;
  period: string;
  org: string;
  location?: string;
  details: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Junior Software Engineer",
    period: "Jan 2024 — Mar 2026",
    org: "Kangasys Pty Ltd",
    location: "Bangalore",
    details: [
      "Designed and delivered KangaKonnect, an in-house site onboarding platform, improving product integration speed by 2×.",
      "Led backend development for enterprise APIs using ASP.NET, owning end-to-end architecture from controllers to services, SOLID practices, and code reviews.",
      "Architected and managed AWS production systems using App Runner, ECS, ECR, and Lambda.",
      "Designed and maintained CI/CD across dev, staging, and production for reliable deployments.",
      "Managed database performance for ClickHouse and PostgreSQL — query optimization, indexing, and stability at billions of rows.",
      "Drove R&D on AI-driven capabilities and advanced data processing.",
    ],
  },
  {
    role: "Software R&D Intern",
    period: "Oct 2023 — Jan 2024",
    org: "Qualitas Technologies Pvt Ltd",
    location: "Bangalore",
    details: [
      "Developed and deployed production-grade deep learning pipelines in PyTorch and TensorFlow integrated into existing computer vision systems.",
      "Implemented Vision Transformers (ViT) for classification and fault detection, improving inference speed by 3×.",
      "Built AI workflow automation with Semantic Kernel and OpenAI APIs, orchestrating multi-step LLM pipelines in Python.",
      "Contributed to Azure deployments and full-stack work with the MERN stack.",
    ],
  },
];

export type ProjectItem = {
  title: string;
  description: string;
  href: string;
  context?: string;
};

export const projects: ProjectItem[] = [
  {
    title: "ML-assisted image despeckling",
    context: "PES University",
    description:
      "ML-assisted despeckling for SAR images: Random Forest, SVM, and Multinomial & Bernoulli Naive Bayes models to predict optimal Lee filter kernel size from HSV features, improving noise reduction while preserving detail. Post-processing with unsharp masking for edge clarity; evaluated on real SAR datasets.",
    href: "https://github.com/Rohanmrao/Image-Despeckling",
  },
  {
    title: "FRedBots",
    context: "PES Innovation Lab",
    description:
      "Multi-agent reinforcement learning for warehouse automation with Q-learning and ROS — path planning, task allocation, and collision avoidance on a dynamic grid. Scalable collaborative robotics with intelligent scheduling and deadlock prevention via centralized controllers; simulated in Gazebo + ROS.",
    href: "https://github.com/Rohanmrao/fredbots",
  },
];

export type PublicationItem = {
  title: string;
  venue: string;
  href: string;
};

export const publication: PublicationItem = {
  title: "FRedBots: Fundamental Reinforcement Learning Enabled Bots",
  venue: "IEEE",
  href: "https://doi.org/10.1109/ICCCR65461.2025.11072598",
};

export type ContactLink = {
  label: string;
  href: string;
  download?: string;
};

export const contact = {
  intro: "Email, resume, GitHub, and LinkedIn — say hello.",
  links: [
    { label: "Email", href: "mailto:rohanmaheshrao10@gmail.com" },
    {
      label: "Resume",
      href: "/static/RohanRao-SoftwareEngineer.pdf",
      download: "RohanRao-SoftwareEngineer.pdf",
    },
    { label: "GitHub", href: "https://github.com/Rohanmrao" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rohan-mahesh-rao-0aba62187/",
    },
  ] satisfies ContactLink[],
  closing: "Do reach out.",
};

export const footer = {
  name: "Rohan Mahesh Rao",
  year: new Date().getFullYear(),
};
