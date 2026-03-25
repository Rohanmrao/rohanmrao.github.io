export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "reachme", label: "Reach me" },
] as const;

export const hero = {
  headline: "Hi, I'm",
  strikeName: "Rohan",
  name: "Dennis Rodman",
  tagline: "Student, developer, guitarist",
  subline: "NBA Hall of Famer",
};

export const about = {
  title: "About me",
  lead: "I'm a final year B.Tech (ECE) student @ PESU Bangalore and I'm passionate about building new things.",
  body: [
    "Love software development, robotics and machine learning.",
    "I'm currently an SWE intern @ KangaSys.",
    "When I ain't clicking the keyboard, you can find me playing the guitar, shooting hoops or watching movies…",
  ],
  skillsLabel: "Key skills",
  skills:
    "JS, Python, Matlab, MERN Stack, .NET, Tensorflow, PyTorch, AWS, Terraform, git, Docker, Restful APIs and Linux",
};

export type ExperienceItem = {
  role: string;
  period: string;
  org: string;
  details: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Junior SWE Intern",
    period: "Jan 24 — Present",
    org: "Kangasys Pty Ltd",
    details:
      "Full stack development (MERN / Flask / .NET) and AWS deployments (Terraform).",
  },
  {
    role: "Software R&D Intern",
    period: "Aug 23 — Dec 23",
    org: "Qualitas Technologies Pvt Ltd",
    details:
      "Production-grade DL pipelines (PyTorch + Tensorflow) and AI workflow automation (MS Semantic Kernel, OpenAI APIs, MERN).",
  },
  {
    role: "Teaching Assistant — Digital Image Processing",
    period: "Aug 23 — Dec 23",
    org: "Dept. of ECE",
    details:
      "Assisted 5th semester ECE students with image processing in Matlab, projects, quizzes, and grading.",
  },
  {
    role: "PES Innovation Lab (formerly Microsoft Innovation Lab)",
    period: "Jun 23 — Aug 23",
    org: "Summer intern",
    details:
      "Intra-warehouse package management with collaborative robotics: multi-agent RL for autonomous manipulation, deliveries, and order queuing.",
  },
];

export type ProjectItem = {
  title: string;
  description: string;
  href: string;
  highlight?: string;
};

export const projects: ProjectItem[] = [
  {
    title: "ML driven audio visualiser",
    description:
      "Music genre classifier via gradient boosting (XGBoost) driving a controllable LED array for real-time beat visualisation and lighting from tempo and genre. Best project for ML (UE20EC352).",
    href: "https://github.com/Rohanmrao/Audio_Visualizer",
  },
  {
    title: "ML assisted de-speckling of images",
    description:
      "Regression and classification models to predict optimum filter sizes for denoising from noise level. Best project for Digital Image Processing (UE20EC317).",
    href: "https://github.com/Rohanmrao/Image-Despeckling",
  },
  {
    title: "Career guidance system for soldiers",
    description:
      "ML-based career guidance for ex-military using physical and mental performance data collected during service.",
    href: "https://github.com/Rohanmrao/Career-Guidance",
  },
  {
    title: "FRedBots",
    description:
      "Multi-agent RL for task scheduling in collaborative robotics — package transport and warehouse logistics.",
    href: "https://github.com/Rohanmrao/fredbots",
  },
  {
    title: "Box counter bot",
    description:
      "Robot using image processing and background subtraction to count containers; real-time data on ThingSpeak.",
    href: "https://github.com/Rohanmrao/BoxCounter",
  },
  {
    title: "Arthrobots (under development)",
    description:
      "Federated RL collaborative quadruped setup for intra-warehouse logistics — final year project; hardware prototypes planned.",
    href: "https://github.com/Rohanmrao/fredbots",
  },
];

export const contact = {
  intro: "Email, GitHub, and LinkedIn — say hello.",
  links: [
    { label: "Email", href: "mailto:rohanmaheshrao10@gmail.com" },
    { label: "GitHub", href: "https://github.com/Rohanmrao" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rohan-mahesh-rao-0aba62187/",
    },
  ],
  closing: "Do reach out.",
};

export const footer = {
  name: "Rohan Mahesh Rao",
  year: new Date().getFullYear(),
};
